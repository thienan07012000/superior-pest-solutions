"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Termites can eat through your home for months before you notice anything wrong. We find them early, wipe out the whole colony, and make sure your Fayetteville home stays protected.",
  bentonville: "Don't let termites quietly chew through your Bentonville home. We inspect everything, find the problem, and take care of it based on what your home actually needs.",
  rogers: "The sooner you call, the less damage there is to deal with. We treat the whole colony, not just the ones you can see, so your Rogers home stays solid.",
  springdale: "Termite damage can go unnoticed for a long time. We get into the crawl spaces and check the foundation so nothing gets missed in your Springdale home.",
  bellavista: "The wooded areas around Bella Vista are great termite territory. We put barriers in place around your home so they can't get in.",
  siloamsprings: "Older homes in Siloam Springs can be especially vulnerable. We check your foundation, crawl space, and attic to catch any signs of activity before things get bad.",
  lowell: "New construction and older homes in Lowell are both fair game for termites. We treat both with the right mix of baiting and barriers.",
  centerton: "Families in Centerton call us because our treatments get the job done without putting their kids or pets at risk. Safe for the home, deadly for the termites.",
  farmington: "We take a close look at every Farmington home before deciding on a plan. No guessing, no cookie-cutter approach. Just the right fix for your house.",
  pearidge: "Whether termites are already there or you just want to make sure they never show up, we've got Pea Ridge covered. Our treatments work, and we stand behind them.",
  fortsmith: "A lot of older homes in Fort Smith have crawl spaces and pier-and-beam foundations, and termites love both. We check everything and set up the right protection for your home.",
  huntsville: "With all the timber around Huntsville, termite pressure is pretty much constant. We set up barriers and keep an eye on things so they never get a chance to do damage.",
  vanburen: "Van Buren has a mix of historic homes and newer ones, and they each have different termite risks. We figure out what your home needs and treat it the right way.",
  prairiegrove: "Homes near the woods in Prairie Grove are especially at risk for termites. We do a full check and put protection in place that actually lasts.",
  elkins: "Termites can chew through a home in Elkins for a long time before anyone notices, especially on bigger properties. We check everything from the foundation to the attic.",
  tontitown: "If you are building or just bought a new home in Tontitown, termite protection should be one of the first things you do. We help you get it set up before any damage starts.",
  conway: "Conway is warm and humid, and termites love it here. We protect homes all across the city with treatments that hold up year after year.",
  gentry: "Gentry homeowners count on us to keep termites out for good. We check your home, treat it, and come back to make sure everything is still solid.",
};

export const AreasServedTermiteControl = () => (
  <AreasServedSection
    badge="NWA Termite Experts"
    heading={<>Termite Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="We cover Fayetteville and the towns around it. Click your area to see how we help homeowners near you."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
