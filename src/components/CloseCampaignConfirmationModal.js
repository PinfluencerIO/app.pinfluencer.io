export default function CloseCampaignConfirmationModal({
  showCloseCampaignConfirmationModal,
  setCloseCampaignConfirmationModalVisability,
  closeCampaign,
}) {
  const hideModalClass = "modal display-none";
  const showModalClass = "modal display-block";
  return (
    <div
      className={
        showCloseCampaignConfirmationModal ? showModalClass : hideModalClass
      }
    >
      <section className="modal-main">
        <h2 className="modal-main-heading">Are you sure?</h2>
        <p>You want to close this campaign?</p>
        <div>
          <button className="yes" onClick={closeCampaign}>
            Yes
          </button>
          <button
            className="no"
            onClick={() => setCloseCampaignConfirmationModalVisability(false)}
          >
            No
          </button>
        </div>
      </section>
    </div>
  );
}
