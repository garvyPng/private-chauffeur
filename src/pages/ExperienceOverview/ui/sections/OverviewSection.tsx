import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';

export const OverviewSection = ({ tourId }: { tourId: string }) => {
    const { t } = useTranslation(['experiences', 'tours']);

    return (
        <section className='mt-16'>
            <Container>
                <h2 className='font-serif text-2xl text-neutral-900'>
                    {t('experience_overview.overview_label', {
                        ns: 'experiences',
                    })}
                </h2>
                <p className='mt-4 max-w-3xl text-sm leading-relaxed text-neutral-500'>
                    {t(`${tourId}.overview`, { ns: 'tours' })}
                </p>
            </Container>
        </section>
    );
};
