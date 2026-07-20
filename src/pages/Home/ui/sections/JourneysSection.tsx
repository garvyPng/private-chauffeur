import { useTranslation } from 'react-i18next';
import { Clock, ArrowRight } from 'lucide-react';
import { Container } from '../../../../components/layout/Container';
import toursData from '../../../../data/tours.json';
import SectionTitle from '../../../../components/ui/SectionTitle';

interface TourData {
    id: string;
    show: boolean;
    order: number;
    slug: string;
    image: string;
    price_from: string;
    duration_hours: number;
    passengers_max: number;
}

interface TourContent {
    title: string;
    description: string;
    duration: string;
}

function TourCard({ tour, content }: { tour: TourData; content: TourContent }) {
    const { t } = useTranslation('common');

    return (
        <div className='flex h-full flex-col items-stretch'>
            <a
                href={`/experiences/${tour.slug}`}
                className='block aspect-[4/3] overflow-hidden'
            >
                <img
                    src={tour.image}
                    alt={content.title}
                    className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                />
            </a>

            <h3 className='mt-6 font-serif text-2xl text-neutral-900'>
                {content.title}
            </h3>

            <p className='mt-3 text-sm leading-relaxed text-neutral-500'>
                {content.description}
            </p>

            <div className='mt-auto flex items-center justify-between pt-5'>
                <div className='flex items-center gap-5 text-sm'>
                    <span className='flex items-center gap-1.5 text-neutral-500'>
                        <Clock className='h-4 w-4' strokeWidth={1.5} />
                        {content.duration}
                    </span>
                    <span className='font-medium uppercase text-[#C9A15B]'>
                        {t('featured_experiences.from')} {tour.price_from}
                    </span>
                </div>

                <a
                    href={`/experiences/${tour.slug}`}
                    className='group mr-5 flex items-center gap-1 text-sm text-neutral-900'
                >
                    {t('featured_experiences.view_experience')}
                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </a>
            </div>
        </div>
    );
}

export const JourneySection = () => {
    const { t } = useTranslation(['common', 'tours']);

    const featuredTours = Object.values(toursData as Record<string, TourData>)
        .filter((tour) => tour.show)
        .sort((a, b) => a.order - b.order)
        .slice(0, 2);

    return (
        <section className='mt-16'>
            <Container>
                <div className='flex items-end justify-between'>
                    <SectionTitle
                        subtitle={t('featured_experiences.eyebrow', {
                            ns: 'common',
                        })}
                        title={t('featured_experiences.title', {
                            ns: 'common',
                        })}
                        position='left'
                        className=' mb-0'
                    />

                    <a
                        href='/experiences'
                        className='group hidden items-center gap-1 whitespace-nowrap text-sm font-medium tracking-[0.15em] text-[#C9A15B] md:flex'
                    >
                        {t('featured_experiences.view_all', { ns: 'common' })}
                        <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </a>
                </div>

                <div className='mt-12 grid grid-cols-1 items-stretch gap-2 md:grid-cols-2'>
                    {featuredTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            tour={tour}
                            content={
                                t(tour.id, {
                                    ns: 'tours',
                                    returnObjects: true,
                                }) as TourContent
                            }
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
