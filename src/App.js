import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import SlideCarousel from "./components/SlideCarousel";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Navbar />
        <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
        <SlideCarousel />
        <Routes>
          <Route index path="/" element={ <News setProgress={this.setProgress} key='business' pageSize={9} countryName="us" newsCategory="business" /> } />
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key='entertainment' pageSize={9} countryName="us" newsCategory="entertainment" /> } />
          <Route exact path="/general" element={ <News setProgress={this.setProgress} key='general' pageSize={9} countryName="us" newsCategory="general" /> } />
          <Route exact path="/science" element={ <News setProgress={this.setProgress} key='science' pageSize={9} countryName="us" newsCategory="science" /> } />
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} key='sports' pageSize={9} countryName="us" newsCategory="sports" /> } />
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} key='technology' pageSize={9} countryName="us" newsCategory="technology" /> } />
          
          {/* <Route index element={<News setProgress={this.setProgress} />} /> */}
          {/* <Route exact path='about' element={<about />} />
          <Route exact path='contact' element={<contact />} />
          <Route exact path='feedback' element={<feedback />} /> */}
        </Routes>
      </>
    );
  }
}
export default App;
