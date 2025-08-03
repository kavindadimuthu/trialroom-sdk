import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Group } from 'three';
import { AvatarApi } from '../utils/apiHelper';
import type { AvatarApiResponse } from '../utils/apiHelper';

interface ProductData {
  id?: string | number;
  name?: string;
  brand?: string;
  price?: string;
  image?: string;
  category?: string;
}

interface ViewOption {
  id: ViewType;
  icon: string;
  label: string;
}

interface AvatarModelProps {
  selectedView: ViewType;
  selectedProduct?: ProductData;
  avatarUrl?: string;
}

interface SceneProps {
  selectedView: ViewType;
  selectedProduct?: ProductData;
  avatarUrl?: string;
}

interface AvatarAreaProps {
  hasAvatar?: boolean;
  onCreateAvatar?: () => void;
  selectedProduct?: ProductData;
  avatarId?: string; // New prop for dynamic avatar loading
}

type ViewType = 'front' | 'side' | 'back';

// Avatar Model Component with dynamic URL loading
const AvatarModel: React.FC<AvatarModelProps> = ({ selectedView, selectedProduct, avatarUrl }) => {
  const modelRef = useRef<Group>(null);
  
  // Use the dynamic avatar URL or fallback to default
  const modelUrl = avatarUrl || '/models/sample-man-model.glb';
  
  // Type the GLTF hook properly with error handling
  const { scene, error } = useGLTF(modelUrl) as {
    scene: Group;
    error?: Error;
  };

  console.log('Selected product:', selectedProduct);
  console.log('Loading avatar from:', modelUrl);

  // Memoize the cloned scene to avoid unnecessary re-creation
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return scene.clone();
  }, [scene]);

  // Always call useFrame unconditionally
  useFrame(() => {
    if (!modelRef.current) return;

    // Calculate target rotation based on selected view
    const getTargetRotation = (view: ViewType): number => {
      switch (view) {
        case 'front':
          return 0;
        case 'side':
          return Math.PI / 2;
        case 'back':
          return Math.PI;
        default:
          return 0;
      }
    };

    const targetRotationY = getTargetRotation(selectedView);

    // Smooth rotation interpolation with proper TypeScript
    const currentRotation = modelRef.current.rotation.y;
    const diff = targetRotationY - currentRotation;
    const normalizedDiff = Math.atan2(Math.sin(diff), Math.cos(diff));
    
    // Apply smooth rotation with configurable speed
    const rotationSpeed = 0.1;
    modelRef.current.rotation.y += normalizedDiff * rotationSpeed;
  });

  // Handle loading errors
  if (error) {
    console.error('Failed to load avatar model:', error);
    return null;
  }

  if (!clonedScene) {
    return null;
  }

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      scale={1.8}
      position={[0, -2.5, 0]}
      castShadow
      receiveShadow
    />
  );
};

// Ground plane component with proper TypeScript
const Ground: React.FC = () => {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -2.5, 0]} 
      receiveShadow
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial 
        color="#f5f5f5" 
        transparent 
        opacity={0} 
      />
    </mesh>
  );
};

// Scene Setup Component with proper lighting and environment
const Scene: React.FC<SceneProps> = ({ selectedView, selectedProduct, avatarUrl }) => {
  // Memoize lighting configuration
  const lightingConfig = useMemo(() => ({
    ambient: { intensity: 0.6 },
    directional: {
      position: [5, 10, 5] as [number, number, number],
      intensity: 1.2,
      shadow: {
        mapSize: [2048, 2048] as [number, number],
        camera: {
          far: 50,
          left: -10,
          right: 10,
          top: 10,
          bottom: -10,
        }
      }
    },
    point: {
      position: [-5, 5, -5] as [number, number, number],
      intensity: 0.3
    }
  }), []);

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={lightingConfig.ambient.intensity} />
      <directionalLight
        position={lightingConfig.directional.position}
        intensity={lightingConfig.directional.intensity}
        castShadow
        shadow-mapSize={lightingConfig.directional.shadow.mapSize}
        shadow-camera-far={lightingConfig.directional.shadow.camera.far}
        shadow-camera-left={lightingConfig.directional.shadow.camera.left}
        shadow-camera-right={lightingConfig.directional.shadow.camera.right}
        shadow-camera-top={lightingConfig.directional.shadow.camera.top}
        shadow-camera-bottom={lightingConfig.directional.shadow.camera.bottom}
      />
      <pointLight 
        position={lightingConfig.point.position} 
        intensity={lightingConfig.point.intensity} 
      />

      {/* Environment and lighting */}
      <Environment preset="apartment" />

      {/* Ground and shadows */}
      <Ground />
      <ContactShadows
        position={[0, -2.49, 0]}
        opacity={0.6}
        scale={4}
        blur={2}
        far={2.5}
        color="#000000"
      />

      {/* Avatar model with dynamic URL */}
      <AvatarModel 
        selectedView={selectedView} 
        selectedProduct={selectedProduct}
        avatarUrl={avatarUrl}
      />

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={4}
        maxDistance={10}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0.75, 0]}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
      />
    </>
  );
};

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
  </div>
);

// Error component
const ErrorDisplay: React.FC<{ error: string; onRetry?: () => void }> = ({ error, onRetry }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-red-500">
    <p className="text-lg font-semibold mb-2">Error loading avatar</p>
    <p className="text-sm mb-4">{error}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Retry
      </button>
    )}
  </div>
);

// No Avatar component
const NoAvatarDisplay: React.FC<{ onCreateAvatar?: () => void }> = ({ onCreateAvatar }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
    {/* Large Avatar Icon */}
    <div className="w-32 h-32 flex items-center justify-center mb-6">
      <img 
        src="/icons/Vector.png" 
        alt="Avatar placeholder" 
        className="w-full h-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
    
    {/* No Avatar Text */}
    <h3 className="text-xl font-semibold text-gray-800 mb-6">No avatar available</h3>
    
    {/* Create Avatar Button */}
    <button
      className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
      onClick={onCreateAvatar}
      disabled={!onCreateAvatar}
      aria-label="Create new avatar"
    >
      <img 
        src="/icons/box.png" 
        alt="" 
        className="w-5 h-5"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      <span>Create Avatar</span>
    </button>
  </div>
);

// Avatar Info Display Component
const AvatarInfoDisplay: React.FC<{ avatarData: AvatarApiResponse }> = ({ avatarData }) => (
  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
    <h4 className="font-semibold text-sm mb-2">{avatarData.avatarName}</h4>
    <div className="text-xs space-y-1 text-gray-600">
      <p>Gender: {avatarData.gender}</p>
      <p>Height: {avatarData.bodyMeasurement.height}m</p>
      <p>Weight: {avatarData.bodyMeasurement.weight}kg</p>
      <p>Status: {avatarData.avatarStatus}</p>
    </div>
  </div>
);

// View Controls component
const ViewControls: React.FC<{
  selectedView: ViewType;
  onViewChange: (view: ViewType) => void;
}> = ({ selectedView, onViewChange }) => {
  const viewOptions: ViewOption[] = useMemo(() => [
    { 
      id: 'front', 
      icon: '/icons/view-controls/set-standing-pose-man-silhouette-1.png', 
      label: 'Front' 
    },
    { 
      id: 'side', 
      icon: '/icons/view-controls/set-standing-pose-man-silhouette-2.png', 
      label: 'Side' 
    },
    { 
      id: 'back', 
      icon: '/icons/view-controls/set-standing-pose-man-silhouette-3.png', 
      label: 'Back' 
    }
  ], []);

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex space-x-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        {viewOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onViewChange(option.id)}
            className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
              selectedView === option.id
                ? 'bg-black text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label={`Switch to ${option.label} view`}
          >
            <img
              src={option.icon}
              alt={option.label}
              className={`w-8 h-8 object-contain mb-2 transition-all duration-200 ${
                selectedView === option.id ? 'filter invert' : ''
              }`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '0.5';
              }}
            />
            <span className="text-xs font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Main AvatarArea component
const AvatarArea: React.FC<AvatarAreaProps> = ({ 
  hasAvatar = true, 
  onCreateAvatar,
  selectedProduct,
  avatarId
}) => {
  const [selectedView, setSelectedView] = useState<ViewType>('front');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [avatarData, setAvatarData] = useState<AvatarApiResponse | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // Load avatar data when avatarId changes
  useEffect(() => {
    const loadAvatar = async () => {
      if (!avatarId) {
        setAvatarData(null);
        setAvatarUrl(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        console.log('Loading avatar with ID:', avatarId);
        const data = await AvatarApi.getAvatar(avatarId);
        
        // Validate the signed URL
        const isUrlValid = await AvatarApi.validateAvatarUrl(data.signedUrl);
        if (!isUrlValid) {
          throw new Error('Avatar file is not accessible');
        }

        setAvatarData(data);
        setAvatarUrl(data.signedUrl);
        console.log('Avatar loaded successfully:', data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load avatar';
        console.error('Error loading avatar:', errorMessage);
        setError(errorMessage);
        setAvatarData(null);
        setAvatarUrl(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadAvatar();
  }, [avatarId]);

  // Handle view change with useCallback for performance
  const handleViewChange = useCallback((view: ViewType): void => {
    setSelectedView(view);
  }, []);

  // Handle avatar creation
  const handleCreateAvatar = useCallback((): void => {
    if (onCreateAvatar) {
      setIsLoading(true);
      try {
        onCreateAvatar();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to create avatar');
      } finally {
        setIsLoading(false);
      }
    }
  }, [onCreateAvatar]);

  // Handle retry
  const handleRetry = useCallback(() => {
    if (avatarId) {
      setError(null);
      // Trigger re-load by updating a dependency
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 100);
    }
  }, [avatarId]);

  // Canvas configuration
  const canvasConfig = useMemo(() => ({
    shadows: true,
    camera: {
      position: [0, 1.0, 3] as [number, number, number],
      fov: 35,
      near: 0.1,
      far: 100
    },
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f4f4f4ff'
    }
  }), []);

  // Render error state
  if (error) {
    return (
      <div className="h-full flex flex-col relative bg-gray-50">
        <ErrorDisplay error={error} onRetry={handleRetry} />
      </div>
    );
  }

  // Render loading state
  if (isLoading) {
    return (
      <div className="h-full flex flex-col relative bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative bg-gray-50">
      <div className="flex-1 relative">
        {hasAvatar && (avatarUrl || !avatarId) ? (
          <>
            <Canvas
              shadows={canvasConfig.shadows}
              camera={canvasConfig.camera}
              style={canvasConfig.style}
              onError={(error) => {
                console.error('Canvas error:', error);
                setError('Failed to initialize 3D viewer');
              }}
            >
              <Scene 
                selectedView={selectedView} 
                selectedProduct={selectedProduct}
                avatarUrl={avatarUrl || undefined}
              />
            </Canvas>
            
            {/* Avatar Info Display */}
            {avatarData && (
              <AvatarInfoDisplay avatarData={avatarData} />
            )}
            
            {/* View Controls */}
            <ViewControls 
              selectedView={selectedView} 
              onViewChange={handleViewChange} 
            />
          </>
        ) : (
          <NoAvatarDisplay onCreateAvatar={handleCreateAvatar} />
        )}
      </div>
    </div>
  );
};

export default AvatarArea;