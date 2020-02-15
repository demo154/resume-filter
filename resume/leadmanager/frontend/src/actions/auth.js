import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { config } from 'react-transition-group';

//Check token & Load User
export const loadUser = () => (dispatch, getState) => {
    //User laoding
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};


//Login User
export const login = (username, password) => dispatch => {

    //Headers
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    };

    //Request Body
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};
// //Upload
// export const upload = document => (dispatch, getState) => {
//     axios
//         .post("/api/auth/upload/", lead, tokenConfig(getState))
//         .then(res => {
//             dispatch(createMessage({ addLead: "File added" }));
//             dispatch({
//                 type: ADD_FILE,
//                 payload: res.data

//             });
//         })
//         .catch(err => dispatch(returnErrors
//             (err.response.data, err.response.status)));

// };

// export const upload = document => dispatch => {
//     axios
//         .post("/api/upload/", submission)
//         .then(res => {
//             dispatch({
//                 type: ADD_SUBMISSION,
//                 payload: res.data
//             });
//         })
//         .catch(err => console.log(err));
// };

//Register User
export const register = ({ username, password, email }) => dispatch => {

    //Headers
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    };

    //Request Body
    const body = JSON.stringify({ username, email, password });

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

//Logout User 

export const logout = () => (dispatch, getState) => {

    axios.post('/api/auth/logout/', null, tokenConfig
        (getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,
                err.response.status));
        });
};

// Setup config with token - helper function

export const tokenConfig = getState => {
    //Get token from state
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }

    //If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;

} 