import {
  GraduationCap,
  Bike,
  Waves,
  Bird,
  Church,
  Droplets,
  Truck,
  Apple,
  Wheat,
  Swords,
  MapPin,
  Navigation,
  Compass,
  Sun,
  Ship,
  TreePine,
  Shield,
  Zap
} from 'lucide-react';
import React from 'react';

export interface Area {
  id: string;
  name: string;
  state: string;
  image: string;
  icon: React.ReactNode;
  description: string;
}

export const areas: Area[] = [
  {
    id: 'fayetteville',
    name: 'Fayetteville',
    state: 'Arkansas',
    image: '/fayetteville.webp',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Home of the Razorbacks and a vibrant community. We protect your home from pests so you can enjoy college town living without the bugs.'
  },
  {
    id: 'bentonville',
    name: 'Bentonville',
    state: 'Arkansas',
    image: '/bentonville.webp',
    icon: <Bike className="w-5 h-5" />,
    description: "The mountain biking capital and a hub of innovation. Whether it's your downtown office or your home off the trail, we keep it pest-free."
  },
  {
    id: 'rogers',
    name: 'Rogers',
    state: 'Arkansas',
    image: '/rogers.webp',
    icon: <Waves className="w-5 h-5" />,
    description: 'From Beaver Lake to Pinnacle Hills, we provide top-tier pest protection for families throughout Rogers.'
  },
  {
    id: 'springdale',
    name: 'Springdale',
    state: 'Arkansas',
    image: '/springdale.webp',
    icon: <Bird className="w-5 h-5" />,
    description: 'The heart of Northwest Arkansas. We ensure your Springdale home or business stays clean and safe from unwanted intruders.'
  },
  {
    id: 'bellavista',
    name: 'Bella Vista',
    state: 'Arkansas',
    image: '/bellavista.webp',
    icon: <Church className="w-5 h-5" />,
    description: 'Protecting the natural beauty of Bella Vista homes. We offer nature-focused pest solutions that respect the environment.'
  },
  {
    id: 'siloamsprings',
    name: 'Siloam Springs',
    state: 'Arkansas',
    image: '/siloamsprings.webp',
    icon: <Droplets className="w-5 h-5" />,
    description: 'Preserving the historic charm and modern life in Siloam Springs with expert pest control you can trust.'
  },
  {
    id: 'lowell',
    name: 'Lowell',
    state: 'Arkansas',
    image: '/lowell.webp',
    icon: <Truck className="w-5 h-5" />,
    description: 'A growing hub at the center of Northwest Arkansas. We move fast to resolve your pest issues before they become problems.'
  },
  {
    id: 'centerton',
    name: 'Centerton',
    state: 'Arkansas',
    image: '/centerton.webp',
    icon: <Apple className="w-5 h-5" />,
    description: 'As Centerton expands, so do pest challenges. We help new and established families keep their homes bug-free.'
  },
  {
    id: 'farmington',
    name: 'Farmington',
    state: 'Arkansas',
    image: '/farmington.webp',
    icon: <Wheat className="w-5 h-5" />,
    description: 'Providing Farmington families with peace of mind through reliable, long-lasting pest control solutions.'
  },
  {
    id: 'pearidge',
    name: 'Pea Ridge',
    state: 'Arkansas',
    image: '/pearidge.webp',
    icon: <Swords className="w-5 h-5" />,
    description: 'Serving the growing Pea Ridge community with localized knowledge and professional pest management.'
  },
  {
    id: 'fortsmith',
    name: 'Fort Smith',
    state: 'Arkansas',
    image: '/fortsmith.webp',
    icon: <Shield className="w-5 h-5" />,
    description: "Fort Smith has old neighborhoods, busy streets, and plenty of bugs that come with both. If something's bugging you at home or work, we'll come out and take care of it."
  },
  {
    id: 'huntsville',
    name: 'Huntsville',
    state: 'Arkansas',
    image: '/huntsville.webp',
    icon: <TreePine className="w-5 h-5" />,
    description: "The Ozarks are great until the bugs start moving in with you. We help Huntsville families keep their homes comfortable and pest-free, no matter what's crawling out of the woods."
  },
  {
    id: 'vanburen',
    name: 'Van Buren',
    state: 'Arkansas',
    image: '/vanburen.webp',
    icon: <Ship className="w-5 h-5" />,
    description: "Van Buren has some of the nicest older homes in the River Valley. We help you keep yours just the way you like it, without any uninvited guests showing up."
  },
  {
    id: 'prairiegrove',
    name: 'Prairie Grove',
    state: 'Arkansas',
    image: '/prairiegrove.webp',
    icon: <Sun className="w-5 h-5" />,
    description: "Prairie Grove is a small town where people look out for each other. When bugs show up, folks around here know to give us a call, and we always take care of it."
  },
  {
    id: 'elkins',
    name: 'Elkins',
    state: 'Arkansas',
    image: '/elkins.webp',
    icon: <Compass className="w-5 h-5" />,
    description: "Elkins is the kind of place where you know your neighbors. When you call us, we show up on time, do the job right, and make sure you're happy with the results."
  },
  {
    id: 'tontitown',
    name: 'Tontitown',
    state: 'Arkansas',
    image: '/tontitown.webp',
    icon: <MapPin className="w-5 h-5" />,
    description: "Tontitown keeps growing, with new homes going up all the time. Whether you just moved in or you've been here for years, we'll make sure bugs aren't part of the picture."
  },
  {
    id: 'conway',
    name: 'Conway',
    state: 'Arkansas',
    image: '/conway.webp',
    icon: <Zap className="w-5 h-5" />,
    description: "Conway is full of families and college students, and both deal with bugs more than they'd like. We help people here stay ahead of pest problems before they get out of hand."
  },
  {
    id: 'gentry',
    name: 'Gentry',
    state: 'Arkansas',
    image: '/gentry.webp',
    icon: <Navigation className="w-5 h-5" />,
    description: "Gentry is a quiet town with good people, and we love working here. When you call, we show up on time, tell you what we're going to do, and get it done."
  }
];
