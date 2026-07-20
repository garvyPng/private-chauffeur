import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SectionTitle from '../../../../components/ui/SectionTitle';
import {
    ArrowRight,
    Briefcase,
    Shield,
    Star,
    type LucideIcon,
} from 'lucide-react';

interface FeatureData {
    icon: string;
    title: string;
    description: string;
}

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

const iconMap: Record<string, LucideIcon> = {
    shield: Shield,
    star: Star,
    briefcase: Briefcase,
};

function FeatureCard({ icon: Icon, title, description }: Feature) {
    return (
        <div className='group flex h-full flex-1 flex-col items-center rounded-md border border-[#C9A15B]/30 bg-white px-8 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A15B] hover:shadow-[0_20px_40px_-20px_rgba(201,161,91,0.35)]'>
            <div className='relative flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A15B]/40 transition-colors duration-300 group-hover:border-[#C9A15B] group-hover:bg-[#C9A15B]/5'>
                <Icon className='h-4 w-4 text-[#C9A15B]' strokeWidth={1.25} />
            </div>

            <h3 className='mt-6 font-heading text-xl text-neutral-900'>
                {title}
            </h3>

            <span className='mt-3 h-px w-8 bg-[#C9A15B]/50 transition-all duration-300 group-hover:w-12' />

            <p className='mx-auto mt-4 max-w-[220px] text-sm leading-relaxed text-neutral-500'>
                {description}
            </p>
        </div>
    );
}

export const ExperienceSection = () => {
    const { t } = useTranslation('common');
    const raw = t('premium_experience.features', {
        returnObjects: true,
    });

    const featuresData = Array.isArray(raw) ? (raw as FeatureData[]) : [];
    const features: Feature[] = featuresData.map((f) => ({
        ...f,
        icon: iconMap[f.icon] ?? Shield,
    }));

    return (
        <section className='mt-16'>
            <Container>
                <SectionTitle
                    title={t('premium_experience.title')}
                    subtitle={t('premium_experience.eyebrow')}
                />
                <div className='mt-14 flex flex-col items-stretch gap-10 md:flex-row md:gap-6'>
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className='flex flex-1 items-stretch gap-6'
                        >
                            <FeatureCard {...feature} />
                            {i < features.length - 1 && (
                                <ArrowRight
                                    className='hidden shrink-0 self-center text-[#C9A15B]/40 md:block'
                                    strokeWidth={1.25}
                                    aria-hidden='true'
                                />
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
