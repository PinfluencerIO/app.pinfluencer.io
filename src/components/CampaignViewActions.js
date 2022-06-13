import { useNavigate } from "react-router-dom";

export default function CampaignViewActions({
  campaign,
  showModal,
  showCloseConformationModal,
}) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "10px" }}>
      <button
        className="edit-btn"
        onClick={() => {
          navigate("/campaigns/edit/" + campaign.id.toString());
        }}
      >
        Edit
      </button>
      {campaign.status === "Draft" ? (
        <button className="launch-btn" onClick={showModal}>
          launch
        </button>
      ) : (
        ""
      )}

      {campaign.status === "Active" ? (
        <button className="close-btn" onClick={showCloseConformationModal}>
          Close
        </button>
      ) : (
        <button className="delete-btn">delete</button>
      )}
    </div>
  );
}
