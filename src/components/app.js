import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

export default class App extends Component {
  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="div-container">
        <div className="fullscreen blue-grey darken-3">
          <h1>Eitan Alkaslassy</h1>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
              <a className="btn-floating btn-large waves-effect waves-light light-blue lighten-2" id="button-down">
              <i className="material-icons arrow-down">keyboard_arrow_down</i>
              </a>
          </Link>
        </div>
        <Element name="about" className="fullscreen">
          <div className="fullscreen" id="about">
            test
          </div>
        </Element>
      </div>
    )
  }
}
