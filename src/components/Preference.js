import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { isAuthenticated } from '../utils/auth';
import notify from '../utils/notification';

const Preference = () => {


    const { id } = isAuthenticated().user;
    const [username, setUsername] = useState('');
    const [preference, setPreference] = useState('');
    const [loading, setLoading] = useState(false);
    const [didRedirect, setDidRedirect] = useState(false);

    const {user} = isAuthenticated();

    const getUsername = () => {
        const url = `${process.env.REACT_APP_LIVE}/auth/username`;
        const data = {
            id: id
        }
        axios.post(url, data).then(result => {
            console.log(result.data.username);
            setUsername(result.data.username);
        }).catch(err => {
            console.log(err);
        });
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const onChangePreference = async (e) => {
        await setPreference(e.target.value);
    }

    useEffect(() => {
        getUsername();
    }, []);

    const onNext = async (e) => {
        e.preventDefault();
        if (preference == '') {
            notify('Select a preference');
        }else{
            await setLoading(true);
            const url = `${process.env.REACT_APP_LIVE}/auth/user/update`;
            const data = {
                id: id,
                category: preference
            }
            axios.post(url, data).then(result=>{
                setDidRedirect(true);
            }).catch(err=>{
                notify('Something went wrong');
            })
        }
    }


    const performRedirect = () => {
        if (user && user.role=='customer' && didRedirect) {
            return <Redirect to="/user/home" />;
        }
    }

    return (
        <div className="auth-wrapper">
            {performRedirect()}
            {loadingMessage()}
            <div className="auth-inner p-5">
                <div className="row justify-content-center">
                    <i className="fas fa-hamburger fa-4x mb-2 mx-2 text-warning"></i>
                </div>
                <h3>Welcome <span style={{ textTransform: 'capitalize' }}>{username}!</span></h3>


                <div className="form-group" onChange={onChangePreference}>
                    <label><b>Choose a preference<span className="ml-2" style={{ color: 'red' }}>*</span></b></label>
                    <br />

                    <div className="row justify-content-between px-4">
                        <div>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="veg" value="veg" />
                            <label class="form-check-label" for="veg">Veg</label>
                        </div>
                        <div>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="non-veg" value="non-veg" />
                            <label class="form-check-label" for="non-veg">Non-Veg</label>
                        </div>
                        <div>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="both" value="both" />
                            <label class="form-check-label" for="both">Both</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={onNext}>Next</button>

            </div>
        </div>
    )
}

export default Preference;