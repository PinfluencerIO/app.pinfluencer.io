import * as db from "../../json-server/db.json";

export function getCampaigns() {
  return db.campaigns;
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
