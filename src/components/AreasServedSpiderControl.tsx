"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Fayetteville has a lot of older apartments and houses near campus, and spiders love those. Whether you are dealing with common house spiders or something more dangerous, we will find them and take care of it.",
  bentonville: "New construction in Bentonville disturbs spider habitats and sends them straight into nearby homes and offices. If they've settled in, we'll get them out quickly and keep them from coming back.",
  rogers: "Rogers homeowners often find spiders in garages, basements, and closets. If you've seen one, there are usually more hiding nearby. We'll track them down and clear them out.",
  springdale: "Springdale has a lot of homes and businesses close together, which gives spiders plenty of places to set up. We know how to treat homes here and keep them gone for good.",
  bellavista: "Bella Vista's wooded surroundings are beautiful, but they're also home to a lot of spiders looking to move inside when seasons change. We'll treat your home and keep the wildlife where it belongs.",
  siloamsprings: "Older homes in Siloam Springs have more cracks and entry points that spiders love. We know what to look for and treat the problem where it starts, not just the ones you can see.",
  lowell: "Lowell is growing fast, and construction activity stirs up spiders and pushes them into homes nearby. We get out there quickly and handle it before it gets worse.",
  centerton: "We know Centerton well and can usually get out to you fast. If spiders have taken up residence in your home, just give us a call and we'll take care of it.",
  farmington: "Farmington families call us when they start finding webs and spiders around the house. We come out, treat the problem, and follow up to make sure they stay gone.",
  pearidge: "Pea Ridge is a close community, and spider problems tend to spread between nearby homes. We'll take care of yours quickly so it doesn't turn into something bigger.",
  fortsmith: "Older garages and buildings in Fort Smith give spiders plenty of room to set up. Whether it is brown recluses or regular house spiders, we will find them and clear them out.",
  huntsville: "All the woods around Huntsville bring spiders close to your house. We treat the entry points and nesting areas so they stay outside where they belong.",
  vanburen: "Basements, closets, and storage areas in Van Buren homes are where spiders love to hide. We know where to look and how to get rid of them for good.",
  prairiegrove: "Spiders around Prairie Grove come in from the fields and tree lines looking for shelter. We find where they are nesting and take care of the whole problem.",
  elkins: "The quieter, more rural homes around Elkins tend to attract spiders. If they have moved in, just call us and we will be out there fast.",
  tontitown: "New homes in Tontitown can attract spiders while they are being built and after. We take care of the problem early so they do not make themselves at home.",
  conway: "Between the college housing and family neighborhoods in Conway, spiders are always finding new places to hide. We get them out and keep them from coming back.",
  gentry: "When webs and spiders start showing up inside your Gentry home, give us a call. We will come out fast and make sure they do not come back.",
};

export const AreasServedSpiderControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Spider Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Spiders don't care what city you're in. If you're dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
