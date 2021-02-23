import React, {Component} from 'react';
import {string} from 'prop-types';

class WorkInfo extends Component {

  openSample = (url) => {
    window.open(url);
  }

  render() {

    const {workTitle, workImg, workDesc, workTech, workUrl, workInst} = this.props;

    return (
      <>
        <div className="workLink">
          {workUrl &&
            <button
              className="workButton"
              onClick={ () => {this.openSample(workUrl)} }>
                {workInst}
            </button>
          }
        </div>
        <div className="workText">
          <div className="workTitle">{workTitle}</div>
          <div className="workDesc">{workDesc}</div>
          <div className="workTech">{workTech}</div>
        </div>
        <div className="workInfo">
          <div className="posDiv">
            <div className="workImg">{workImg !== '' ? <img src={workImg} /> : ''}</div>
          </div>
        </div>
      </>
    );

  }

}

WorkInfo.propTypes = {
  workTitle: string,
  workImg: string,
  workDesc: string,
  workTech: string,
  workUrl: string,
  workInst: string,
};

export default WorkInfo;
