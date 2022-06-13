import * as db from "../../json-server/db.json";

export function getCampaigns() {
  return db.campaigns;
}

export function getCampaign(id) {
  return getCampaigns().find((x) => x.id === parseInt(id));
}

export function getAvailableActionsFor(status) {
  const actions = [
    {
      status: "Draft",
      actions: ["Edit", "Delete", "Launch"],
    },
    {
      status: "Active",
      actions: ["Edit", "Close"],
    },
    {
      status: "Closed",
      actions: ["Delete"],
    },
  ];

  const response = actions.find((i) => {
    return i.status === status;
  });
  return response?.actions ?? [];
}
