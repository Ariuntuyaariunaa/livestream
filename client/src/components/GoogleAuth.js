import React, { Component } from "react"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "843198720260-fudbfdavhcjvs0cljcsd7j23ka7mfelp.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red goggle button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui blue goggle button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}
export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)
