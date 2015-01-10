/*
 * tailog - tail your logs in the browser
 * Copyright (c) 2015 Ahmed Refat (@ahmdrefat), Whitespace.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var Link = require('../common/Link');

var Navbar = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div className="navbar-top" role="navigation">
        <div className="container">
          <Link className="navbar-brand row" to="/">
            <h1>tailog</h1>
          </Link>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Navbar;
