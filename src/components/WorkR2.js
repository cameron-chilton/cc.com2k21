import React, {Component} from 'react';
import {func} from 'prop-types';

class WorkR2 extends Component {

  constructor() {
    super();
    this.state = {
      work1data: null,
      work1Info: {},
      work1img: '',
      newSampleUp: true,
    };
  }

  componentDidMount() {
    this.fetchWorkData();
  }

  componentDidUpdate() {
    if (this.state.work1data !== null && this.state.newSampleUp) {
      this.addWorkData(this.state.work1data);
    }

  }

  fetchWorkData = () => {

    const url = 'http://localhost/php/getRandom.php';
    setTimeout( () => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({work1data: data}));
        this.setState({newSampleUp: true});
    }, 10);
    setInterval( () => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({work1data: data}));
        this.setState({newSampleUp: true});
    }, 17400);

  }

  addWorkData = (data) => {
    // get returned obj
    const workSample = Object.values(data);
    // remove wrapper array
    const workLev1 = workSample[0];
    // set sample info object
    this.setState({work1Info: workLev1});
    // this img url
    this.setState({work1img: workLev1.img_url});
    // set newSampleUp to false
    this.setState({newSampleUp: false});
  }

  render() {

    return (
      <div className="workR2">
        <div className={this.state.work1img !== null ? `contentR2` : 'contentNONE'}>
          {this.state.work1img && <img src={this.state.work1img} onClick={ () => {this.props.clickSample(this.state.work1Info);} } />}
        </div>
      </div>
    );

  }

}

WorkR2.propTypes = {
  clickSample: func,
};

export default WorkR2;
