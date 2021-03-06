import React from "react";
import { connect } from 'react-redux';
import getCountryList from '../actions/actionGet';
import CommonDropDown from './common/commonDropDown';

class CountriesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: [],
      countries: [],
      selectCountry: '',
    };
  }
  componentDidMount() {
    this.setCountries(this.props.Content.regionDropDown[0].ability.name);
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps.result !== nextProps.result) {
      return {
        countries: nextProps.result,
        selectCountry: nextProps.name,
      };
    }
    return null;
  }
  setCountries(name) {
    this.props.getCountryList(name);
    if (this.props.result) {
      this.setState({
        countries: this.props.result,
      })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-20" style={{ textAlign: "center" }}>
          <CommonDropDown id="regionDropDown" label={this.props.Content.regionDropdownLabel}
            handleOnChange={(name) => this.setCountries(name)}
            dropdownList={this.props.Content.regionDropDown} />
          <br />
          <CommonDropDown label={this.props.Content.countryDropdownLabel} id="countryDropDown" dropdownList={this.props.result} />
        </div>
        <br />
        <br />
        {this.props.error && <p style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Something went wrong. </p>}
      </div >

    )
  }
}

export default CountriesDropdown;