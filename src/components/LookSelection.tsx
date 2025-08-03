import React, { useState, useCallback } from 'react';

interface ProductData {
  id?: string | number;
  name?: string;
  brand?: string;
  price?: string;
  image?: string;
  category?: string;
}

interface LookSelectionProps {
  selectedProduct?: ProductData;
  onClearLook?: () => void;
  onShopLook?: (items: ProductData[], options: StyleOptions) => void;
}

interface StyleOptions {
  size: string;
  color: string;
}

interface ColorOption {
  name: string;
  value: string;
}

const LookSelection: React.FC<LookSelectionProps> = ({ 
  selectedProduct,
  onClearLook,
  onShopLook 
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('Medium');
  const [selectedColor, setSelectedColor] = useState<string>('white');

  const sizes: string[] = ['Small', 'Medium', 'Large', 'XL'];
  const colors: ColorOption[] = [
    { name: 'white', value: '#FFFFFF' },
    { name: 'black', value: '#000000' },
    { name: 'blue', value: '#3B82F6' },
    { name: 'gray', value: '#6B7280' }
  ];

  const hasSelectedItems = Boolean(selectedProduct?.id);
  const itemCount = hasSelectedItems ? 1 : 0;

  const handleClearLook = useCallback((): void => {
    if (onClearLook) {
      onClearLook();
    }
  }, [onClearLook]);

  const handleShopLook = useCallback((): void => {
    if (onShopLook && selectedProduct) {
      const styleOptions: StyleOptions = {
        size: selectedSize,
        color: selectedColor
      };
      onShopLook([selectedProduct], styleOptions);
    }
  }, [onShopLook, selectedProduct, selectedSize, selectedColor]);

  const handleRemoveItem = useCallback((): void => {
    handleClearLook();
  }, [handleClearLook]);

  const handleStyleWithAI = useCallback((): void => {
    // TODO: Implement AI styling functionality
    console.log('Style with AI clicked');
  }, []);

  if (!hasSelectedItems) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Your Look</h3>
          <p className="text-sm text-gray-500">No items selected</p>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-500">
          <p>Select items to create your look</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Your Look</h3>
          <button 
            className="text-blue-600 text-sm hover:text-blue-800 transition-colors duration-200"
            onClick={handleClearLook}
          >
            Clear
          </button>
        </div>
        <p className="text-sm text-gray-500">{itemCount} item{itemCount !== 1 ? 's' : ''} selected</p>
      </div>

      {/* AI Style Suggestion */}
      <div className="p-4">
        <button 
          className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          onClick={handleStyleWithAI}
        >
          <span>✨</span>
          <span className="font-medium">Style with AI</span>
        </button>
      </div>

      {/* Selected Item Details */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-start space-x-3 mb-4">
            <img
              src={selectedProduct?.image || '/images/placeholder.png'}
              alt={selectedProduct?.name || 'Product'}
              className="w-20 h-20 object-cover rounded"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.png';
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 mb-1">{selectedProduct?.brand || 'Unknown Brand'}</p>
              <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                {selectedProduct?.name || 'Unnamed Product'}
              </h4>
              <p className="text-sm font-semibold text-gray-900">{selectedProduct?.price || 'Price not available'}</p>
            </div>
            <button 
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              onClick={handleRemoveItem}
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Size Selection */}
            <div>
              <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <select
                id="size-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Selection */}
            <div>
              <label htmlFor="color-select" className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <select
                id="color-select"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 capitalize"
              >
                {colors.map((color) => (
                  <option key={color.name} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Shop This Look Button */}
      <div className="p-4 border-t border-gray-200">
        <button 
          className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleShopLook}
          disabled={!hasSelectedItems}
        >
          <span>Shop this look</span>
        </button>
      </div>
    </div>
  );
};

export default LookSelection;