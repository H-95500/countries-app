import CountriesDropdown from '../components/getCountries';
import getCountryList from '../actions/actionGet';
import { connect } from "react-redux";
 
const mapStateToProps = (state) => { 
 
    return { 
        result: state.event.result, 
        error: state.event.error, 
    }; 
}; 
const mapDispatchProps = (dispatch) => ({ 
  getCountryList: (name) => dispatch(getCountryList(name)) 
}); 
export default connect(mapStateToProps, mapDispatchProps)(CountriesDropdown);