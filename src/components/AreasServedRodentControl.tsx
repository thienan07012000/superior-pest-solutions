"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Older apartments and houses near campus in Fayetteville are a magnet for mice and rats. They find their way in through gaps in the foundation and walls. Whether you rent or own, we'll come out and take care of it.",
  bentonville: "New construction in Bentonville stirs up rodents and pushes them straight into nearby homes and offices. If they've found their way in, we'll get them out fast and seal things up.",
  rogers: "Rogers homeowners often find signs of mice in their kitchens, garages, and attics. If you've heard scratching or found droppings, give us a call. We'll track them down and clear them out.",
  springdale: "Springdale's food industry and close neighborhoods give rodents plenty of reasons to stick around. We know how to treat homes and businesses here and keep them gone.",
  bellavista: "Bella Vista's wooded lots are beautiful, but field mice and pack rats love moving inside when it gets cold. We'll treat your home and keep the wildlife where it belongs.",
  siloamsprings: "Older homes in Siloam Springs have more gaps and entry points that rodents squeeze through. We find where they're getting in and seal things up so they don't come back.",
  lowell: "Lowell is growing fast, and new construction stirs up rodents and sends them into homes nearby. We get out there quickly and handle it before it gets worse.",
  centerton: "We know Centerton well and can usually get out to you fast. If mice or rats have shown up at your place, just give us a call and we'll take care of it.",
  farmington: "Farmington families call us when they start hearing scratching or finding droppings. We come out, find the source, and follow up to make sure they're gone for good.",
  pearidge: "Pea Ridge is a close community, and rodent problems tend to spread between nearby homes. We'll take care of yours quickly so it doesn't turn into something bigger.",
  fortsmith: "A lot of older homes and buildings in Fort Smith have gaps that mice and rats squeeze right through. We will find where they are getting in, seal it up, and get them out.",
  huntsville: "Field mice and pack rats are pretty common around Huntsville, especially near wooded areas. We will find where they are getting in and put a stop to it.",
  vanburen: "If you hear scratching in the walls of your Van Buren home, you are not imagining things. We will find where they are getting in, trap what is inside, and close everything up.",
  prairiegrove: "All the farmland around Prairie Grove gives mice and rats plenty of room to nest before they move inside. We take care of it fast so it does not get worse.",
  elkins: "When it gets cold around Elkins, mice head straight for the warmest spot they can find, and that is usually your house. If you have found droppings or heard noises, give us a call.",
  tontitown: "With all the new construction in Tontitown, mice and rats get pushed out of their usual spots and straight into homes. We will make sure your house is not their next stop.",
  conway: "Homes and apartments in Conway deal with mouse and rat problems more than you might expect. We handle everything from trapping to sealing entry points, so they stay gone.",
  gentry: "When mice or rats show up in a Gentry home, we move fast. We find where they are coming in and make sure they can not get back.",
};

export const AreasServedRodentControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Rodent Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Rodents don't care what city you're in. If you're dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
