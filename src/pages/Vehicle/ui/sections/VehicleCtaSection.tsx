import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import { GoldButton } from '../../../../components/ui/GoldButton';
import { useLocalizedPath } from '../../../../hooks/useLocalizedPath';

export const VehicleCtaSection = () => {
    const { t } = useTranslation('vehicle');
    const localize = useLocalizedPath();

    return (
        <section className='relative left-1/2 right-1/2 mt-16 w-full -translate-x-1/2 bg-black py-16'>
            <Container className='flex flex-col items-center text-center'>
                <p className='max-w-lg text-sm leading-relaxed text-neutral-300'>
                    {t('cta.text')}
                </p>

                <GoldButton
                    href={localize(t('/contact'))}
                    variant='filled'
                    className='mt-6'
                >
                    {t('cta.button')}
                </GoldButton>
            </Container>
        </section>
    );
};
