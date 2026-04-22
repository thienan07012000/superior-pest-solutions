"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Ants love Fayetteville homes, especially older apartments and houses near campus. They sneak in through tiny cracks and make themselves right at home in your kitchen. We come out, find the colony, and make sure they do not come back.",
  bentonville: "New construction in Bentonville disturbs ant colonies underground and sends them looking for shelter in nearby homes. If they picked your place, we will get them out fast and seal up the entry points.",
  rogers: "Ants are drawn to Rogers kitchens just like your family is. If you have spotted a trail along your counters, there are almost always more hiding nearby. We will find them and clear them out for good.",
  springdale: "Springdale's food industry gives ants plenty of reasons to stick around. We know how to treat homes and businesses here so ant colonies do not keep coming back season after season.",
  bellavista: "Bella Vista's wooded lots are beautiful, but all those trees give ants plenty of places to nest. When it gets cold, they head straight for your house. We treat your home and keep the nature where it belongs.",
  siloamsprings: "Older homes in Siloam Springs tend to have more cracks and gaps for ants to march right through. We know what to look for and go after the problem where it starts, not just the ones you can see.",
  lowell: "Lowell is growing fast, and construction activity stirs up ant colonies and pushes them into homes nearby. We get out there quickly and handle it before it gets out of hand.",
  centerton: "We know Centerton well and can usually get out to you fast. If ants have shown up at your place, just give us a call and we will take care of it.",
  farmington: "Farmington families call us when they find ants trailing through the kitchen, and we do not make them wait long. We come out, treat the problem, and follow up to make sure they are gone for good.",
  pearidge: "Pea Ridge is a close community, and when one house has ants, neighbors notice. We will take care of yours quickly so it does not turn into something bigger.",
  fortsmith: "Fort Smith stays warm enough that ants are busy pretty much all year. If they have moved into your kitchen or bathroom, we will track down the colony and get rid of them for good.",
  huntsville: "Homes around Huntsville sit right next to the woods, and ants love building colonies near your foundation. We will come out, find them, and take care of it before they spread.",
  vanburen: "Whether you live in one of Van Buren's older homes near downtown or in a newer build, ants find a way in. We know where they like to hide, and we will stop them.",
  prairiegrove: "When you live near farmland like folks in Prairie Grove do, ant colonies are always close by. We go after the source so they quit showing up in your house.",
  elkins: "Elkins is close by, so we can usually get to you the same day. If ants are showing up in your home, just call and we will come handle it.",
  tontitown: "All the building going on in Tontitown means ant colonies keep getting disturbed and looking for somewhere new to go. If that somewhere is your house, we will fix it.",
  conway: "Conway has a mix of college apartments and family homes, and ants show up in all of them. We treat the whole problem so they do not just move to another room.",
  gentry: "When you see a line of ants marching across your counter in Gentry, give us a call. We will find the nest and take care of the whole thing.",
};

export const AreasServedAntControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Ant Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Ants do not care what city you are in. If you are dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we are close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
