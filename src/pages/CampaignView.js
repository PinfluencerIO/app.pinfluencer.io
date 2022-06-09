import { useParams } from "react-router-dom";

export default function CampaignView() {
  const { id } = useParams();
  if (id !== "1" && id !== "2" && id !== "3") {
    return <div className="page-main">No campaign found</div>;
  }
  return <div className="page-main">Campaign View {id}</div>;
}
