import React from 'react';
interface ProductData {
    id?: string | number;
    name?: string;
    brand?: string;
    price?: string;
    image?: string;
    category?: string;
}
interface ClothSelectionProps {
    selectedProduct?: ProductData;
    onProductSelect?: (product: ProductData) => void;
    showWishlist?: boolean;
}
declare const ClothSelection: React.FC<ClothSelectionProps>;
export default ClothSelection;
