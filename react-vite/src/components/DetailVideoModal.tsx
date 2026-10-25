export default function DetailVideoModal() {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="modal-close">X</button>
        <div className="modal-top">
          <img className="modal-banner" src="" alt="" />
          <p className="modal-title heading-3">Title</p>
          <div className="modal-action">
            <button>Mulai</button>
            <button>+</button>
            <button></button>
          </div>
        </div>
        <div className="modal-information">
          <div className="modal-left">
            <div className="modal-meta">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="modal-description"></p>
          </div>
          <div className="modal-detail">
            <p>Cast : </p>
            <p>Genre : </p>
            <p>Pembuat Film : </p>
          </div>
        </div>
      </div>
    </div>
  );
}
