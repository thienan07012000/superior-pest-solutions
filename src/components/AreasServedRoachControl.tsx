"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Roaches love college towns. Older apartments, busy restaurants, and shared housing give them plenty of places to hide and spread. Whether you rent or own, we'll come out, find them, and make sure they don't come back.",
  bentonville: "New construction stirs roaches up and sends them looking for somewhere warm to settle. If your home or office ended up being that place, we'll get them out fast.",
  rogers: "Roaches love Rogers kitchens just as much as families do. If you've spotted one, there are almost always more hiding nearby. We'll find them and clear them out.",
  springdale: "Springdale has a lot of food industry, which gives roaches plenty of reasons to stick around. We know how to treat homes and businesses here and keep them gone.",
  bellavista: "Bella Vista's wooded lots are beautiful, but they're also a good spot for roaches looking to move inside when it gets cold. We'll treat your home and keep the nature around it where it belongs.",
  siloamsprings: "Older homes in Siloam Springs tend to have more cracks and gaps for roaches to sneak through. We know what to look for and treat the problem at the source, not just what you can see.",
  lowell: "Lowell is growing fast, and that kind of construction activity stirs up roaches and pushes them into homes nearby. We get out there quickly and handle it before it gets out of hand.",
  centerton: "We know Centerton well and can usually get out to you fast. If roaches have shown up at your place, just give us a call and we'll take care of it.",
  farmington: "Farmington families call us when they find roaches in the kitchen, and we don't make them wait long. We come out, treat the problem, and follow up to make sure they're gone for good.",
  pearidge: "Pea Ridge is a close community, and when one house has roaches, neighbors notice. We'll take care of yours quickly so it doesn't turn into something bigger.",
  fortsmith: "Fort Smith has warm weather and a lot of older buildings, which is exactly what roaches want. We will come out, find where they are hiding, and take care of the whole problem.",
  huntsville: "Living in a rural spot like Huntsville does not keep roaches away. When it gets cold or rainy, they head right inside. We will get them out fast.",
  vanburen: "If you have seen one roach in your Van Buren kitchen or bathroom, there are almost always more hiding nearby. We will find them all and clear them out.",
  prairiegrove: "Roaches around Prairie Grove come in from the fields and wooded areas nearby. We seal up where they are getting in and treat the nesting spots so they stay out.",
  elkins: "Nobody wants roaches in their house, and we do not blame you. If they have shown up in Elkins, just call us and we will be out there fast.",
  tontitown: "Construction in Tontitown stirs roaches up and sends them into nearby homes. We will get ahead of it before they spread through your whole house.",
  conway: "Conway has warm weather, restaurants nearby, and lots of housing, which is basically a dream for roaches. We know how to get them out of your home and keep them out.",
  gentry: "When Gentry homeowners spot roaches, they call us right away. We come out, take care of it, and check back to make sure they are actually gone.",
};

export const AreasServedRoachControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Roach Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Roaches don't care what city you're in. If you're dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
