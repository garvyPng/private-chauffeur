import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SectionTitle from '../../../../components/ui/SectionTitle';
import { GoldButton } from '../../../../components/ui/GoldButton';

export const ReserveCtaSection = () => {
    const { t } = useTranslation('common');

    return (
        <section className='relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2'>
            <div className='relative min-h-[520px] w-full overflow-hidden md:min-h-[560px]'>
                <img
                    src='/images/cars/cta.webp'
                    alt=''
                    className='absolute inset-0 h-full w-full object-cover'
                    aria-hidden='true'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60' />

                <Container className='relative flex h-full min-h-[520px] flex-col items-center justify-center py-20'>
                    <SectionTitle
                        subtitle={t('reserve_cta.eyebrow')}
                        title={t('reserve_cta.title')}
                        italicText={t('reserve_cta.title_accent')}
                        titleEnd={t('reserve_cta.title_end')}
                        position='center'
                        className='mb-0 max-w-3xl'
                        h2ClassName='!text-white leading-tight sm:text-5xl md:text-6xl'
                    />

                    <p className='mt-6 max-w-xl text-center text-sm leading-relaxed text-neutral-200 md:text-base'>
                        {t('reserve_cta.description')}
                    </p>

                    <GoldButton
                        href={t('reserve_cta.cta.link')}
                        variant='filled'
                        className='mt-8'
                    >
                        {t('reserve_cta.cta.label')}
                    </GoldButton>
                </Container>
            </div>
        </section>
    );
};
