import React from "react";
import {Field, reduxForm} from "redux-form";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"
import {Box, Typography} from "@material-ui/core";


const LoginForm = ({handleSubmit, error}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} component={"input"}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
      </div>
      <div className={style.error}>
        {error}
      </div>
      <div>
        <button>
          Login
        </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: "Login"})(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe,);
  }
  if (props.isAuth) {
    return <Redirect to={"/profile"}/>;
  }
  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <LoginReduxForm onSubmit={onSubmit}/>
    </Box>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)
