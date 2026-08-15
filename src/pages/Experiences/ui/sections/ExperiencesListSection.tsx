import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Users, Search, ChevronRight, ChevronLeft } from 'lucide-react';

import toursData from '../../../../data/tours.json';
import { Container } from '../../../../components/layout/Container';
import { useParams } from 'react-router-dom';

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
    duration_hours_text: string;
    passengers: string;
    price: string;
}

interface Tour extends TourData {
    content: TourContent;
}

const PER_PAGE = 4;

function TourListItem({ tour }: { tour: Tour }) {
    const { t } = useTranslation('common');
    const { lang } = useParams<{ lang: string }>();

    return (
        <div className='flex flex-col gap-6 border-b border-neutral-200 py-10 first:pt-0 last:border-0 md:flex-row md:gap-10'>
            <a
                href={`/${lang}/experiences/${tour.slug}`}
                className='block aspect-[4/3] w-full shrink-0 overflow-hidden md:w-[320px] lg:w-[360px]'
            >
                <img
                    src={tour.image}
                    alt={tour.content.title}
                    className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                />
            </a>

            <div className='flex flex-1 flex-col justify-center'>
                <h3 className='font-serif text-2xl text-neutral-900 md:text-3xl'>
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
                        <Clock className='h-4 w-4' strokeWidth={1.5} />
                        {tour.content.duration_hours_text}
                    </span>
                    <span className='flex items-center gap-1.5 text-neutral-500'>
                        <Users className='h-4 w-4' strokeWidth={1.5} />
                        {tour.content.passengers}
                    </span>
                </div>

                <a
                    href={`/${lang}/experiences/${tour.slug}`}
                    className='mt-5 inline-flex w-full items-center justify-center gap-1.5 border border-[#C9A15B]/50 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A15B] transition-colors duration-300 hover:border-[#C9A15B] hover:bg-[#C9A15B]/5 sm:w-auto'
                >
                    {t('buttons.view_experience')}
                    <ChevronRight className='h-4 w-4' strokeWidth={1.5} />
                </a>
            </div>
        </div>
    );
}

function Pagination({
    page,
    totalPages,
    onChange,
}: {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}) {
    if (totalPages <= 1) return null;

    return (
        <div className='mt-12 flex items-center justify-center gap-2'>
            <button
                type='button'
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                aria-label='Previous page'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors duration-200 hover:border-[#C9A15B] hover:text-[#C9A15B] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-600'
            >
                <ChevronLeft className='h-4 w-4' strokeWidth={1.5} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                    key={p}
                    type='button'
                    onClick={() => onChange(p)}
                    aria-current={p === page ? 'page' : undefined}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors duration-200 ${
                        p === page
                            ? 'bg-[#C9A15B] text-white'
                            : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                >
                    {p}
                </button>
            ))}

            <button
                type='button'
                onClick={() => onChange(page + 1)}
                disabled={page === totalPages}
                aria-label='Next page'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors duration-200 hover:border-[#C9A15B] hover:text-[#C9A15B] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-600'
            >
                <ChevronRight className='h-4 w-4' strokeWidth={1.5} />
            </button>
        </div>
    );
}

export const ExperiencesListSection = () => {
    const { t } = useTranslation(['experiences', 'tours']);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const allTours: Tour[] = useMemo(
        () =>
            Object.values(toursData as Record<string, TourData>)
                .filter((tour) => tour.show)
                .sort((a, b) => a.order - b.order)
                .map((tour) => ({
                    ...tour,
                    content: t(tour.id, {
                        ns: 'tours',
                        returnObjects: true,
                    }) as TourContent,
                })),
        [t],
    );

    const filteredTours = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return allTours;
        return allTours.filter((tour) =>
            tour.content.title.toLowerCase().includes(q),
        );
    }, [allTours, query]);

    const totalPages = Math.ceil(filteredTours.length / PER_PAGE);
    const paginatedTours = filteredTours.slice(
        (page - 1) * PER_PAGE,
        page * PER_PAGE,
    );

    const handleSearchChange = (value: string) => {
        setQuery(value);
        setPage(1);
    };

    return (
        <section className='mt-16'>
            <Container>
                <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
                    <div>
                        <p className='text-sm font-medium tracking-[0.25em] text-[#C9A15B]'>
                            {t('experiences_list.eyebrow', {
                                ns: 'experiences',
                            })}
                        </p>
                        <h1 className='mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl'>
                            {t('experiences_list.title', { ns: 'experiences' })}
                        </h1>
                    </div>

                    <div className='relative w-full sm:w-72'>
                        <Search
                            className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400'
                            strokeWidth={1.5}
                        />
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            placeholder={t(
                                'experiences_list.search_placeholder',
                                {
                                    ns: 'experiences',
                                },
                            )}
                            className='w-full rounded-full border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#C9A15B] focus:outline-none'
                        />
                    </div>
                </div>

                <div className='mt-12'>
                    {paginatedTours.length > 0 ? (
                        paginatedTours.map((tour) => (
                            <TourListItem key={tour.id} tour={tour} />
                        ))
                    ) : (
                        <p className='py-16 text-center text-sm text-neutral-500'>
                            {t('experiences_list.no_results', {
                                ns: 'experiences',
                            })}
                        </p>
                    )}
                </div>

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={(p) => {
                        setPage(p);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                />
            </Container>
        </section>
    );
};
