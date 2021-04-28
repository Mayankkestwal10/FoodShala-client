import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <div className="row justify-content-center">
                            <i className="fas fa-hamburger fa-4x mb-2 mx-2 text-warning"></i>
                        </div>
                        <h3>Log In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            No account, <Link to="/user/register">Register here</Link>
                        </p>
                    </form>


                </div>
                <p className="text-center text-muted">&copy; FoodShala 2021</p>

            </div>
        </div>
    )
}

export default Login;