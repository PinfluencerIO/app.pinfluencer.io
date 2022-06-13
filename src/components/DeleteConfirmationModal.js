export default function DeleteConfirmationModal({
  showDeleteConfirmationModal,
  setDeleteConfirmationModalVisability,
  deleteCampaign,
}) {
  const hideModalClass = "modal display-none";
  const showModalClass = "modal display-block";
  return (
    <div
      className={showDeleteConfirmationModal ? showModalClass : hideModalClass}
    >
      <section className="modal-main">
        <h2 className="modal-main-heading">Are you sure?</h2>
        <p>You want to delete this campaign?</p>
        <div>
          <button className="yes" onClick={deleteCampaign}>
            Yes
          </button>
          <button
            className="no"
            onClick={() => setDeleteConfirmationModalVisability(false)}
          >
            No
          </button>
        </div>
      </section>
    </div>
  );
}
