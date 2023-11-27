/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
import { get } from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ViewPropTypes } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class Header extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      orientation: 'portrait'
    };
  }


  render() {
    const {
      style,
    } = this.props;
    const { orientation } = this.state;
  

    return (
      <View>
          <View ref={c => (this._root = c)} {...this.props} />
      </View>
    );
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledHeader = connectStyle(
  'NativeBase.Header',
  {},
  mapPropsToStyleNames
)(Header);
export { StyledHeader as Header };
