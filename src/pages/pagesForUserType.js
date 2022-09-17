import CampaignIcon from "@mui/icons-material/Campaign";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";

const pages = {
  authenticated: {
    brand: [
      { label: "Dashboard", path: "dashboard", icon: <DashboardIcon /> },
      { label: "Campaigns", path: "campaigns", icon: <CampaignIcon /> },
      {
        label: "Collaborations",
        path: "collaborations",
        icon: <GroupIcon />,
      },
    ],
    influencer: [
      { label: "Dashboard", path: "dashboard", icon: <DashboardIcon /> },
      {
        label: "Collaborations",
        path: "collaborations",
        icon: <GroupIcon />,
      },
    ],
    onboarding: [{ label: "Onboarding", path: "onboarding", icon: null }],
  },
};

export const pagesForUserType = (user) => {
  //authenticated and onboarded, pull pages from data structure
  if (user && "custom:usertype" in user) {
    return pages.authenticated[user["custom:usertype"]];
  }
  //authenticated onboarded required
  if (user) {
    return pages.authenticated.onboarding;
  }
  // unauthenticated
  return [];
};
