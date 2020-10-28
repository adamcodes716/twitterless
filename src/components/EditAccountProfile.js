import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccountProfileForm from './AccountProfileForm';

class EditAccountProfile extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
          <div>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">Edit Account Information</h1>
              </div>
            </div>
            <div className="content-container">
                <AccountProfileForm  />
              <button className="button button--secondary" >Remove Movie Review</button>
            </div>
          </div>
        );
      }
    };

EditAccountProfile.propTypes = {

};

export default EditAccountProfile;