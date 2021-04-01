import React, {Component} from 'react';
import {func} from 'prop-types';
import { connect } from "react-redux";
import {setWorkR2} from "../actions/workSampleActions";
import getStore from '../index';

class WorkR2 extends Component {

  constructor() {
    super();
    this.state = {
      workL1data: null,
      workL1Info: {},
      workL1img: '',
      workL1getAnother: true,
      workL1checkData: null,
    };
  }

  componentDidMount() {
    const url = 'http://localhost/php/getRandom.php';
    setTimeout( () => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({workL1data: data}));
        this.setState({workL1getAnother: true});
    }, 10);
    clearTimeout();
    this.fetchWorkData();
  }

  componentDidUpdate() {
    if (this.state.workL1data !== null && this.state.workL1getAnother) {
      this.addWorkData(this.state.workL1data);
    }
  }

  fetchWorkData = () => {

    const url = 'http://localhost/php/getRandom.php';

    setInterval( () => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({workL1checkData: data}));
      this.setState({workL1getAnother: false});
      // get returned obj
      let workSample, workLev1, checkID;
      this.state.workL1checkData && (workSample = Object.values(this.state.workL1checkData));
      // remove wrapper array
      workSample && (workLev1 = workSample[0]);
      // checkID
      workLev1 && (checkID = workLev1.id);
      // set checkAgain t/f to get new sample
      const checkAgain = this.checkCurrentIDs(checkID) || false;
      if (!checkAgain) {
        this.setState({workL1data: this.state.workL1checkData});
        this.setState({workL1getAnother: true});
      }
      else {
        this.setState({workL1getAnother: false});
      }
    }, 20200);

  }

  checkCurrentIDs = (data1ID) => {
    // get data from store
    const store = getStore();
    const storeVals = store.getState();
    // loop through state object and check for matching value
    // eslint-disable-next-line no-unused-vars
    for(let [key, value] of Object.entries(storeVals.sampleInfo)) {
      if (value == data1ID) {
        return true;
      }
      else {
        // do nothing
      }
    }
  }

  addWorkData = (data) => {
    // get returned obj
    const workSample = Object.values(data);
    // remove wrapper array
    const workLev1 = workSample[0];
    // set sample info object
    this.setState({workL1Info: workLev1});
    // this img url
    this.setState({workL1img: workLev1.img_url});
    // set workL1getAnother to false
    this.setState({workL1getAnother: false});
    // set work L1 id in redux state
    this.props.setWorkR2(workLev1.id);
  }

  render() {

    return (
      <div className="workR2">
        <div className={this.state.workL1img !== null ? `contentR2` : 'contentNONE'}>
          <div>
            {this.state.workL1img && <img src={this.state.workL1img} onClick={ () => {this.props.clickSample(this.state.workL1Info);} } />}
          </div>
        </div>
      </div>
    );

  }

}

WorkR2.propTypes = {
  clickSample: func,
  setWorkR2: func,
};

const mapStateToProps = (state) => ({
  sampleInfo: state.sampleInfo,
});

export default connect(mapStateToProps, {
  setWorkR2,
}
)(WorkR2);
