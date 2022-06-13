import { useNavigate } from "react-router-dom";

export default function EditCampaignButton({ id }) {
  const navigate = useNavigate();
  return (
    <button
      className="edit-btn"
      onClick={() => navigate(`/campaigns/${id}/edit`)}
    >
      Edit
    </button>
  );
}
