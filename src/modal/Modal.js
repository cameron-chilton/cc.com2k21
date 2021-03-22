import React from "react";
import { bool, func, string, object } from "prop-types";
import ReactAriaModalWrapper from "./ReactAriaModalWrapper";

const Modal = ({
  isOpen,
  header,
  bodyMsg,
  workImg,
  workTech,
  workUrl,
  workInst,
  closeModal,
  onClose,
  options,
}) => {

  const containerCss = "modal-container";
  const { ...otherOpts } = options;
  const titleId = "modal-title";
  const openSample = (url) => {
    window.open(url);
  };

  return (
    <ReactAriaModalWrapper
      mainId="modal"
      titleId={titleId}
      containerCss={containerCss}
      isOpen={isOpen}
      onExit={closeModal}
      initialFocus={ otherOpts.initialFocus || `#${titleId}` }
      underlayClickExits={true}
      { ...otherOpts }
    >
      <div id="modal-header" className="modal-header">
        <div className="modal-text">
          <h2 className="">{header}</h2>
          <h4>{bodyMsg}</h4>
          <h5>{workTech}</h5>
        </div>
        <div className="modal-ctrls">
          {workUrl &&
            <button className="workButton" onClick={ () => {openSample(workUrl)} }>{workInst}</button>
          }
          <button className="modal-close-btn" title="Close Window" onClick={() => {
            closeModal();
              if (onClose) {
                onClose();
              }
            }}>{"X"}</button>
        </div>
      </div>
      <div className="modal-img">
        <img src={workImg} />
      </div>

    </ReactAriaModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: bool.isRequired,
  header: string,
  bodyMsg: string,
  workImg: string,
  workUrl: string,
  workTech: string,
  workInst: string,
  closeModal: func,
  onClose: func,
  options: object,
};

export default Modal;

