import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import { GoldButton } from '../../../../components/ui/GoldButton';

interface RouteStep {
    time: string;
    title: string;
    description: string;
}

interface CustomJourney {
    title: string;
    description: string;
    items: string[];
}

export const RouteSection = ({ tourId }: { tourId: string }) => {
    const { t } = useTranslation(['common', 'experiences', 'tours']);

    const route = t(`${tourId}.route`, {
        ns: 'tours',
        returnObjects: true,
    }) as RouteStep[];

    const pickupOptions = t(`${tourId}.pickup_options`, {
        ns: 'tours',
        returnObjects: true,
    }) as string[];

    const customJourney = t(`${tourId}.custom_journey`, {
        ns: 'tours',
        returnObjects: true,
    }) as CustomJourney;

    return (
        <section className='mt-16'>
            <Container>
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1fr]'>
                    <div>
                        <h2 className='font-serif text-2xl text-neutral-900'>
                            {t('experience_overview.signature_route_label', {
                                ns: 'experiences',
                            })}
                        </h2>
                        <p className='mt-4 text-sm leading-relaxed text-neutral-500'>
                            {t(`${tourId}.route_description`, { ns: 'tours' })}
                        </p>

                        <ol className='mt-6 flex flex-col'>
                            {route.map((step, i) => (
                                <li
                                    key={i}
                                    className='relative flex gap-4 pb-5 pl-1 last:pb-0'
                                >
                                    {i < route.length - 1 && (
                                        <span className='absolute left-[3px] top-2 h-full w-px bg-[#C9A15B]/30' />
                                    )}
                                    <span className='relative z-10 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A15B]' />
                                    <div className='flex flex-wrap gap-x-3 text-sm'>
                                        <span className='w-12 shrink-0 text-neutral-400'>
                                            {step.time}
                                        </span>
                                        <span className='text-neutral-700'>
                                            {step.title
                                                ? `${step.title} — `
                                                : ''}
                                            {step.description}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className='hidden items-center justify-center lg:flex'>
                        <span className='font-serif text-lg italic text-neutral-300'>
                            {t('experience_overview.or_label', {
                                ns: 'experiences',
                            })}
                        </span>
                    </div>

                    <div>
                        <h2 className='font-serif text-2xl text-neutral-900'>
                            {customJourney.title}
                        </h2>
                        <p className='mt-4 text-sm leading-relaxed text-neutral-500'>
                            {customJourney.description}
                        </p>

                        <ul className='mt-6 flex flex-col gap-2.5'>
                            {customJourney.items.map((item) => (
                                <li
                                    key={item}
                                    className='flex items-center gap-2.5 text-sm text-neutral-700'
                                >
                                    <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A15B]' />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='mt-14'>
                    <h2 className='font-serif text-2xl text-neutral-900'>
                        {t('experience_overview.pickup_options_label', {
                            ns: 'experiences',
                        })}
                    </h2>
                    <div className='mt-5 flex flex-wrap gap-4'>
                        {pickupOptions.map((option) => (
                            <span
                                key={option}
                                className='rounded-md border border-neutral-200 px-6 py-3 text-sm text-neutral-700'
                            >
                                {option}
                            </span>
                        ))}
                    </div>
                </div>

                <GoldButton variant='filled' className='mt-8'>
                    {t('buttons.book', { ns: 'common' })}
                </GoldButton>
            </Container>
        </section>
    );
};
