"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

export const AreasServed = () => (
  <AreasServedSection
    badge="Your Neighbors"
    heading={<>Where We <span className="text-[var(--brand-red)]">Help</span></>}
    sectionDescription="We live and work right here in Northwest Arkansas and Southeast Oklahoma. Pick your area and we'll show you what we can do for your home or business."
    getDescription={(area: Area) => area.description}
    isHomePage={true}
  />
);
