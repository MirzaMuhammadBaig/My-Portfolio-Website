import * as React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from './CopyRight';

export default function MainSlide() {

  return (
    <>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="card text-bg-primary mb-3 col-4" style={{ "max-width": "18rem;" }}>
            <div class="card-header">SIGN IN</div>
            <div class="card-body">
              <h5 class="card-title">Sign In Your Self.</h5>
              <p class="card-text"><span>Already have an account </span>
                <Link to="/signin" className='text-white' variant="body2">
                  Sign In
                </Link></p>
            </div>
          </div>
          <div class="card text-bg-secondary mb-3 col-4" style={{ "max-width": "18rem;" }}>
            <div class="card-header">SIGN UP</div>
            <div class="card-body">
              <h5 class="card-title">Sign Up Your Self.</h5>
              <p class="card-text"><span>Create A New Account </span>
                <Link to="/signup" className='text-white' variant="body2">
                  Sign Up
                </Link></p>
            </div>
          </div>
          <div class="card text-bg-success mb-3 col-4" style={{ "max-width": "18rem;" }}>
            <div class="card-header">Logout</div>
            <div class="card-body">
              <h5 class="card-title">Logout Your Self.</h5>
              <p class="card-text"><span>Leave This Site </span>
                <Link to="/logout" className='text-white' variant="body2">
                  Logout
                </Link></p>
            </div>
          </div>
          <div class="card text-bg-danger mb-3 col" style={{ "max-width": "18rem;" }}>
            <div class="card-header">Forgot Password</div>
            <div class="card-body">
              <h5 class="card-title">Alter Your Password</h5>
              <p class="card-text">
                <Link to="/resetpass" className='text-white' variant="body2">
                  Forgot Password
                </Link></p>
            </div>
          </div>
          <div class="card text-bg-warning mb-3 col" style={{ "max-width": "18rem;" }}>
            <div class="card-header">Set Password</div>
            <div class="card-body">
              <h5 class="card-title">Set Your New Password</h5>
              <p class="card-text">
                <Link to="/resetpass/set-pass" className='text-black' variant="body2">
                  Set Password
                </Link></p>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
}