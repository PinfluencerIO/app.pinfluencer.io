import { useParams } from "react-router-dom";

export default function CollaborationView() {
  const { id } = useParams();
  if (id !== "1" && id !== "2" && id !== "3") {
    return <div className="page-main">Not Found</div>;
  }
  return <div className="page-main">Collaboration View {id}</div>;
}
