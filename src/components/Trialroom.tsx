import React, { useState } from 'react';
import ClothSelection from './ClothSelection';
import AvatarArea from './AvatarArea';
import LookSelection from './LookSelection';
import QROverlay from './QROverlay';

interface ProductData {
  id?: string | number;
  name?: string;
  brand?: string;
  price?: string;
  image?: string;
  category?: string;
}

interface TrialroomConfig {
  hasAvatar?: boolean;
  theme?: 'light' | 'dark';
  showWishlist?: boolean;
  avatarId?: string; // New prop for dynamic avatar loading
}

interface TrialroomProps {
  onClose?: () => void;
  productData?: ProductData;
  config?: TrialroomConfig;
}

const Trialroom: React.FC<TrialroomProps> = ({ 
  onClose, 
  productData = {}, 
  config = {} 
}) => {
  const [showQROverlay, setShowQROverlay] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductData>(productData);
  const hasAvatar = config.hasAvatar ?? true;

  const handleExit = (): void => {
    if (onClose) {
      onClose();
    }
  };

  const handleCreateAvatar = (): void => {
    setShowQROverlay(true);
  };

  const handleProductSelect = (product: ProductData): void => {
    setSelectedProduct(product);
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 flex">
      {/* Header Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Virtual Trial Room</h1>
          {selectedProduct.name && (
            <span className="text-gray-600">- {selectedProduct.name}</span>
          )}
          {config.avatarId && (
            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Avatar: {config.avatarId.slice(0, 8)}...
            </span>
          )}
        </div>
        <button 
          className="text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-200"
          onClick={handleExit}
          aria-label="Close trial room"
        >
          ✕
        </button>
      </div>

      {/* Main Content */}
      <div className="flex w-full pt-16">
        {/* Left Sidebar - Cloth Selection */}
        <div className="w-80 bg-white h-[calc(100vh-4rem)] border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Select Clothes</h2>
          </div>
          <ClothSelection 
            selectedProduct={selectedProduct}
            onProductSelect={handleProductSelect}
            showWishlist={config.showWishlist}
          />
        </div>

        {/* Center - Avatar Area */}
        <div className="flex-1 bg-white h-[calc(100vh-4rem)]">
          <AvatarArea 
            hasAvatar={hasAvatar} 
            onCreateAvatar={handleCreateAvatar}
            selectedProduct={selectedProduct}
            avatarId={config.avatarId} // Pass the avatar ID
          />
        </div>

        {/* Right Sidebar - Look Selection */}
        <div className="w-80 bg-white h-[calc(100vh-4rem)] border-l border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Styling Options</h2>
          </div>
          <LookSelection selectedProduct={selectedProduct} />
        </div>
      </div>

      {showQROverlay && (
        <QROverlay onClose={() => setShowQROverlay(false)} />
      )}
    </div>
  );
};

export default Trialroom;