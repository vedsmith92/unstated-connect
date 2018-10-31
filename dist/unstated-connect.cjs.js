'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var unstated = require('unstated');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var connect = (function (containers) {
  return function (mapper) {
    return function (Component) {
      return function (props) {
        return React.createElement(
          unstated.Subscribe,
          { to: containers },
          function () {
            for (var _len = arguments.length, containers = Array(_len), _key = 0; _key < _len; _key++) {
              containers[_key] = arguments[_key];
            }

            return React.createElement(Component, _extends({}, props, mapper(containers)));
          }
        );
      };
    };
  };
});

module.exports = connect;
