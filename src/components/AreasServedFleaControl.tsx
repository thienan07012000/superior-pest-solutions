"use client";
import { AreasServedSection } from './AreasServedSection';
import { Area } from '@/constants/areas';

const descriptions: Record<string, string> = {
  fayetteville: "With all the college apartments and pet-friendly rentals in Fayetteville, fleas get around fast. If your pets are scratching or you're finding bites, give us a call and we'll come take a look.",
  bentonville: "Bentonville's parks and trails are great for dogs, but they also give fleas plenty of chances to hitch a ride home. We'll treat your house and yard to stop them from spreading.",
  rogers: "Fleas love the warm weather in Rogers just as much as you do. If they've moved inside, we know how to clear them out of your carpets, furniture, and pet areas fast.",
  springdale: "Springdale families with pets deal with fleas more than most people expect. We come out, find where they're hiding, and make sure they're gone for good.",
  bellavista: "All the wildlife around Bella Vista means fleas are never far away. We protect your home and pets so the outdoors stays where it belongs.",
  siloamsprings: "Fleas in Siloam Springs tend to move inside through pets or even just open doors. We know how to treat the problem at the source so it doesn't keep coming back.",
  lowell: "Lowell's growing neighborhoods mean more pets, and more pets sometimes means more fleas. We get ahead of the problem before it spreads.",
  centerton: "If fleas have shown up in your Centerton home, just reach out. We're close by and can usually get to you quickly.",
  farmington: "Farmington pet owners trust us to handle flea problems without making their animals uncomfortable. We treat your home and follow up to make sure they're gone.",
  pearidge: "Pea Ridge is a close-knit community, and fleas can travel between yards fast. Let us handle yours so it doesn't become a bigger issue.",
  fortsmith: "Fort Smith stays warm enough that fleas stick around most of the year. If your pets are scratching or you are getting bites, we will treat the house and the yard so it stops.",
  huntsville: "Dogs and cats in Huntsville pick up fleas from the woods and fields all the time. We will treat your home and yard so your family and pets can relax again.",
  vanburen: "Once fleas get into a Van Buren home with pets, they spread fast. We go after them in the carpets, the furniture, and the yard so they are really gone.",
  prairiegrove: "If you have pets in Prairie Grove, fleas are probably something you have dealt with before. We treat the whole home and yard so everyone, people and pets, stops scratching.",
  elkins: "Elkins families with dogs or cats run into flea problems more often than you would think. Give us a call and we will come out and take care of it.",
  tontitown: "More homes in Tontitown means more pets, and more pets means more chances for fleas. We get ahead of it before it takes over the whole house.",
  conway: "Conway pet owners call us because we get flea problems under control fast. We treat the home, the yard, and come back to make sure they are actually gone.",
  gentry: "If you have pets in Gentry and fleas have shown up, you are not alone. We will come out, treat the house and yard, and make sure they do not come back.",
};

export const AreasServedFleaControl = () => (
  <AreasServedSection
    badge="We Come to You"
    heading={<>Flea Control <span className="text-[var(--brand-red)]">Near You</span></>}
    sectionDescription="Fleas don't stay in one spot. If you're dealing with them anywhere in Northwest Arkansas or Southeast Oklahoma, we're close by and ready to help. Pick your area below."
    getDescription={(area: Area) => descriptions[area.id] ?? area.description}
    isHomePage={true}
  />
);
