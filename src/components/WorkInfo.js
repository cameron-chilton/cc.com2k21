import React from 'react';
import {string, func} from 'prop-types';
import { connect } from "react-redux";
import {openModal, closeModal} from "../actions/modalActions";

export const WorkInfo = ({
    openModal,
    workTitle,
    workImg,
    workDesc,
    workTech,
    workUrl,
    workInst,
    workId,
  }) => {

    const openSample = (url) => {
      window.open(url);
    };

    const showModal = (workTitle, workDesc, workTech, workImg, workInst, workId, workUrl) => {
      const modalInfo = {
        header: workTitle,
        bodyMsg: workDesc,
        workTech: workTech,
        workImg: workImg,
        workUrl: workUrl,
        workInst: workInst,
        workId: workId,
        onClose: () => {
          closeModal();
        },
        options: {
          initialFocus: "#react-aria-modal-dialog",
          focusDialog: true,
          dialogClass: "",
        },
      };
      openModal(modalInfo);
    };

    return (
      <>
        <div className="workLink">
          {workUrl &&
            <button className="workButton" onClick={ () => {openSample(workUrl)} }>{workInst}</button>
          }
        </div>
        <div className="workText">
          <div className="workTitle">{workTitle}</div>
          <div className="workDesc">{workDesc}</div>
          <div className="workTech">{workTech !== '' ? workTech : 'SELECT SAMPLES FOR MORE INFORMATION'}</div>
        </div>
        <div className="workInfo">
          <div className="posDiv">
            <div className="workImg">
              {workImg !== '' ? <img src={workImg} title="Click for larger image" onClick={ () => {showModal(workTitle, workDesc, workTech, workImg, workInst, workId, workUrl)} } /> : ''}
            </div>
            {
              workImg && <img src="../imgs/hand-icon.svg" className="handIcon" />
            }
          </div>
        </div>
      </>
    );

}

WorkInfo.propTypes = {
  workTitle: string,
  workImg: string,
  workDesc: string,
  workTech: string,
  workUrl: string,
  workInst: string,
  workId: string,
  showModal: func,
  // Dispatch Functions
  openModal: func,
};

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps, {
    openModal,
    closeModal,
  }
)(WorkInfo);

