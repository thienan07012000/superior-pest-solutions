export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
  customHref?: string;
  isLarge?: boolean;
  isExtraLarge?: boolean;
}

export const services: Service[] = [
  {
    title: "Ants",
    slug: "ants",
    customHref: "/services/ant-control",
    description: "Ants are sneaky. They get into your food and hide deep inside your walls. We find exactly where they’re coming from and stop the whole colony for you.",
    icon: "/ant.webp",
  },
  {
    title: "Spiders",
    slug: "spiders",
    customHref: "/services/spider-control",
    description: "Nobody likes walking into a spider web. Whether they're in the garage or the basement, we clear them out and make sure new ones can't get back in.",
    icon: "/spider.webp",
  },
  {
    title: "Roaches",
    slug: "roaches",
    customHref: "/services/roach-control",
    description: "Roaches are tough to get rid of by yourself. We use special tools to find their hiding spots and clear them out quickly.",
    icon: "/cockroach.webp",
  },
  {
    title: "Rodents",
    slug: "rodents",
    customHref: "/services/rodent-control",
    description: "Mice and rats can chew on wires and make a big mess. We catch them and seal up any tiny holes so they can’t sneak back into your house.",
    icon: "/rat.webp",
  },
  {
    title: "Mosquitoes",
    slug: "mosquitoes",
    customHref: "/services/mosquito-control",
    description: "Mosquitoes can ruin a nice day outside. We treat your yard to stop them from breeding and keep your family from getting bitten.",
    icon: "/mosquito.webp",
    isLarge: true,
  },
  {
    title: "Bed Bugs",
    slug: "bed-bugs",
    customHref: "/services/bed-bug-control",
    description: "Bed bugs hide in your mattress and bite while you sleep. We use heat and safe treatments to get rid of them so you can sleep soundly again.",
    icon: "/bed-bug.webp",
    isLarge: true,
  },
  {
    title: "Fleas",
    slug: "fleas",
    customHref: "/services/flea-control",
    description: "Fleas are tiny bugs that jump on you and your pets. We clear them out of your carpets and bedding to make your home feel clean again.",
    icon: "/flea.webp",
    isLarge: true,
  },
  {
    title: "Silverfish",
    slug: "silverfish",
    customHref: "/services/silverfish-control",
    description: "Silverfish love damp corners and can ruin your books or clothes. We find where they’re hiding and stop them before they do any damage.",
    icon: "/silverfish.webp",
  },
  {
    title: "Wasps",
    slug: "wasps",
    customHref: "/services/wasp-control",
    description: "Wasps build nests around your home and can sting multiple times. We find every nest and remove it safely so your yard is yours again.",
    icon: "/wasp.webp",
  },
];
