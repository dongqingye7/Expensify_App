import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className = "box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__word">Wonderful for tracking your personal expenses</p>
      <button className='button button--login' onClick={startLogin}>Login with Google</button>
    </div>
    
  </div>
);

// export class LoginPage extends React.Component {

//   onClick = () => {
//     this.props.startLogin();
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onClick}>Login</button>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
