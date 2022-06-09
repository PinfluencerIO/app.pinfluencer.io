const camapaigns = [
  {
    id: 3,
    title: "Campaign Title",
    description: "Campaign Description",
    productTitle: "Product Title",
    creationDate: "3rd Aug 2022",
    status: "Active",
  },
  {
    id: 2,
    title: "Cillum magna",
    description: "The Description",
    productTitle: "Some Product",
    creationDate: "22nd July 2022",
    status: "Active",
  },
  {
    id: 1,
    title: "Closed Campaign",
    description:
      "Est eu ex labore ut non aliquip ullamco duis officia excepteur occaecat laboris dolore. Labore irure commodo eu excepteur reprehenderit duis qui consectetur culpa eiusmod et consectetur.",
    productTitle: "Duis aliquip nisi nulla ",
    creationDate: "1st June 2022",
    status: "Closed",
  },
  {
    id: 4,
    title: "Draft Campaign ",
    description: "Do commodo culpa",
    productTitle: "Elit incididunt",
    creationDate: "10th Sept 2022",
    status: "Draft",
  },
];

export function getCampaigns() {
  return camapaigns;
}
