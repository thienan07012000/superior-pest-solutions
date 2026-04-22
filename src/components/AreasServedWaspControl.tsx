"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Wasps love building nests under the eaves and porches of Fayetteville homes, especially in older neighborhoods near campus. We come out, locate every nest, and remove them so you can enjoy your yard again.",
  bentonville: "New construction in Bentonville often disturbs wasp colonies and sends them looking for shelter around nearby homes. If they have set up on your property, we will get them out fast and safely.",
  rogers: "Rogers backyards are perfect nesting spots for wasps, especially around decks and outdoor dining areas. If you have spotted wasps buzzing around your home, we will find the nest and take care of it for good.",
  springdale: "Springdale's mix of residential and commercial areas gives wasps plenty of places to build. We know how to treat homes and businesses here so wasp nests do not keep coming back.",
  bellavista: "Bella Vista's wooded lots and lakeside properties are prime real estate for wasps. When they build too close to your home, we safely remove the nests and treat the area to prevent rebuilding.",
  siloamsprings: "Older homes in Siloam Springs tend to have more gaps in siding and eaves where wasps love to nest. We know what to look for and go after the problem at its source.",
  lowell: "Lowell is growing fast, and all that construction stirs up wasp activity and pushes them toward homes. We get out there quickly and handle it before the nest grows too large.",
  centerton: "We know Centerton well and can usually get out to you fast. If wasps have set up camp at your place, just give us a call and we will take care of it.",
  farmington: "Farmington families call us when wasps take over their porches and play areas. We do not make them wait long. We come out, treat the problem, and follow up to make sure they are gone for good.",
  pearidge: "Pea Ridge is a close community, and when one house has a wasp problem, neighbors notice. We will take care of yours quickly so it does not turn into something bigger.",
  fortsmith: "Fort Smith stays warm enough that wasps are active from early spring through late fall. If they have built nests around your home, we will track them down and get rid of them for good.",
  huntsville: "Homes around Huntsville sit right next to the woods, and wasps love building colonies near foundations and under roof lines. We will come out, find them, and take care of it before they spread.",
  vanburen: "Whether you live in one of Van Buren's older homes near downtown or in a newer build, wasps find spots to nest. We know where they like to hide, and we will stop them.",
  prairiegrove: "When you live near farmland like folks in Prairie Grove do, wasps are always nearby. We go after the nests so they quit showing up around your home.",
  elkins: "Elkins is close by, so we can usually get to you the same day. If wasps are showing up around your home, just call and we will come handle it.",
  tontitown: "All the building going on in Tontitown means wasp colonies keep getting disturbed and looking for somewhere new to nest. If that somewhere is your house, we will fix it.",
  conway: "Conway has a mix of college apartments and family homes, and wasps show up around all of them. We treat the whole problem so they do not just relocate to another part of your property.",
  gentry: "When you see wasps swarming around your porch or gutters in Gentry, give us a call. We will find the nest and take care of the whole thing.",
};

export const AreasServedWaspControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Wasp Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Wasps do not care what city you are in. If you are dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we are close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
