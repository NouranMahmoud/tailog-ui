/*
 * tailog - tail your logs in the browser
 * Copyright (c) 2015 Ahmed Refat (@ahmdrefat), Whitespace.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* global jest, describe, it, expect */

'use strict';

jest.dontMock('../Navbar');

describe('Navbar', function() {

  it('sets class name', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    var Navbar = require('../Navbar');
    var Component = TestUtils.renderIntoDocument(React.createElement(Navbar));

    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'navbar-top');
    expect(element).toBeDefined();
  });

});
