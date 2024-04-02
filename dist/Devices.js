"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Devices = function Devices(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 17 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.69032 3.58702V1.12097C2.69032 0.501874 3.19219 0 3.81129 0H15.021C15.64 0 16.1419 0.501873 16.1419 1.12097V7.84677C16.1419 8.46586 15.64 8.96773 15.021 8.96773H11.5922L11.8106 10.1323C11.8675 10.4359 11.6346 10.7164 11.3258 10.7164H7.50643C7.19761 10.7164 6.96474 10.4359 7.02166 10.1323L7.24002 8.96773H6.27741V11.6082C6.27741 12.186 5.809 12.6544 5.23118 12.6544H1.04624C0.468416 12.6544 0 12.186 0 11.6082V4.63326C0 4.05544 0.468416 3.58702 1.04624 3.58702H2.69032ZM6.27741 8.07096V4.63326C6.27741 4.05544 5.809 3.58702 5.23118 3.58702H3.58709V1.12097C3.58709 0.997148 3.68747 0.896773 3.81129 0.896773H15.021C15.1448 0.896773 15.2451 0.997148 15.2451 1.12097V7.84677C15.2451 7.97058 15.1448 8.07096 15.021 8.07096H6.27741ZM7.88462 9.90934L8.06118 8.96773H10.7711L10.9476 9.90934H7.88462ZM1.2151 4.16266C0.938962 4.16266 0.715104 4.38652 0.715104 4.66266V11.45C0.715104 11.7262 0.938961 11.95 1.2151 11.95H5.08221C5.35835 11.95 5.58221 11.7262 5.58221 11.45V4.66266C5.58221 4.38652 5.35835 4.16266 5.08221 4.16266H1.2151Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Devices;