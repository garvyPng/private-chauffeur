import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Users, ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '../../../../components/layout/Container';
import toursData from '../../../../data/tours.json';
import { useLocalizedPath } from '../../../../hooks/useLocalizedPath';

interface TourData {
    id: string;
    show: boolean;
    order: number;
    slug: string;
    image: string;
    duration_hours: number;
    passengers_max: number;
}

interface TourContent {
    title: string;
    description: string;
    price: string;
    duration_hours_text: string;
    passengers: string;
}

export const OtherChoicesSection = ({
    currentSlug,
    limit = 1,
}: {
    currentSlug: string;
    limit?: number;
}) => {
    const { t } = useTranslation(['common', 'experiences', 'tours']);
    const localize = useLocalizedPath();

    const otherTours = useMemo(() => {
        return Object.values(toursData as Record<string, TourData>)
            .filter((tour) => tour.show && tour.slug !== currentSlug)
            .sort((a, b) => a.order - b.order)
            .slice(0, limit)
            .map((tour) => ({
                ...tour,
                content: t(tour.id, {
                    ns: 'tours',
                    returnObjects: true,
                }) as TourContent,
            }));
    }, [t, currentSlug, limit]);

    if (otherTours.length === 0) return null;

    return (
        <section className='mt-16'>
            <Container>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <h2 className='font-serif text-2xl text-neutral-900'>
                        {t('experience_overview.other_choices_label', {
                            ns: 'experiences',
                        })}
                    </h2>

                    <a
                        href={localize('/experiences')}
                        className='group flex items-center gap-1 whitespace-nowrap text-sm font-medium tracking-[0.15em] text-[#C9A15B]'
                    >
                        {t('buttons.view_all', { ns: 'common' })}
                        <ArrowRight className='h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1' />
                    </a>
                </div>

                <div className='mt-8 flex flex-col gap-10'>
                    {otherTours.map((tour) => {
                        const href = localize(`/experiences/${tour.slug}`);
                        return (
                            <div
                                key={tour.id}
                                className='flex flex-col gap-6 border-t border-neutral-200 pt-10 md:flex-row md:gap-10'
                            >
                                <a
                                    href={href}
                                    className='block aspect-[4/3] w-full shrink-0 overflow-hidden md:w-[320px] lg:w-[360px]'
                                >
                                    <img
                                        src={tour.image}
                                        alt={tour.content.title}
                                        className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                                    />
                                </a>

                                <div className='flex flex-1 flex-col justify-center'>
                                    <h3 className='font-serif text-2xl text-neutral-900'>
                                        {tour.content.title}
                                    </h3>
                                    <p className='mt-3 max-w-xl text-sm leading-relaxed text-neutral-500'>
                                        {tour.content.description}
                                    </p>

                                    <div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-neutral-200 pt-5 text-sm'>
                                        <span className='font-medium uppercase tracking-wide text-[#C9A15B]'>
                                            {tour.content.price}
                                        </span>
                                        <span className='flex items-center gap-1.5 text-neutral-500'>
                                            <Clock
                                                className='h-4 w-4'
                                                strokeWidth={1.5}
                                            />
                                            {tour.content.duration_hours_text}
                                        </span>
                                        <span className='flex items-center gap-1.5 text-neutral-500'>
                                            <Users
                                                className='h-4 w-4'
                                                strokeWidth={1.5}
                                            />
                                            {tour.content.passengers}
                                        </span>
                                    </div>

                                    <a
                                        href={href}
                                        className='mt-5 inline-flex w-full items-center justify-center gap-1.5 border border-[#C9A15B]/50 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A15B] transition-colors duration-300 hover:border-[#C9A15B] hover:bg-[#C9A15B]/5 sm:w-auto'
                                    >
                                        {t('buttons.view_experience')}
                                        <ChevronRight
                                            className='h-4 w-4'
                                            strokeWidth={1.5}
                                        />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
