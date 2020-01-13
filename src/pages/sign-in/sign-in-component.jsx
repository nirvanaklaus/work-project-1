import React from 'react';
import {withRouter} from 'react-router-dom';

class SignIn extends React.Component{
constructor(props){
    super(props);

    this.state = {
        signInEmail: '',
        signInPassword: '',
    }
}

onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
}

onPasswordChange = (event) => {
    this.setState({signInPassword:  event.target.value})
 }

onSubmitSignIn = () => {
  console.log(this.state);
  console.log(this.props.users);

  this.props.users.map(b => {
    if (this.state.signInEmail === b.email && this.state.signInPassword === b.password){
      this.setState({success: true})
      this.props.history.push("/");
}
}
)
}

render(){
    return (
        <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange = {this.onEmailChange}                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange = {this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
              	onClick = {this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p>Don't have an account?<span 
              className="f6 link dim black db pointer dib b ph3 pv2">Sign Up!</span></p>
            </div>
          </div>
        </main>
      </article>
    )
}
}

export default  withRouter(SignIn);