import { useNavigate, useSearchParams } from "react-router-dom";
import CampaignFilterButtons from "../primatives/CampaignFilterButtons";

export default function CollaborationsTable() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div style={{ padding: "1rem 0" }}>
        <CampaignFilterButtons
          values={["In Progress", "Pending Requests", "Completed"]}
          setSearchParams={setSearchParams}
        />
      </div>
      <section style={{ paddingBottom: "1rem" }}>
        <div
          style={{
            display: "block",
          }}
        >
          <table>
            <tr>
              <th>Campaign</th>
              <th>Influencer</th>
              <th>Request Details</th>
              <th>Reviews</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Campaign Title</td>
              <td>InstaDommer</td>
              <td>This was the requet details</td>
              <td>Not reviewed</td>
              <td>
                <button
                  onClick={() => {
                    navigate("1");
                  }}
                >
                  View content
                </button>
                <br />
                <button>Message</button>
              </td>
            </tr>
            <tr>
              <td>A campaign for good</td>
              <td>CornelKingMaker</td>
              <td>Read the requet details</td>
              <td>⭐️ ⭐️ ⭐️ ⭐️</td>
              <td>
                <button
                  onClick={() => {
                    navigate("2");
                  }}
                >
                  View content
                </button>
                <br />
                <button>Message</button>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <div style={{ paddingBottom: "1rem" }}>
        <button
          onClick={() => {
            navigate("new");
          }}
        >
          New Campaign
        </button>
      </div>
    </>
  );
}
