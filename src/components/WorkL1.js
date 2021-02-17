import React, {Component} from 'react';

class WorkL1 extends Component {

  constructor() {
    super();
    this.state = {
      work1data: {},
    };
  }

  componentDidMount() {
    setTimeout( () => {
      fetch('../php/getRandom.php')
        .then(response => response.json())
        .then(data => this.setState({work1data: data}));
    }, 1500);
    console.log('work1data:' + JSON.stringify(this.state.work1data));
  }

  render() {
    return (
      <div className="workL1">
        <div className="contentL1"></div>
      </div>
    );
  }

}

export default WorkL1;
