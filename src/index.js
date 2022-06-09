import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react/cjs/react.development";

import App from "./App";
import CollaborationsTable from "./components/CollaborationsTable";
import CampaignsTable from "./components/CampaignsTable";
import CampaignFlow from "./pages/CampaignFlow";
import CampaignView from "./pages/CampaignView";
import Campaigns from "./pages/Campaigns";
import CollaborationFlow from "./pages/CollaborationFlow";
import Collaborations from "./pages/Collaborations";
import CollaborationView from "./pages/CollaborationView";
import Main from "./pages/Main";
import Onboard from "./pages/Onboard";
import "./style.css";

let rootElement = document.getElementById("root");

ReactDOM.render(
  <div className="page-wrap">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="onboard" element={<Onboard />} />
          <Route path="main" element={<Main />} />
          <Route path="campaigns" element={<Campaigns />}>
            <Route index element={<CampaignsTable />} />
            <Route path="new" element={<CampaignFlow />} />
            <Route path=":id" element={<CampaignView />} />
          </Route>
          <Route path="collaborations" element={<Collaborations />}>
            <Route index element={<CollaborationsTable />} />
            <Route path="new" element={<CollaborationFlow />} />
            <Route path=":id" element={<CollaborationView />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>,
  rootElement
);
