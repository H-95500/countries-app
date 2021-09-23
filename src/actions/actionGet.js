import axios from "axios";
import event_Types from './actionTypes/eventTypes'

const getCountryList = (name) => async (dispatch) => {
    await axios
        .get('https://restcountries.eu/rest/v2/region/' + name)

        // axios({
        //     method: 'post',
        //     url: 'https://restcountries.eu/rest/v2/region/',
    
        // })
        
        .then(response => {
            console.log("success", response.data);
            dispatch(SET_DROPDOWN_VALUES(response.data));
        })
        .catch((error) => {
            dispatch(SET_DROPDOWN_VALUES_ERROR(error));
            alert(error);
        });
}

const SET_DROPDOWN_VALUES = (result) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES,
        payload: result
    }
}

const SET_DROPDOWN_VALUES_ERROR = (error) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: error
    }
}

export default getCountryList;