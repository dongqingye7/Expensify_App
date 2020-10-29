import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
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
