import React, {Component} from 'react';
import WorkL1 from './WorkL1';
import WorkL2 from './WorkL2';
import WorkR1 from './WorkR1';
import WorkR2 from './WorkR2';
import WorkInfo from './WorkInfo';
import Modal from '../modal/Modal';
import {string, object, func} from 'prop-types';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      // LEFT FRONT
      lfCnum49:'8', lfCnum48:'9', lfCnum50:'10', lfCnum51:'11', lfCnum52:'12', lfCnum53:'13', lfCnum54:'14', lfCnum55:'15', lfCnum56:'16',
      lfCnum57:'1', lfCnum58:'2', lfCnum59:'3', lfCnum60:'4', lfCnum61:'4', lfCnum62:'5', lfCnum63:'6', lfCnum64:'7',
      // RIGHT FRONT
      rfCnum1: '1',  rfCnum2: '2', rfCnum3: '3', rfCnum4: '4', rfCnum5: '5', rfCnum6: '6', rfCnum7: '7', rfCnum8: '8', rfCnum9: '9',
      rfCnum10: '10', rfCnum11: '11', rfCnum12: '12', rfCnum13: '13', rfCnum14: '14', rfCnum15: '15', rfCnum16: '16',
      // WORK INFO BOX
      workTitle: '',
      workImg: '',
      workDesc: '',
      workTech: '',
      workUrl: '',
      workInst: '',
    };
  }

  componentDidMount() {

    // LEFT FRONT
    setInterval(()=> this.getClassNum49(), 20000);
    setInterval(()=> this.getClassNum50(), 19000);
    setInterval(()=> this.getClassNum51(), 18000);
    setInterval(()=> this.getClassNum52(), 21000);
    setInterval(()=> this.getClassNum53(), 22000);
    setInterval(()=> this.getClassNum54(), 19000);
    setInterval(()=> this.getClassNum55(), 16000);
    setInterval(()=> this.getClassNum56(), 14000);
    setInterval(()=> this.getClassNum57(), 23000);
    setInterval(()=> this.getClassNum58(), 21000);
    setInterval(()=> this.getClassNum59(), 20000);
    setInterval(()=> this.getClassNum60(), 24000);
    setInterval(()=> this.getClassNum61(), 13000);
    setInterval(()=> this.getClassNum62(), 18000);
    setInterval(()=> this.getClassNum63(), 19000);
    setInterval(()=> this.getClassNum64(), 21000);

    // RIGHT FRONT
    setInterval(()=> this.getClassNum1(), 20000);
    setInterval(()=> this.getClassNum2(), 22000);
    setInterval(()=> this.getClassNum3(), 24000);
    setInterval(()=> this.getClassNum4(), 19000);
    setInterval(()=> this.getClassNum5(), 17000);
    setInterval(()=> this.getClassNum6(), 16000);
    setInterval(()=> this.getClassNum7(), 20000);
    setInterval(()=> this.getClassNum8(), 18000);
    setInterval(()=> this.getClassNum9(), 14000);
    setInterval(()=> this.getClassNum10(), 16000);
    setInterval(()=> this.getClassNum11(), 18000);
    setInterval(()=> this.getClassNum12(), 19000);
    setInterval(()=> this.getClassNum13(), 23000);
    setInterval(()=> this.getClassNum14(), 22000);
    setInterval(()=> this.getClassNum15(), 20000);
    setInterval(()=> this.getClassNum16(), 21000);

  }

  // LEFT FRONT
  getClassNum49 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum49: y}); }
  getClassNum50 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum50: y}); }
  getClassNum51 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum51: y}); }
  getClassNum52 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum52: y}); }
  getClassNum53 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum53: y}); }
  getClassNum54 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum54: y}); }
  getClassNum55 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum55: y}); }
  getClassNum56 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum56: y}); }
  getClassNum57 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum61: y}); }
  getClassNum58 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum61: y}); }
  getClassNum59 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum61: y}); }
  getClassNum60 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum61: y}); }
  getClassNum61 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum61: y}); }
  getClassNum62 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum62: y}); }
  getClassNum63 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum63: y}); }
  getClassNum64 = () => { let y = this.getClassNum(1,16); this.setState({lfCnum64: y}); }

  // RIGHT FRONT
  getClassNum1 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum1: y}); }
  getClassNum2 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum2: y}); }
  getClassNum3 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum3: y}); }
  getClassNum4 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum4: y}); }
  getClassNum5 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum5: y}); }
  getClassNum6 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum6: y}); }
  getClassNum7 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum7: y}); }
  getClassNum8 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum8: y}); }
  getClassNum9 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum9: y}); }
  getClassNum10 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum10: y}); }
  getClassNum11 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum11: y}); }
  getClassNum12 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum12: y}); }
  getClassNum13 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum13: y}); }
  getClassNum14 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum14: y}); }
  getClassNum15 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum15: y}); }
  getClassNum16 = () => { let y = this.getClassNum(1,16); this.setState({rfCnum16: y}); }

  getClassNum = (min, max) => {
    let x = Math.random() * (max - min) + min;
    let y =  Math.round(x);
    return y;
  }

  clickSample = (info) => {
    this.setState({workTitle: info.title});
    this.setState({workImg: info.img_url});
    this.setState({workDesc: info.desc});
    this.setState({workTech: info.tech_used});
    this.setState({workUrl: info.res_url});
    this.setState({workInst: info.sample_inst});
  }

  showModal = () => {
    console.log('showModal hiy');

  }

  render() {
    const isAnyModalOpen = false;
    const curTabIndex = isAnyModalOpen ? "-1" : undefined;
    const modalInfo = {
      header: "Preview of CTB-Generated Consult Comments",
      bodyMsg: "",
      options: {
        initialFocus: "#react-aria-modal-dialog",
        focusDialog: true,
        dialogClass: "preview-modal",
      }
    };
    return (
      <>
        <div className="main-container" aria-hidden={isAnyModalOpen} tabIndex={curTabIndex}>

          <div className="nameTitle">
            <h1>CAMERON CHILTON</h1>
            <h2>UI/UX DESIGN/DEVELOPMENT</h2>
            <div>
              <a href="https://www.linkedin.com/in/cameronchilton/" className="main-icons" target="_blank" rel="noopener noreferrer" title="Visit LinkedIn Profile">
                <img className="" src="../imgs/linkedin.svg" />
              </a>
              <a href="https://github.com/cameron-chilton" className="main-icons" target="_blank" rel="noopener noreferrer" title="Visit GitHub Profile">
                <img className="" src="../imgs/github.svg" />
              </a>
              <a href="../imgs/CameronChilton-UX-Architect-UI-Developer-2021.docx" className="main-icons" title="Download Resume" download>
                <img className="" src="../imgs/msWord.svg" />
              </a>
            </div>
          </div>

          <div className="left-front">
            <div className="left-front-content">
              <div className="left-front-text">
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum56}>S</span>
                  <span className={"lf-" + this.state.lfCnum55}>O</span>
                  <span className={"lf-" + this.state.lfCnum54}>F</span>
                  <span className={"lf-" + this.state.lfCnum53}>T</span>
                  <span className={"lf-" + this.state.lfCnum49}>W</span>
                  <span className={"lf-" + this.state.lfCnum50}>A</span>
                  <span className={"lf-" + this.state.lfCnum51}>R</span>
                  <span className={"lf-" + this.state.lfCnum52}>E</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum53}>R</span>
                  <span className={"lf-" + this.state.lfCnum54}>E</span>
                  <span className={"lf-" + this.state.lfCnum55}>A</span>
                  <span className={"lf-" + this.state.lfCnum56}>C</span>
                  <span className={"lf-" + this.state.lfCnum57}>T</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum58}>U</span>
                  <span className={"lf-" + this.state.lfCnum59}>S</span>
                  <span className={"lf-" + this.state.lfCnum60}>E</span>
                  <span className={"lf-" + this.state.lfCnum61}>R</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum49}>J</span>
                  <span className={"lf-" + this.state.lfCnum50}>A</span>
                  <span className={"lf-" + this.state.lfCnum51}>V</span>
                  <span className={"lf-" + this.state.lfCnum52}>A</span>
                  <span className={"lf-" + this.state.lfCnum53}>S</span>
                  <span className={"lf-" + this.state.lfCnum54}>C</span>
                  <span className={"lf-" + this.state.lfCnum55}>R</span>
                  <span className={"lf-" + this.state.lfCnum56}>I</span>
                  <span className={"lf-" + this.state.lfCnum57}>P</span>
                  <span className={"lf-" + this.state.lfCnum58}>T</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum53}>G</span>
                  <span className={"lf-" + this.state.lfCnum54}>R</span>
                  <span className={"lf-" + this.state.lfCnum55}>A</span>
                  <span className={"lf-" + this.state.lfCnum56}>P</span>
                  <span className={"lf-" + this.state.lfCnum57}>H</span>
                  <span className={"lf-" + this.state.lfCnum58}>I</span>
                  <span className={"lf-" + this.state.lfCnum59}>C</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum64}>I</span>
                  <span className={"lf-" + this.state.lfCnum63}>C</span>
                  <span className={"lf-" + this.state.lfCnum62}>O</span>
                  <span className={"lf-" + this.state.lfCnum61}>N</span>
                  <span className={"lf-" + this.state.lfCnum60}>S</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum60}>C</span>
                  <span className={"lf-" + this.state.lfCnum59}>S</span>
                  <span className={"lf-" + this.state.lfCnum58}>S</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum51}>L</span>
                  <span className={"lf-" + this.state.lfCnum52}>A</span>
                  <span className={"lf-" + this.state.lfCnum53}>Y</span>
                  <span className={"lf-" + this.state.lfCnum54}>O</span>
                  <span className={"lf-" + this.state.lfCnum55}>U</span>
                  <span className={"lf-" + this.state.lfCnum56}>T</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum49}>I</span>
                  <span className={"lf-" + this.state.lfCnum50}>N</span>
                  <span className={"lf-" + this.state.lfCnum51}>T</span>
                  <span className={"lf-" + this.state.lfCnum52}>E</span>
                  <span className={"lf-" + this.state.lfCnum53}>R</span>
                  <span className={"lf-" + this.state.lfCnum54}>F</span>
                  <span className={"lf-" + this.state.lfCnum55}>A</span>
                  <span className={"lf-" + this.state.lfCnum56}>C</span>
                  <span className={"lf-" + this.state.lfCnum57}>E</span>
                </span>
                <span className="word">
                  <span className={"lf-" + this.state.lfCnum58}>C</span>
                  <span className={"lf-" + this.state.lfCnum59}>A</span>
                  <span className={"lf-" + this.state.lfCnum60}>M</span>
                  <span className={"lf-" + this.state.lfCnum61}>E</span>
                  <span className={"lf-" + this.state.lfCnum62}>R</span>
                  <span className={"lf-" + this.state.lfCnum63}>O</span>
                  <span className={"lf-" + this.state.lfCnum64}>N</span>
                </span>
              </div>
            </div>
          </div>

          <div className="left-rear">
            <div className="left-rear-content">
              <div className="left-rear-text">
                <span className="word">CAMERON</span>
                <span className="word">SOFTWARE</span>
                <span className="word">UI</span>
                <span className="word">DESIGN</span>
                <span className="word">HTML</span>
                <span className="word">JAVASCRIPT</span>
                <span className="word">GRAPHIC</span>
                <span className="word">ICONS</span>
                <span className="word">CSS</span>
                <span className="word">LAYOUT</span>
                <span className="word">INTERFACE</span>
              </div>
            </div>
          </div>

          <div className="right-front">
            <div className="right-front-content">
              <div className="right-front-text">
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum1}>S</span>
                  <span className={"rf-" + this.state.rfCnum2}>O</span>
                  <span className={"rf-" + this.state.rfCnum3}>F</span>
                  <span className={"rf-" + this.state.rfCnum4}>T</span>
                  <span className={"rf-" + this.state.rfCnum5}>W</span>
                  <span className={"rf-" + this.state.rfCnum6}>A</span>
                  <span className={"rf-" + this.state.rfCnum7}>R</span>
                  <span className={"rf-" + this.state.rfCnum8}>E</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum9}>R</span>
                  <span className={"rf-" + this.state.rfCnum10}>E</span>
                  <span className={"rf-" + this.state.rfCnum11}>A</span>
                  <span className={"rf-" + this.state.rfCnum12}>C</span>
                  <span className={"rf-" + this.state.rfCnum13}>T</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum14}>U</span>
                  <span className={"rf-" + this.state.rfCnum15}>S</span>
                  <span className={"rf-" + this.state.rfCnum16}>E</span>
                  <span className={"rf-" + this.state.rfCnum1}>R</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum2}>J</span>
                  <span className={"rf-" + this.state.rfCnum3}>A</span>
                  <span className={"rf-" + this.state.rfCnum4}>V</span>
                  <span className={"rf-" + this.state.rfCnum5}>A</span>
                  <span className={"rf-" + this.state.rfCnum6}>S</span>
                  <span className={"rf-" + this.state.rfCnum7}>C</span>
                  <span className={"rf-" + this.state.rfCnum8}>R</span>
                  <span className={"rf-" + this.state.rfCnum9}>I</span>
                  <span className={"rf-" + this.state.rfCnum10}>P</span>
                  <span className={"rf-" + this.state.rfCnum11}>T</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum2}>G</span>
                  <span className={"rf-" + this.state.rfCnum3}>R</span>
                  <span className={"rf-" + this.state.rfCnum4}>A</span>
                  <span className={"rf-" + this.state.rfCnum5}>P</span>
                  <span className={"rf-" + this.state.rfCnum6}>H</span>
                  <span className={"rf-" + this.state.rfCnum7}>I</span>
                  <span className={"rf-" + this.state.rfCnum8}>C</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum9}>I</span>
                  <span className={"rf-" + this.state.rfCnum10}>C</span>
                  <span className={"rf-" + this.state.rfCnum11}>O</span>
                  <span className={"rf-" + this.state.rfCnum12}>N</span>
                  <span className={"rf-" + this.state.rfCnum13}>S</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum14}>C</span>
                  <span className={"rf-" + this.state.rfCnum15}>S</span>
                  <span className={"rf-" + this.state.rfCnum16}>S</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum2}>L</span>
                  <span className={"rf-" + this.state.rfCnum3}>A</span>
                  <span className={"rf-" + this.state.rfCnum4}>Y</span>
                  <span className={"rf-" + this.state.rfCnum5}>O</span>
                  <span className={"rf-" + this.state.rfCnum6}>U</span>
                  <span className={"rf-" + this.state.rfCnum7}>T</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum8}>I</span>
                  <span className={"rf-" + this.state.rfCnum9}>N</span>
                  <span className={"rf-" + this.state.rfCnum10}>T</span>
                  <span className={"rf-" + this.state.rfCnum11}>E</span>
                  <span className={"rf-" + this.state.rfCnum12}>R</span>
                  <span className={"rf-" + this.state.rfCnum13}>F</span>
                  <span className={"rf-" + this.state.rfCnum14}>A</span>
                  <span className={"rf-" + this.state.rfCnum15}>C</span>
                  <span className={"rf-" + this.state.rfCnum16}>E</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum1}>C</span>
                  <span className={"rf-" + this.state.rfCnum2}>A</span>
                  <span className={"rf-" + this.state.rfCnum3}>M</span>
                  <span className={"rf-" + this.state.rfCnum4}>E</span>
                  <span className={"rf-" + this.state.rfCnum5}>R</span>
                  <span className={"rf-" + this.state.rfCnum6}>O</span>
                  <span className={"rf-" + this.state.rfCnum7}>N</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum8}>C</span>
                  <span className={"rf-" + this.state.rfCnum9}>H</span>
                  <span className={"rf-" + this.state.rfCnum10}>I</span>
                  <span className={"rf-" + this.state.rfCnum11}>L</span>
                  <span className={"rf-" + this.state.rfCnum12}>T</span>
                  <span className={"rf-" + this.state.rfCnum13}>O</span>
                  <span className={"rf-" + this.state.rfCnum14}>N</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum15}>U</span>
                  <span className={"rf-" + this.state.rfCnum16}>I</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum1}>U</span>
                  <span className={"rf-" + this.state.rfCnum2}>X</span>
                </span>
                <span className="word">
                  <span className={"rf-" + this.state.rfCnum3}>D</span>
                  <span className={"rf-" + this.state.rfCnum4}>E</span>
                  <span className={"rf-" + this.state.rfCnum5}>S</span>
                  <span className={"rf-" + this.state.rfCnum6}>I</span>
                  <span className={"rf-" + this.state.rfCnum7}>G</span>
                  <span className={"rf-" + this.state.rfCnum8}>N</span>
                </span>
              </div>
            </div>
          </div>

          <div className="right-rear">
            <div className="right-rear-content">
              <div className="right-rear-text">
                <span className="word">ICONS</span>
                <span className="word">CSS</span>
                <span className="word">LAYOUT</span>
                <span className="word">INTERFACE</span>
                <span className="word">CAMERON</span>
                <span className="word">CHILTON</span>
                <span className="word">UI</span>
                <span className="word">UX</span>
                <span className="word">DESIGN</span>
                <span className="word">REACT</span>
                <span className="word">CSS</span>
                <span className="word">HTML</span>
                <span className="word">USER</span>
                <span className="word">JAVASCRIPT</span>
              </div>
            </div>
          </div>

          <WorkL1 clickSample={this.clickSample} />

          <WorkL2 clickSample={this.clickSample} />

          <WorkR1 clickSample={this.clickSample} />

          <WorkR2 clickSample={this.clickSample} />

          <WorkInfo
            workTitle={this.state.workTitle}
            workImg={this.state.workImg}
            workDesc={this.state.workDesc}
            workTech={this.state.workTech}
            workUrl={this.state.workUrl}
            workInst={this.state.workInst}
            showModal={this.showModal}
          />

        </div>

        <Modal
          header={modalInfo.header}
          bodyMsg={modalInfo.bodyMsg}
          closeModal={Modal}
          options={modalInfo.options}
        />

      </>
    );
  }
}

HomePage.propTypes = {
  workTitle: string,
  workImg: string,
  workDesc: string,
  workTech: string,
  workUrl: string,
  workInst: string,
  Modal: object,
  closeCtbModal: func,
};

export default HomePage;
