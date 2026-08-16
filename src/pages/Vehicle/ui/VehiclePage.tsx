import { HeroSection } from './sections/HeroSection';
import { VehicleInteriorSection } from './sections/VehicleInteriorSection';
import { VehicleSpecsSection } from './sections/VehicleSpecsSection';
import { VehicleGallerySection } from './sections/VehicleGallerySection';
import { VehicleCtaSection } from './sections/VehicleCtaSection';

export const VehiclePage = () => {
    return (
        <>
            <HeroSection />
            <VehicleInteriorSection />
            <VehicleSpecsSection />
            <VehicleGallerySection />
            <VehicleCtaSection />
        </>
    );
};
