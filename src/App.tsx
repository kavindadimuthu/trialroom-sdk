import React, { useState } from 'react';
import Trialroom from './components/Trialroom';

const App: React.FC = () => {
  const [isSelectedTrialroom, setIsSelectedTrialroom] = useState(false);
  
  // Example avatar ID - replace with actual avatar ID from your system
  const sampleAvatarId = '6f01f0bc-059f-4bf0-a6f5-379bab1210a8';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 w-full">
      {isSelectedTrialroom ? (
        <Trialroom
          onClose={() => setIsSelectedTrialroom(false)}
          productData={{ name: 'Sample Product' }}
          config={{ 
            hasAvatar: true,
            avatarId: sampleAvatarId // Pass the avatar ID here
          }}
        />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Trialroom SDK Demo</h1>
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setIsSelectedTrialroom(!isSelectedTrialroom)}
          >
            Toggle Trialroom
          </button>
        </>
      )}
    </div>
  );
};

export default App;