import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import i18n from '../../../../i18n/config';

interface Spec {
    label: string;
    value: string;
}

export const VehicleSpecsSection = () => {
    const { t } = useTranslation('vehicle');

    const items = i18n.getResource(
        i18n.language,
        'vehicle',
        'specifications.specs',
    ) as Spec[] | undefined;
    const specs = Array.isArray(items) ? items : [];

    return (
        <section className='mt-16'>
            <Container>
                <p className='text-sm font-heading  font-medium tracking-[0.25em] text-[#C9A15B]'>
                    {t('specifications.eyebrow')}
                </p>
                <h2 className='mt-3 font-heading text-4xl text-neutral-900 sm:text-5xl'>
                    {t('specifications.title')}
                </h2>

                <div className='mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {specs.map((spec) => (
                        <div
                            key={spec.label}
                            className='border-t border-neutral-200 pt-4'
                        >
                            <p className='text-xs font-medium uppercase tracking-[0.2em] text-[#C9A15B]'>
                                {spec.label}
                            </p>
                            <p className='mt-1.5 font-serif text-lg text-neutral-900'>
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
