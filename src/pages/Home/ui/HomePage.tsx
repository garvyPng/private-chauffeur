import { ExperienceSection } from './sections/ExperienceSection';
import { FaqSection } from './sections/FaqSection ';
import { HeroSection } from './sections/HeroSection';
import { JourneySection } from './sections/JourneysSection';
import { ReserveCtaSection } from './sections/ReserveCtaSection ';
import { VehicleSection } from './sections/VehicleSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection ';

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ExperienceSection />
            <JourneySection />
            <VehicleSection />
            <WhyChooseUsSection />
            <ReserveCtaSection />
            <FaqSection />
        </>
    );
};
