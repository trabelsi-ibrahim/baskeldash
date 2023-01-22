import React, { Component } from 'react'
import './login_signup.scss'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Adresse mail: </label>
          <input
            type="email"
            className="form-control"
            placeholder="Entrez email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe: </label>
         
          <input
            type="password"
            className="form-control"
            placeholder="Entrez mot de passe"
            id="password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}