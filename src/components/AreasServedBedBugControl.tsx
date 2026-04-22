"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Between student housing, apartments, and busy hotels, Fayetteville sees its share of bed bug issues. Whether you rent or own, we'll come out, inspect everything, and take care of it.",
  bentonville: "Bed bugs don't care if your house is brand new. They travel in luggage, on furniture, and through shared walls. If they've shown up in your Bentonville home, we'll get them out fast.",
  rogers: "Rogers families call us when they start waking up with bites they can't explain. We check every hiding spot and treat the whole problem so you can sleep in peace again.",
  springdale: "With a lot of multi-family housing in Springdale, bed bugs have an easy time spreading from unit to unit. We treat thoroughly so the problem stops at your door.",
  bellavista: "Bella Vista homes tend to be comfortable and well-kept, which makes finding bed bugs extra frustrating. We'll come out, take care of it quietly, and make sure they're gone for good.",
  siloamsprings: "Older homes in Siloam Springs can have more cracks and seams where bed bugs like to hide. We know where to look and how to treat the problem at its root.",
  lowell: "Lowell is growing fast, and with new people moving in comes the chance of bed bugs hitching a ride on furniture and boxes. We get out there quickly and handle it.",
  centerton: "We know Centerton well and can usually get to you fast. If bed bugs have shown up at your place, just call and we'll take care of it.",
  farmington: "Farmington families call us when bites start showing up on their kids. We don't make you wait. We come out, treat the problem, and follow up to make sure they're gone.",
  pearidge: "Pea Ridge is a tight-knit community, and when one home has bed bugs, it can easily spread. We'll take care of yours quickly and keep it from getting bigger.",
  fortsmith: "Fort Smith has a lot of hotels, apartments, and older homes, and bed bugs get around in all of them. We check everything and make sure they are completely gone so you can sleep again.",
  huntsville: "You do not have to live in a big city to get bed bugs. They can show up in Huntsville too. If you are waking up with bites, call us and we will come take a look.",
  vanburen: "If you are finding bites on your arms or little spots on your sheets in Van Buren, that is usually bed bugs. We will find every hiding spot and wipe them out.",
  prairiegrove: "Bed bugs ride in on furniture, suitcases, and even clothes. If they have made it into your Prairie Grove home, we will find every last one and get rid of them.",
  elkins: "Most people in Elkins are surprised when bed bugs show up, but they can come from anywhere. We will come out quickly and take care of the whole thing.",
  tontitown: "Nobody wants to talk about bed bugs, and we get that. We handle it quietly for Tontitown families, check everything, treat it, and come back to make sure they are gone.",
  conway: "With all the college housing and apartments in Conway, bed bugs can spread fast. We treat your whole place and make sure the problem stops right there.",
  gentry: "If you spot the first signs of bed bugs in Gentry, do not wait. Call us and we will be out fast to check everything and stop it before it spreads.",
};

export const AreasServedBedBugControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Bed Bug Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Bed bugs travel on luggage, furniture, and clothing. If you're dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to help. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
