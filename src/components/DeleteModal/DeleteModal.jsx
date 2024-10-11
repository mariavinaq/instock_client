import "./DeleteModal.scss";

const DeleteModal = ({ warehouseName, closeModal }) => {
  return (
    <div className="modal__background">
      <div className="modal__container">
        <div className="modal__close-btn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="modal__title">
          <h1>Delete {warehouseName} warehouse?</h1>
        </div>
        <div className="modal__body">
          <p>
            Please confirm taht you want to delete {warehouseName} from the
            warehouses list
          </p>
        </div>
        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => {
              closeModal(false);
            }}
          >
            cancel
          </button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
