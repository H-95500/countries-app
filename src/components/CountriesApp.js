import React, { Component } from 'react';
import styles from '../styles/App.css'
import AppContainer from '../containers/AppContainer';
import MockContent from '../mock/countryRegionMock';


class CountriesApp extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className="widget">
        <h2 style={{ textAlign: "center" }}>{this.props.Content.heading}</h2>
        <div className="row">
          <form className="row g-3">
            <AppContainer Content={this.props.Content}/>
          </form>
        </div>
        </div>
        </div>
    );
  }
}
CountriesApp.defaultProps = { Content: MockContent }

export default CountriesApp;