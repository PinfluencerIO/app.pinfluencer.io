import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCampaigns } from "../fake_db/data";

export default function CampaignView() {
  const [show, setShow] = useState(false);
  const [promiseAccepted, setPromiseAccepted] = useState(false);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const { id } = useParams();
  const navigate = useNavigate();

  const campaign = getCampaigns().find((x) => x.id === parseInt(id));
  if (!campaign) return <div>Ouch!</div>;
  const hideModal = () => {
    setShow(false);
  };
  const showModal = () => {
    setShow(true);
  };

  function launchCampaign() {
    const updateCampaign = { ...campaign, status: "Active" };
    fetch("http://localhost:3000/campaigns/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCampaign),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/campaigns?id=" + data.id);
        console.log("Nav to table:");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <h2 className="modal-main-heading">Pinfluencer Promise</h2>
          <h4 className="modal-main-subheading">
            To lunch a Campaigns an agreement to the Pinfluencer Promise is
            needed
          </h4>
          <p>
            There&apos;s an art to getting your way, and spitting olive pits
            across the table isn&apos;t it.
          </p>
          <p>
            He went back to the video to see what had been recorded and was
            shocked at what he saw. Garlic ice-cream was her favorite.
          </p>
          <ul>
            <li>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual text commonly used to demonstrate the visual
            </li>
            <li>
              Ipsum deserunt cillum esse est sint consectetur laborum commodo
              sit nostrud occaecat.
            </li>
            <li>
              Enim culpa eu officia officia et duis labore proident aliqua ipsum
              minim reprehenderit ut.
            </li>
          </ul>
          <label htmlFor="promiseAcceptance">
            <input
              type="checkbox"
              id="promiseAcceptance"
              name="promiseAccetpance"
              onChange={(e) => setPromiseAccepted(e.target.checked)}
            />
            {"  "}I accept the Prinfluencer Promise
          </label>

          <div className="promise-actions">
            <button
              className={promiseAccepted ? "launch-btn" : "launch-btn-disabled"}
              disabled={!promiseAccepted}
              onClick={launchCampaign}
            >
              launch
            </button>
            <button type="button" onClick={hideModal}>
              Close
            </button>
          </div>
        </section>
      </div>
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
          <button className="launch-btn" onClick={showModal}>
            launch
          </button>
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
