import React from 'react';
import {withRouter} from 'react-router-dom';

class Register extends React.Component{
constructor(props){
    super(props);

    this.state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }
    }
  
  
    onFirstNameChange = (event) => {
      this.setState({firstName: event.target.value})
    }

    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value})
      }  
  
    onEmailChange = (event) => {
      this.setState({email: event.target.value})
    }
  
    onPasswordChange = (event) => {
      this.setState({password:  event.target.value})
    }

    onSubmitSignUp = () => {
      console.log(this.state);
      console.log(this.props.users);
      this.props.users.push(
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        }
        )
        console.log(this.props.users);
      this.props.history.push("/");
      }

render(){
    return (
        <div>
      <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={this.onFirstNameChange}                />
              </div>

                            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={this.onLastNameChange}                />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
              	onClick = {this.onSubmitSignUp}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              <p>Already have an account?<span 
              className="f6 link dim black db pointer dib b ph3 pv2">Sign In</span></p>
            </div>
          </div>
        </main>
      </article>
        </div>
    )
}
}

export default withRouter(Register);