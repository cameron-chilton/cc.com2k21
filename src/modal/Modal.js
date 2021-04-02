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
  workId,
  workNext,
  hideNext,
  workPrev,
  hidePrev,
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
      {!hideNext ? <div className="modal-next-btn" onClick={ () => { workNext(workId) } }></div> : ''}
      {!hidePrev ? <div className="modal-prev-btn" onClick={ () => { workPrev(workId) } }></div> : ''}

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
  workId: string,
  closeModal: func,
  workNext: func,
  hideNext: bool,
  workPrev: func,
  hidePrev: bool,
  updateModal: func,
  onClose: func,
  options: object,
};

export default Modal;

