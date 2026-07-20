import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SectionTitle from '../../../../components/ui/SectionTitle';

interface FeatureContent {
    title: string;
    description: string;
}

function FeatureCard({
    feature,
    index,
}: {
    feature: FeatureContent;
    index: number;
}) {
    return (
        <div className='group relative flex h-full flex-col rounded-md border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A15B]/50 hover:shadow-[0_12px_30px_-15px_rgba(0,0,0,0.15)]'>
            <span className='font-serif text-sm text-neutral-300 transition-colors duration-300 group-hover:text-[#C9A15B]'>
                {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className='mt-3 font-serif text-lg text-neutral-900'>
                {feature.title}
            </h3>

            <span className='mt-3 block h-px w-8 bg-[#C9A15B]/60 transition-all duration-300 group-hover:w-12' />

            <p className='mt-4 text-sm leading-relaxed text-neutral-500'>
                {feature.description}
            </p>
        </div>
    );
}

export const WhyChooseUsSection = () => {
    const { t } = useTranslation('common');
    const features = t('why_choose_us.features', {
        returnObjects: true,
    }) as FeatureContent[];

    return (
        <section className='mt-16'>
            <Container>
                <SectionTitle
                    subtitle={t('why_choose_us.eyebrow')}
                    title={t('why_choose_us.title')}
                    position='center'
                />

                <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {features.map((feature, i) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            index={i}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
