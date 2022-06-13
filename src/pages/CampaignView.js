import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CloseCampaignConfirmationModal from "../components/CloseCampaignConfirmationModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import PromiseModal from "../components/PromiseModal";
import { getAvailableActionsFor, getCampaign } from "../fake_db/data";
import EditCampaignButton from "../primatives/EditCampaignButton";
/*
This is a big file. 

Don't panic future Dom...read the comments.

Improvements are possible, but just not how. Luke, stay on target!

State for each modal window [launch, delete and close confirmations]
Some onClick handlers for each modal
*/
export default function CampaignView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPromiseModal, setPromiseModalVisability] = useState(false);
  const [showDeleteConfirmationModal, setDeleteConfirmationModalVisability] =
    useState(false);
  const [
    showCloseCampaignConfirmationModal,
    setCloseCampaignConfirmationModalVisability,
  ] = useState(false);
  const [promiseAccepted, setPromiseAccepted] = useState(false);
  const campaign = getCampaign(id);

  if (!campaign) return <div>Ouch - That Campaign is not known!</div>;

  const actions = getAvailableActionsFor(campaign.status);

  // onClick Actions
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function deleteCampaign() {
    const updateCampaign = { ...campaign, status: "Deleted" };
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
        navigate("/campaigns?");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function closeCampaign() {
    const updateCampaign = { ...campaign, status: "Closed" };
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
        navigate("/campaigns?");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      {/* looping over required actions for this campaigns.status, rending the required buttons */}
      <div style={{ padding: "10px" }}>
        {actions.map((action) => {
          console.log("action", action);
          if (action === "Edit") {
            return <EditCampaignButton key={action} id={id.toString()} />;
          } else if (action === "Launch") {
            return (
              <button
                key={action}
                s
                className="launch-btn"
                onClick={() => setPromiseModalVisability(true)}
              >
                launch
              </button>
            );
          } else if (action === "Close") {
            return (
              <button
                key={action}
                className="close-btn"
                onClick={() =>
                  setCloseCampaignConfirmationModalVisability(true)
                }
              >
                Close
              </button>
            );
          } else if (action === "Delete") {
            return (
              <button
                key={action}
                className="delete-btn"
                onClick={() => setDeleteConfirmationModalVisability(true)}
              >
                delete
              </button>
            );
          }
        })}
      </div>
      {/* Modals */}
      <PromiseModal
        setPromiseAccepted={setPromiseAccepted}
        promiseAccepted={promiseAccepted}
        launchCampaign={launchCampaign}
        showPromiseModal={showPromiseModal}
        setPromiseModalVisability={setPromiseModalVisability}
      />
      <DeleteConfirmationModal
        showDeleteConfirmationModal={showDeleteConfirmationModal}
        setDeleteConfirmationModalVisability={
          setDeleteConfirmationModalVisability
        }
        deleteCampaign={deleteCampaign}
      />
      <CloseCampaignConfirmationModal
        showCloseCampaignConfirmationModal={showCloseCampaignConfirmationModal}
        setCloseCampaignConfirmationModalVisability={
          setCloseCampaignConfirmationModalVisability
        }
        closeCampaign={closeCampaign}
      />
      {/* Visible html elements */}
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
