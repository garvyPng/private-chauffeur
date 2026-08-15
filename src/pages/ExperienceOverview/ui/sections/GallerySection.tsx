import { useTranslation } from 'react-i18next';

interface TourData {
    id: string;
    image: string;
    gallery?: string[];
}

export const GallerySection = ({ tourData }: { tourData: TourData }) => {
    const { t } = useTranslation('tours');
    const alt = t(`${tourData.id}.title`);

    return (
        <section className='mt-16'>
            <div className='mx-auto grid max-w-[1380px] grid-cols-1 gap-3 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8'>
                <div className='aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto'>
                    <img
                        src={tourData.image}
                        alt={alt}
                        className='h-full w-full object-cover'
                    />
                </div>

                <div className='grid grid-cols-2 gap-3'>
                    {(tourData.gallery ?? []).slice(0, 4).map((src, i) => (
                        <div
                            key={i}
                            className='aspect-square overflow-hidden rounded-md'
                        >
                            <img
                                src={src}
                                alt={`${alt} ${i + 1}`}
                                className='h-full w-full object-cover'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
