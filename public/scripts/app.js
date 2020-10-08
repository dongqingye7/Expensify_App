"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require("./components/IndecisionApp");

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

require("normalize.css/normalize.css");

require("./styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, { options: ["Read a book", "Workout", "Learn code"] }), document.getElementById("app"));

// const user = {
//   name: "Dongqing Ye",
//   age: 22,
//   location: "Texas",
// };
// const app_info = {
//   title: "React Practice",
//   subtitle: "Author: Grace",
//   options: [],
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }

// const template = (
//   <div>
//     <h1>{app_info.title}</h1>
//     <p>This is JSX from app.js</p>
//     <p>{app_info.subtitle}</p>
//     {getLocation(user.location)}
//     <li>{user.name ? user.name : "Anonymous"}</li>
//   </div>
// );

// let count = 0;
// const addOne = () => {
//   count += 1;
//   renderApp();
// };

// const minusOne = () => {
//   count -= 1;
//   renderApp();
// };

// const resetCount = () => {
//   count = 0;
//   renderApp();
// };

// const appRoot = document.getElementById("app");

// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
//   if (option) {
//     app_info.options.push(option);
//     e.target.elements.option.value = "";
//   }
//   renderApp();
// };

// const onMakeDecision = () =>{
//     const randomNum = Math.floor(Math.random() * app_info.options.length);
//     const option = app_info.options[randomNum];
//     alert(option);
// }

// let visibility = false;

// const toogleVisibility = () => {
//     if (visibility){
//         visibility = false;
//         renderApp();
//     }else{
//         visibility = true;
//         renderApp();
//     }
// }

// const renderApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id="my-button" className="buttonClass" onClick={addOne}>
//         +1
//       </button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetCount}>reset</button>

//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//       {app_info.options.map((option) => {
//         return <li key ={option} >{option}</li>;
//       })}

//       <button onClick={onMakeDecision} disabled = {app_info.options.length == 0}>What should I do?</button>
//       <button onClick = {toogleVisibility}>
//         {visibility ? "Hide detail" : "Show detail"}
//       </button>
//       {visibility && (<p>this is detail</p>)}
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderApp();
