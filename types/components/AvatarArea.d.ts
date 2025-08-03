import React from 'react';
interface ProductData {
    id?: string | number;
    name?: string;
    brand?: string;
    price?: string;
    image?: string;
    category?: string;
}
interface AvatarAreaProps {
    hasAvatar?: boolean;
    onCreateAvatar?: () => void;
    selectedProduct?: ProductData;
}
declare const AvatarArea: React.FC<AvatarAreaProps>;
export default AvatarArea;
