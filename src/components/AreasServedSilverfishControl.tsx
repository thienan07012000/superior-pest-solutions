"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "Older apartments and college housing in Fayetteville have plenty of damp spots that silverfish love. Bathrooms, basements, and closets are where they hide. If you've found one, we'll come out, track them down, and get rid of them.",
  bentonville: "New homes in Bentonville can trap moisture during construction, which is exactly what silverfish are looking for. We'll find where they're hiding and treat the problem before they ruin anything.",
  rogers: "Rogers homes with basements and storage areas are prime silverfish territory. If your books or clothes are showing small holes or yellow stains, give us a call and we'll take care of it.",
  springdale: "Silverfish are common in Springdale, especially in older homes where moisture builds up around pipes and in crawl spaces. We know where to look and how to stop them.",
  bellavista: "Bella Vista's humid summers and wooded surroundings make it easy for silverfish to move inside. We'll treat your home and help keep them from coming back.",
  siloamsprings: "Older homes in Siloam Springs are more likely to have the kind of damp, dark areas silverfish love. We find where they're living and treat the problem at the root.",
  lowell: "Lowell's growing neighborhoods sometimes come with moisture issues that attract silverfish. We get out there fast and stop the problem before it spreads.",
  centerton: "We know Centerton well and can get to you quickly. If silverfish have shown up in your bathrooms, closets, or storage areas, just call us.",
  farmington: "Farmington families call us when they find silverfish near their books or in bathroom corners. We don't make them wait long, and we follow up to make sure they're gone.",
  pearidge: "Pea Ridge homes with basements and crawl spaces are exactly what silverfish go for. We'll take care of yours quickly so it doesn't turn into something bigger.",
  fortsmith: "Older homes in Fort Smith have plenty of dark, damp spots where silverfish like to hang out. We know where to look and will get them out of your house.",
  huntsville: "Crawl spaces and basements in Huntsville homes can hold onto moisture, and silverfish love that. We will come out and make sure they are gone.",
  vanburen: "If you are finding silverfish near your books, papers, or clothing in Van Buren, they are after the moisture and the starch. We will track them down and stop them.",
  prairiegrove: "Homes near fields and trees in Prairie Grove can draw silverfish looking for a damp place to hide. We get rid of them at the source so they stop coming back.",
  elkins: "If silverfish are showing up in your bathrooms or storage areas in Elkins, give us a call. We will come out and take care of it fast.",
  tontitown: "Even newer homes in Tontitown can trap moisture during building, and that is all silverfish need. If they have shown up, we will find them and handle it.",
  conway: "The humidity in Conway gives silverfish plenty of reason to stick around in your closets and bathrooms. We treat homes across the city so they stop ruining your stuff.",
  gentry: "When silverfish start turning up in your closets or bathrooms in Gentry, it means there is moisture they are after. We get to the root of it and make sure they are gone.",
};

export const AreasServedSilverfishControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Silverfish Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Silverfish don't care what city you're in. If you're dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
