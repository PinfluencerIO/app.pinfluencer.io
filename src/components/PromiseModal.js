export default function PromiseModal({
  setPromiseAccepted,
  promiseAccepted,
  launchCampaign,
  showPromiseModal,
  setPromiseModalVisability,
}) {
  const hideModalClass = "modal display-none";
  const showModalClass = "modal display-block";
  return (
    <div className={showPromiseModal ? showModalClass : hideModalClass}>
      <section className="modal-main">
        <h2 className="modal-main-heading">Pinfluencer Promise</h2>
        <h4 className="modal-main-subheading">
          To lunch a Campaigns an agreement to the Pinfluencer Promise is needed
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
            Ipsum deserunt cillum esse est sint consectetur laborum commodo sit
            nostrud occaecat.
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
          <button
            type="button"
            onClick={() => setPromiseModalVisability(false)}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
