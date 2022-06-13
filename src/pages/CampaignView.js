import { useNavigate, useParams } from "react-router-dom";
import { getCampaigns } from "../fake_db/data";

export default function CampaignView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const campaign = getCampaigns().find((x) => x.id === parseInt(id));
  if (!campaign) return <div>Ouch!</div>;
  return (
    <>
      <div style={{ padding: "10px" }}>
        <button
          className="edit-btn"
          onClick={() => {
            navigate("/campaigns/edit/" + id.toString());
          }}
        >
          Edit
        </button>
        {campaign.status === "Draft" ? (
          <button className="launch-btn">launch</button>
        ) : (
          ""
        )}
        <button className="delete-btn">delete</button>
      </div>
      <section className="view-section">
        <h2 className="view-section-title">Campaign details</h2>
        <div>Status: {campaign.status}</div>
        <div>Campaign Title: {campaign.campaignTitle}</div>
        <div>Campaign Description: {campaign.campaignDescription}</div>
        <div>Product Link: {campaign.productLink}</div>
        <div>Discount code: {campaign.discountCode}</div>
        <div>Hashtag: {campaign.campaignHashtag}</div>
        <div>Categories: {campaign?.campaignCategories?.join(", ")}</div>
        <div>Values: {campaign?.campaignValues?.join(", ")}</div>
      </section>
      <section className="view-section">
        <h2 className="view-section-title">Campaign objectives</h2>
        <div>
          Objective Type: {campaign.objective}{" "}
          <p style={{ fontSize: "0.5rem", marginBottom: "5px" }}>
            This should be a lookup to the text value
          </p>
        </div>
        <div>Objective Description: {campaign.successDescription}</div>
      </section>
      <section className="view-section">
        <h2 className="view-section-title">Product</h2>
        <div>Product Title: {campaign.productTitle}</div>
        <div>Product Description: {campaign.productDescription}</div>
        <div>
          <img
            src={campaign.productImage1}
            alt="product"
            height="40"
            width="40"
          ></img>
        </div>
      </section>
    </>
  );
}
