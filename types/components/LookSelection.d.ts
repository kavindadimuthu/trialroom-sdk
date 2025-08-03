import React from 'react';
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
declare const LookSelection: React.FC<LookSelectionProps>;
export default LookSelection;
