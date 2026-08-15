import { useParams, Navigate } from 'react-router-dom';
import toursData from '../../../data/tours.json';

import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { RouteSection } from './sections/RouteSection';
import { GallerySection } from './sections/GallerySection';
import { OtherChoicesSection } from './sections/OtherChoicesSection';

interface TourData {
    id: string;
    show: boolean;
    order: number;
    slug: string;
    image: string;
    gallery?: string[];
    duration_hours: number;
    passengers_max: number;
}

export const ExperienceOverviewPage = () => {
    const { lang, tour: slug } = useParams<{ lang: string; tour: string }>();

    const tourData = Object.values(toursData as Record<string, TourData>).find(
        (t) => t.slug === slug,
    );

    if (!tourData) {
        return <Navigate to={`/${lang}/experiences`} replace />;
    }

    return (
        <>
            <HeroSection tourData={tourData} />
            <OverviewSection tourId={tourData.id} />
            <RouteSection tourId={tourData.id} />
            <GallerySection tourData={tourData} />
            <OtherChoicesSection currentSlug={tourData.slug} />
        </>
    );
};
