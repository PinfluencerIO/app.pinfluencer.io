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
    image: faker.image.abstract(300, 300, true),
    audienceAge13To17Split: 10,
    audienceAge18To24Split: 10,
    audienceAge25To34Split: 10,
    audienceAge35To44Split: 20,
    audienceAge45To54Split: 20,
    audienceAge55To64Split: 20,
    audienceAge65PlusSplit: 10,
    audienceFemaleSplit: 50,
    audienceMaleSplit: 50,
    CATEGORIES: randomSelection(CATEGORIES, 4),
    VALUES: randomSelection(
      VALUES,
      faker.random.numeric(1, { bannedDigits: ["6", "7", "8", "9"] })
    ),
  };
};

const collaboration = (proposal, influencer) => {
  return {
    id: uuid(),
    proposal: proposal.id,
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

const proposal = () => {
  return {
    id: uuid(),
    title: faker.random.words(),
    creativeGuidance: faker.random.words(10),
    name: `${faker.word.noun()} ${faker.word.noun()}`,
    image: faker.image.abstract(300, 300, true),
    values: randomSelection(
      VALUES,
      faker.random.numeric(1, { bannedDigits: ["6", "7", "8", "9"] })
    ),
    categories: randomSelection(
      CATEGORIES,
      faker.random.numeric(1, { bannedDigits: ["6", "7", "8", "9"] })
    ),
    created: faker.date.past(),
    proposalMonth: faker.date.month(),
    proposalYear: faker.date.soon().getFullYear(),
  };
};

const influencer1 = influencer();
const influencer2 = influencer();
const influencer3 = influencer();
const proposal1 = proposal();
const proposal2 = proposal();
const proposal3 = proposal();
const proposal4 = proposal();
const proposal5 = proposal();
const proposal6 = proposal();

export const influencers = [influencer1, influencer2, influencer3];
export const proposals = [
  proposal1,
  proposal2,
  proposal3,
  proposal4,
  proposal5,
  proposal6,
];
export const collaborations = [
  collaboration(proposal1, influencer1),
  collaboration(proposal1, influencer2),
  collaboration(proposal1, influencer3),
  collaboration(proposal2, influencer3),
  collaboration(proposal3, influencer3),
  collaboration(proposal3, influencer2),
  collaboration(proposal4, influencer3),
  collaboration(proposal5, influencer3),
  collaboration(proposal5, influencer2),
  collaboration(proposal5, influencer1),
];

console.log(faker.random.numeric(1, { bannedDigits: ["6", "7", "8", "9"] }));
