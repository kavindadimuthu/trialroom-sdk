import React from 'react';
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
}
interface TrialroomProps {
    onClose?: () => void;
    productData?: ProductData;
    config?: TrialroomConfig;
}
declare const Trialroom: React.FC<TrialroomProps>;
export default Trialroom;
