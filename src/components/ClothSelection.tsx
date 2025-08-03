import React, { useState, useEffect } from 'react';

interface ProductData {
  id?: string | number;
  name?: string;
  brand?: string;
  price?: string;
  image?: string;
  category?: string;
}

interface ShelfItem extends ProductData {
  id: string | number;
  name: string;
  brand: string;
  price: string;
  image: string;
  addedToLook: boolean;
  category: string;
}

interface ClothSelectionProps {
  selectedProduct?: ProductData;
  onProductSelect?: (product: ProductData) => void;
  showWishlist?: boolean;
}

type TabType = 'shelf' | 'wishlist';
type CategoryType = 'All' | 'T-shirt' | 'Shirt' | 'Trouser' | 'Jeans' | 'Blazer';

const ClothSelection: React.FC<ClothSelectionProps> = ({ 
  selectedProduct, 
  onProductSelect,
  showWishlist = true 
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('shelf');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [filteredItems, setFilteredItems] = useState<ShelfItem[]>([]);

  const categories: CategoryType[] = ['All', 'T-shirt', 'Shirt', 'Trouser', 'Jeans', 'Blazer'];

  console.log(selectedProduct);

  const shelfItems: ShelfItem[] = [
    {
      id: '1',
      brand: 'Aristino',
      name: 'Regular Fit Men\'s T-Shirt',
      price: '390.000 VND',
      image: '/images/Product-Images-1.png',
      addedToLook: true,
      category: 'T-shirt'
    },
    {
      id: '2',
      brand: 'Aristino',
      name: 'Regular Fit Men\'s T-Shirt',
      price: '390.000 VND',
      image: '/images/Product-Images-2.png',
      addedToLook: false,
      category: 'T-shirt'
    },
    {
      id: '3',
      brand: 'Aristino',
      name: 'White Men\'s Leather Sneakers',
      price: '6.850.000 VND',
      image: '/images/Product-Images-3.png',
      addedToLook: false,
      category: 'Shoes'
    }
  ];

  const wishlistItems: ShelfItem[] = [];

  useEffect(() => {
    const items = activeTab === 'shelf' ? shelfItems : wishlistItems;
    const filtered = selectedCategory === 'All' 
      ? items 
      : items.filter(item => item.category === selectedCategory);
    setFilteredItems(filtered);
  }, [activeTab, selectedCategory]);

  const handleTryNow = (item: ShelfItem): void => {
    if (onProductSelect) {
      onProductSelect(item);
    }
  };

  const handleToggleWishlist = (itemId: string | number): void => {
    // TODO: Implement wishlist toggle functionality
    console.log('Toggle wishlist for item:', itemId);
  };

  // const currentItems = activeTab === 'shelf' ? shelfItems : wishlistItems;
  // const itemCount = currentItems.length;

  return (
    <div className="h-full overflow-y-auto flex flex-col">
      {/* Category Filter */}
      <div className="p-4 pb-2">
        <div 
          className="flex gap-3 overflow-x-auto"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-md text-sm whitespace-nowrap flex-shrink-0 transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('shelf')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
            activeTab === 'shelf'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Your Shelf ({shelfItems.length})
        </button>
        {showWishlist && (
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'wishlist'
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Wishlist ({wishlistItems.length})
          </button>
        )}
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredItems.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-gray-500">
            <p>No items found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.png';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                  <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{item.name}</h4>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{item.price}</p>
                  
                  <button 
                    className="w-full bg-black text-white text-xs py-2 px-3 rounded hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
                    onClick={() => handleTryNow(item)}
                    disabled={item.addedToLook}
                  >
                    {item.addedToLook ? 'Added to look' : 'Try now'}
                  </button>
                </div>
                <button 
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  onClick={() => handleToggleWishlist(item.id)}
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothSelection;