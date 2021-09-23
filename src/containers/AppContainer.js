
// import {connect} from 'react-redux'
// import App from '../components/App';
// import getCountryList from '../actions/actionGet';
// import CountriesDropdown from '../components/getCountries';


// // const mapStateToProps = state => ({
// //   getSelectedValue: state.event.selectValue,
// // });

// const mapStateToProps = (state) => {
//     return {
//       result: state.event.result,
//       error: state.event.error,
//     };
//   };
//   const mapsDispatchToProps = (dispatch) => ({
//     getCountryList: (name) => dispatch(getCountryList(name))
//   });

// export default connect(mapStateToProps,mapsDispatchToProps)(CountriesDropdown);




import {connect} from 'react-redux'
import App from '../components/App';
import getCountryList from '../actions/actionGet';
import CountriesDropdown from '../components/getCountries';
import { bindActionCreators } from 'redux';

function  mapStateToProps (state)  {
    return {
      result: state.result,
      error: state.event.error,
    };
  };

  function mapsDispatchToProps(dispatch){
      return(
          bindActionCreators({
            getCountryList: (name) => dispatch(getCountryList(name))
          })
      )
   
  };
  export default connect(mapStateToProps,mapsDispatchToProps)(CountriesDropdown);
 
//   export default connect(mapStateToProps)(App);