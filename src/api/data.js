import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

export const CATEGORIES = [
  "FOOD",
  "FASHION",
  "FITNESS",
  "PET",
  "CATEGORY5",
  "CATEGORY6",
  "CATEGORY7",
  "CATEGORY8",
  "CATEGORY9",
  "CATEGORY10",
];

export const VALUES = [
  "SUSTAINABLE",
  "ORGANIC",
  "RECYCLED",
  "VEGAN",
  "VALUE5",
  "VALUE6",
  "VALUE7",
  "VALUE8",
  "VALUE9",
  "VALUE10",
];

export const OBJECTIVES = [
  {
    key: "NEW",
    label: "I'm launching a new product or service",
    shortLabel: "New Product/Service",
  },
  {
    key: "AWARENESS",
    label: "I'm aiming to drive awareness about my product or service",
    shortLabel: "Awareness of Product/Service",
  },
  {
    key: "BASELINE",
    label: "I'm looking to develop baseline metrics",
    shortLabel: "Baseline Metrics",
  },
  {
    key: "SOURCING",
    label: "I'm sourcing content to use in my own channels",
    shortLabel: "Own Channel Sourcing",
  },
  {
    key: "PINFLUENCER",
    label: "I'm trialing influencer marketing or Pinfluencer",
    shortLabel: "Pinfluencer Trial",
  },
  { key: "OTHER", label: "Other", shortLabel: "" },
];

export const audienceAges = [
  {
    id: "audienceAge13To17Split",
    label: "13 to 17",
  },
  {
    id: "audienceAge18To24Split",
    label: "18 to 24",
  },
  {
    id: "audienceAge25To34Split",
    label: "25 to 34",
  },
  {
    id: "audienceAge35To44Split",
    label: "35 to 44",
  },
  {
    id: "audienceAge45To54Split",
    label: "45 to 55",
  },
  {
    id: "audienceAge55To64Split",
    label: "55 to 64",
  },
  {
    id: "audienceAge65PlusSplit",
    label: "64+",
  },
];
export const audienceGenders = [
  {
    id: "audienceFemaleSplit",
    label: "Female",
  },

  {
    id: "audienceMaleSplit",
    label: "Male",
  },
];

export const COLLABORATION_STATES = ["APPLIED", "APPROVED", "REJECTED"];

const randomSelection = (collection, numberOfItems) => {
  if (numberOfItems === 1) {
    return collection[Math.floor(Math.random() * collection.length)];
  }
  const result = [];
  while (result.length < numberOfItems) {
    const item = collection[Math.floor(Math.random() * collection.length)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const influencer = () => {
  return {
    id: uuid(),
    givenName: faker.name.firstName(),
    familyName: faker.name.lastName(),
    email: faker.internet.email(),
    instaHandle: faker.name.middleName(),
    website: faker.internet.url(),
    address: faker.address.streetAddress(),
    bio: faker.random.words(45),
    image: faker.image.people(300, 300, true),
    audienceAge13To17Split: 10,
    audienceAge18To24Split: 10,
    audienceAge25To34Split: 10,
    audienceAge35To44Split: 20,
    audienceAge45To54Split: 20,
    audienceAge55To64Split: 20,
    audienceAge65PlusSplit: 10,
    audienceFemaleSplit: 50,
    audienceMaleSplit: 50,
    CATEGORIES: randomSelection(
      CATEGORIES,
      faker.random.numeric(1, { bannedDigits: ["5", "6", "7", "8", "9"] })
    ),
    VALUES: randomSelection(
      VALUES,
      faker.random.numeric(1, { bannedDigits: ["5", "6", "7", "8", "9"] })
    ),
  };
};

const collaboration = (listing, influencer) => {
  return {
    id: uuid(),
    listing: listing.id,
    state: randomSelection(COLLABORATION_STATES, 1),
    application: {
      details: faker.random.words(faker.random.numeric(2)),
      posts: faker.random.numeric(1),
      reels: faker.random.numeric(1, {
        bannedDigits: ["4", "5", "6", "7", "8", "9"],
      }),
    },
    influencer: influencer.id,
  };
};

const listing = () => {
  return {
    id: uuid(),
    title: faker.random.words(),
    creativeGuidance: faker.random.words(10),
    name: `${faker.word.noun()} ${faker.word.noun()}`,
    image: faker.image.food(300, 300, true),
    values: randomSelection(
      VALUES,
      faker.random.numeric(1, { bannedDigits: ["6", "7", "8", "9"] })
    ),
    categories: randomSelection(
      CATEGORIES,
      faker.random.numeric(1, { bannedDigits: ["6", "7", "8", "9"] })
    ),
    created: faker.date.past(),
    listingMonth: faker.date.month(),
    listingYear: faker.date.soon().getFullYear(),
  };
};

const influencer1 = influencer();
const influencer2 = influencer();
const influencer3 = influencer();
const listing1 = listing();
const listing2 = listing();
const listing3 = listing();
const listing4 = listing();
const listing5 = listing();
const listing6 = listing();
const listing7 = listing();
const listing8 = listing();
const listing9 = listing();
const listing10 = listing();

export const influencers = [influencer1, influencer2, influencer3];
export const listings = [
  listing1,
  listing2,
  listing3,
  listing4,
  listing5,
  listing6,
  listing7,
  listing8,
  listing9,
  listing10,
];
export const collaborations = [
  collaboration(listing1, influencer1),
  collaboration(listing1, influencer2),
  collaboration(listing1, influencer3),
  collaboration(listing2, influencer3),
  collaboration(listing3, influencer3),
  collaboration(listing3, influencer2),
  collaboration(listing4, influencer3),
  collaboration(listing5, influencer3),
  collaboration(listing5, influencer2),
  collaboration(listing5, influencer1),
];
