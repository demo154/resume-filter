import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD} from './types';
import { tokenConfig } from './auth';

//GET_LEADS
export const getLeads = () => (dispatch, getState) => {
    axios
        .get("/api/leads/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data

            });
        })
        .catch(err => dispatch(returnErrors
        (err.response.data, err.response.status)));

};
//DELETE_LEADS
export const deleteLead = id => (dispatch, getState) => {
    axios
        .delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteLead: "LEAD DELETED" }));
            dispatch({
                type: DELETE_LEAD,
                payload: id

            });
        })
        .catch(err => console.log(err));
};
//ADD_LEAD
export const addLead = lead => (dispatch, getState) => {
    axios
        .post("/api/leads/", lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: "LEAD ADDED" }));
            dispatch({
                type: ADD_LEAD,
                payload: res.data

            });
        })
        .catch(err => dispatch(returnErrors
        (err.response.data, err.response.status)));

};