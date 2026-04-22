"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "With the university, parks, and older neighborhoods, Fayetteville has no shortage of standing water and shaded yards where mosquitoes thrive. We treat the breeding spots so you can enjoy your evenings outside again.",
  bentonville: "New construction and landscaping in Bentonville create plenty of low spots and drainage issues that mosquitoes love. We target those areas before populations explode.",
  rogers: "Between Beaver Lake and all the green space, Rogers mosquitoes have plenty of water to breed in. We treat yards and outdoor areas so families can get back outside.",
  springdale: "Springdale's warm summers and humid conditions make it prime mosquito territory. We know the hot spots and treat them before they become a problem for your family.",
  bellavista: "Bella Vista's lakes, creeks, and wooded lots are beautiful — and perfect for mosquitoes. We help homeowners here enjoy the outdoors without getting eaten alive.",
  siloamsprings: "Older properties in Siloam Springs often have drainage issues that create standing water. We find those hidden breeding grounds and treat them at the source.",
  lowell: "Lowell is growing fast, and construction runoff creates perfect mosquito breeding conditions. We get ahead of the problem so new and established homes stay protected.",
  centerton: "Centerton's newer developments often have irrigation and drainage that mosquitoes exploit. We treat those areas to keep your family comfortable outdoors.",
  farmington: "Farmington's rural properties can have plenty of standing water from ponds, ditches, and rain collection. We treat the whole yard to cut mosquito populations down fast.",
  pearidge: "Pea Ridge families deserve to enjoy their backyards. We target mosquito breeding areas across your property so evenings outside are pleasant again.",
  fortsmith: "Living near the river in Fort Smith means mosquitoes have plenty of water to breed in. We treat your yard so you can actually sit outside in the evenings again.",
  huntsville: "All the creeks and ponds around Huntsville give mosquitoes so many places to breed. We treat your whole yard so you can enjoy being outside without getting eaten alive.",
  vanburen: "Low spots near the river in Van Buren hold standing water, and mosquitoes love it. We find those spots and take care of them before the mosquito numbers get out of control.",
  prairiegrove: "The open land and ditches around Prairie Grove are great for mosquitoes every summer. We treat your yard so your family can actually spend time outside.",
  elkins: "A lot of homes around Elkins have ponds or standing water nearby, and that means mosquitoes. We treat the whole area so they do not take over your evenings.",
  tontitown: "New neighborhoods in Tontitown sometimes have drainage issues, and mosquitoes move right in. We get out ahead of it so your backyard stays comfortable.",
  conway: "Conway has beautiful lakes and parks, but mosquitoes love them just as much as you do. We treat your yard so you can enjoy it all summer long.",
  gentry: "You should be able to enjoy your backyard in Gentry without mosquitoes ruining it. We treat the spots where they breed so you can be outside in peace.",
};

export const AreasServedMosquitoControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Mosquito Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Mosquitoes don't care what city you're in. If you're dealing with them somewhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to come out. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
