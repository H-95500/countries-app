import axios from "axios";
import event_Types from './actionTypes/eventTypes'

const getCountryList = (name) => async (dispatch) => {
    await axios.get('https://pokeapi.co/api/v2/pokemon/' + name)

        .then((response) => {
            console.log("success", response.data);
            console.log(response)
            dispatch(SET_DROPDOWN_VALUES(response.data));
        })
        .catch((error) => {
            dispatch(SET_DROPDOWN_VALUES_ERROR(error));
            // alert(error);
        });
}

const SET_DROPDOWN_VALUES = (result) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES,
        payload: result.abilities,
    };
};

const SET_DROPDOWN_VALUES_ERROR = (error) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: true,
    }
}

export default getCountryList;