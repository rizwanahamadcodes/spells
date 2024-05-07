import clsx from "clsx";
import Section, { SectionSubtitle } from "../components/Section";
import Container from "../components/Container/Container";
import pathConstants from "../routes/pathConstants";
import { Link } from "react-router-dom";
import { ButtonIcon, button } from "../components/Button";
import { GiFireBottle } from "react-icons/gi";
import { GoHeartFill } from "react-icons/go";

const HeroSection = () => {
    return (
        <Section
            className="bg-white dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800 mt-navHeight-large py-5"
            defaultPadding={false}>
            <Container className="relative h-screen max-w-[800px]">
                <GreetingLine className="mb-1" />
                <IntroLine className="mb-1.5" />
                <CTA />
            </Container>
        </Section>
    );
};

type IntroLineProps = {
    className?: string;
};

export const IntroLine = (props: IntroLineProps) => {
    const { className } = props;

    return (
        <div className={clsx(className)}>
            <SectionSubtitle className="text-center">
                Where you can find all you favorite dungeon and dragon spells
            </SectionSubtitle>
        </div>
    );
};

type GreetingLineProps = {
    className?: string;
};

const GreetingLine = (props: GreetingLineProps) => {
    const { className } = props;

    return (
        <h1
            className={clsx(
                "text-3 leading-1 w-full font-medium sm:text-5 xl:text-5 text-center",
                className
            )}>
            <div className="text-2 w-full font-thin text-gray-500 sm:text-3 xl:text-3 text-center">
                Welcome to
            </div>
            <div className="text-4 w-full font-medium sm:text-4 xl:text-4 text-center">
                DnD Spell Factory
            </div>
        </h1>
    );
};

type CTAProps = {
    className?: string;
};

export const CTA = (props: CTAProps) => {
    const { className } = props;

    return (
        <div
            className={clsx(
                "flex w-full flex-col gap-1 sm:flex-row",
                className
            )}>
            <Link
                to={pathConstants.SPELLS}
                className={button({ className: "w-full" })}>
                <ButtonIcon icon={GiFireBottle} />
                View All Spells
            </Link>
            <Link
                to={pathConstants.FAVORITES}
                className={button({
                    variant: "outline",
                    colorScheme: "themed-gray",
                    className: "w-full",
                })}>
                <ButtonIcon icon={GoHeartFill} />
                View Favorites
            </Link>
        </div>
    );
};

export default HeroSection;
