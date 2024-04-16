import {Fragment} from "react";
import {AboutHero} from "@website/components/About/AboutHero";
import {Education} from "@website/components/About/Education";
import {Section} from "@website/components/Section";
import {Volunteering} from "@website/components/About/Volunteering";
import {Awards} from "@website/components/About/Awards";

export const AboutContent = () => {
    return (
        <Fragment>
            <AboutHero/>
            <Section className="grid xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                <Education/>
                <Volunteering/>
                <Awards/>
            </Section>
        </Fragment>
    )
}