import React, {Component} from 'react';
//import './Download.css';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import AboutS from '../Components/AboutS';
// import MediaQuery from 'react-responsive';
class Download extends Component {

  render() {

    return (

      <div className="conatiner d-felx">

         <Section1/>                         {/*  this is the first section   */}

         <Section2/>
         
          <Section3/>

          <AboutS/>



      </div>

    );

  }

}

export default Download;
