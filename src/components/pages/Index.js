/*
 * tailog - tail your logs in the browser
 * Copyright (c) 2015 Ahmed Refat (@ahmdrefat), Whitespace.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../layout/App');

var HomePage = React.createClass({

  statics: {
    layout: App
  },

  componentWillMount() {
    PageActions.set({title: 'tailog'});
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="container">
        <div className="row">
          <h2 className="text-center">Search Section</h2>
          <input type="text" className="form-control" placeholder="Search"></input>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = HomePage;
