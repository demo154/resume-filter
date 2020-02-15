import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import files from './files';


export default combineReducers({
    leads,
    errors,
    messages,
    auth,
    files

});