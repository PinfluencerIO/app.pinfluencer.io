import { useNavigate, useSearchParams } from "react-router-dom";
import { getCampaigns } from "../fake_db/data";
import CampaignFilterButtons from "../primatives/CampaignFilterButtons";

export default function CampaignsTable() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div style={{ padding: "1rem 0" }}>
        <CampaignFilterButtons
          values={["Active", "Draft", "Closed"]}
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
            <thead>
              <tr>
                <th>Title</th>
                <th className="truncate">Description</th>
                <th>Product Title</th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getCampaigns()
                .filter((item) => {
                  const filter = searchParams.get("filter");
                  if (!filter) {
                    return true;
                  } else {
                    return item.status == filter;
                  }
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td className="truncate">{item.description}</td>
                    <td>{item.productTitle}</td>
                    <td>{item.creationDate}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate(item.id.toString());
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
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
