import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_FILES, DELETE_FILE, ADD_FILE } from './types';
import { tokenConfig } from './auth';

//GET_FILES
export const getFiles = () => (dispatch, getState) => {
    axios
        .get("/api/files/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_FILES,
                payload: res.data

            });
        })
        .catch(err => dispatch(returnErrors
            (err.response.data, err.response.status)));

};
//DELETE_FILES
export const deleteFile = id => (dispatch, getState) => {
    axios
        .delete(`/api/files/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteFile: "FILE DELETED" }));
            dispatch({
                type: DELETE_FILE,
                payload: id

            });
        })
        .catch(err => console.log(err));
};
//ADD_FILE
export const addFile = (document) => dispatch => {

    //Headers
    const config = {
        headers: {
            'content-Type': 'multipart/form-data'
        }
    };
    const body = multipart / form - data.stringify({ document });

    axios
        .post("/api/files/", body, config)
        .then(res => {

            dispatch(createMessage({ addFile: "FILE ADDED" }));
            dispatch({
                type: ADD_FILE,
                payload: res.data

            });

        })
        .catch(err => dispatch(returnErrors
            (err.response.data, err.response.status)));

};