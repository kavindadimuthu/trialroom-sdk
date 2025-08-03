// import React from 'react';
import qrSample from '/qr/sample-qr.png'; // Make sure this path matches your project structure

const QROverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-[#00000085] flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Let's create you virtual avatar
          </h2>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
            <img
              src={qrSample}
              alt="QR Code"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold text-gray-700">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Scan QR from your phone</h3>
              <p className="text-sm text-gray-600">
                Scan this QR from the camera app on your mobile.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-semibold text-gray-700">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Upload or take a photo of your face & body</h3>
              <p className="text-sm text-gray-600">
                Follow instructions to scan your face & body.
              </p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QROverlay;