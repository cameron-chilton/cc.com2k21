import React from "react";
import { bool, func, string, object } from "prop-types";
import ReactAriaModalWrapper from "./ReactAriaModalWrapper";

const Modal = ({
  isOpen,
  header,
  bodyMsg,
  closeModal,
  onClose,
  options,
}) => {

  const containerCss = "modal-container";
  const { ...otherOpts } = options;
  const titleId = "modal-title";
  const DefaultFooter = (
    <span className="ctb-display-inline-block">
      <button id="ctb-modal-footer-close-btn"
        className="usa-button ctb-modal-footer-close-btn"
        onClick={() => {
          closeModal();

          if (onClose) {
            onClose();
          }
        }}
      >
        { "CLOSE" }
      </button>
    </span>
  );

  return (
    <ReactAriaModalWrapper
      mainId="modal"
      titleId={titleId}
      containerCss={containerCss}
      isOpen={isOpen}
      onExit={closeModal}
      initialFocus={ otherOpts.initialFocus || `#${titleId}` }
      underlayClickExits={false}
      { ...otherOpts }
    >
      <div id="modal-header" className="modal-header">
        <h2 id={titleId} className="">{header}</h2>
      </div>

      <div id="modal-body">
        <div id="body-message">{bodyMsg}</div>
      </div>
      <div className="ctb-text-center ctb-vert-align-top">
          {DefaultFooter}
        </div>
    </ReactAriaModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: bool.isRequired,
  header: string,
  bodyMsg: string,
  closeModal: func,
  onClose: func,
  options: object,
};

export default Modal;

