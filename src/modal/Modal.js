import React from "react";
import { bool, func, string, object } from "prop-types";
import ReactAriaModalWrapper from "./ReactAriaModalWrapper";

const Modal = ({
  isOpen,
  bodyMsg,
  closeModal,
  options,
}) => {

  const containerCss = "modal-container";
  const { ...otherOpts } = options;
  const titleId = "modal-title";
  const header = "CC";

  return (
    <ReactAriaModalWrapper
      mainId="ctb-modal"
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
    </ReactAriaModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: bool.isRequired,
  header: string,
  bodyMsg: string,
  closeModal: func.isRequired,
  onClose: func,
  options: object,
};

export default Modal;

