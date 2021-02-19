import React, {Component} from 'react';

class WorkL1 extends Component {

  constructor() {
    super();
    this.state = {
      work1data: null,
      work1title: '',
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
    }, 1);
    setInterval( () => {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({work1data: data}));
        this.setState({newSampleUp: true});
    }, 16000);

  }

  addWorkData = (data) => {

    const workSample = Object.values(data);
    //console.log('addWorkData workSample: ' + JSON.stringify(workSample));

    const workLev1 = workSample[0];
    //console.log('workLev1: ' + JSON.stringify(workLev1));

    // title
    this.setState({work1title: workLev1.title});
    //console.log('this.state.work1title: ' + this.state.work1title);

    // img url
    this.setState({work1img: workLev1.img_url});
    //console.log('this.state.work1img: ' + this.state.work1img);

    // set up to false
    this.setState({newSampleUp: false});
  }

  render() {

    //console.log('work1data:' + JSON.stringify(this.state.work1data));

    return (
      <div className="workL1">
        <div className="contentL1">
          {this.state.work1img && <img src={this.state.work1img} />}
        </div>
      </div>
    );

  }

}

export default WorkL1;
