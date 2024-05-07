import {Fragment} from "react";
import AboutHero from "@website/components/About/AboutHero";
import Section from "@website/components/Section";
import Volunteering from "@website/components/About/Volunteering";
import AwardsCard from "@website/components/About/AwardsCard";
import CertificationsCard from "@website/components/About/CertificationsCard";
import EducationCard from "@website/components/About/EducationCard";

export const AboutContent = () => {
    return (
        <Fragment>
            <AboutHero/>
            <Section className="grid xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                <EducationCard/>
                <Volunteering/>
                <AwardsCard/>
                <CertificationsCard/>
            </Section>
        </Fragment>
    )
}