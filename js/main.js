import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './../components/menu';
import SimpleSlider from './../components/slider';
import Button from './../components/button';

ReactDOM.render(<Menu items={ ['Home', 'About', 'Strengths', 'Portfolio']} />, document.getElementById('menu'));

ReactDOM.render(<SimpleSlider />, document.getElementById('slider'));

ReactDOM.render(<Button text={"Email Me"} url={"mailto:hello.peter1994@gmail.com"} />, document.getElementById("button-email"));

ReactDOM.render(<Button text={"Check it out"} url={"http://23.96.102.186:8080/"} tab={true}/>, document.getElementById("button-prime"));
ReactDOM.render(<Button text={"View on GitHub"} url={"https://github.com/colemanator/PrimeNumberGraph"} tab={true}/>, document.getElementById("button-prime-git"));

ReactDOM.render(<Button text={"Check it out"} url={"http://23.96.102.186:3000/"} tab={true}/>, document.getElementById("button-astronomy"));
ReactDOM.render(<Button text={"View on GitHub"} url={"https://github.com/colemanator/AstronomyConditions"} tab={true}/>, document.getElementById("button-astronomy-git"));