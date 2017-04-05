'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/css.js');

var _link = require('/Users/guillaumekolly/Documents/NextJS/guillaumekolly.com/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Theme = require('../components/layout/Theme');

var _HeadBloc = require('../components/layout/HeadBloc');

var _HeadBloc2 = _interopRequireDefault(_HeadBloc);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _FullBackground = require('../components/FullBackground');

var _FullBackground2 = _interopRequireDefault(_FullBackground);

var _MovingText = require('../components/MovingText');

var _MovingText2 = _interopRequireDefault(_MovingText);

var _TextTyped = require('../components/TextTyped');

var _TextTyped2 = _interopRequireDefault(_TextTyped);

var _config = require('../data/config');

var _config2 = _interopRequireDefault(_config);

var _socials = require('../data/socials');

var _socials2 = _interopRequireDefault(_socials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          socials = _props.socials;

      var meta = config.meta.index;

      return _react2.default.createElement(
        'div',
        { className: container },
        _react2.default.createElement(_HeadBloc2.default, { title: meta.title, description: meta.description, keywords: meta.keywords }),
        _react2.default.createElement(_FullBackground2.default, null),
        _react2.default.createElement(_Menu2.default, { links: socials, style: _Theme._verticalMenu }),
        _react2.default.createElement(_MovingText2.default, { beforetext: 'Hi, I\'m ',
          movingtext: 'Guillaume Kolly',
          aftertext: '.',
          style: movingText }),
        _react2.default.createElement(
          _TextTyped2.default,
          { style: texttyped },
          'I\u2019m a ',
          _react2.default.createElement(
            'strong',
            null,
            'Full Stack Developer'
          ),
          ' born & raised in the French Alps, but I\u2019m currently living in Lyon - France. I\u2019m fluent in Node / Meteor / JS / React, but I\u2019m recently started experimenting with GraphQL, Redux and Webpack. You can discover',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/resume' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'my resume here'
            )
          ),
          '. Do not hezitate to ',
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/contact' },
            _react2.default.createElement(
              'a',
              { className: _Theme._tag },
              'contact me'
            )
          ),
          '.',
          _react2.default.createElement('br', null),
          'PS: This website is made with NextJS / ReactJS / Glamor.'
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        socials: _socials2.default,
        config: _config2.default
      };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var texttyped = (0, _css.css)({
  width: '598px',
  position: 'absolute',
  right: '10%',
  fontSize: '1.1em',
  lineHeight: '1.8em',
  letterSpacing: '-0.3px',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 4em + 3.2em)',
  color: _Theme.theme.colors.black,
  '@media(max-width: 1240px)': {
    fontSize: '1em',
    width: '467px',
    top: 'calc(30% + 4em + 4em)'
  },
  '@media(max-width: 640px)': {
    width: '280px',
    top: 'calc(30% + 2em)'
  }
});

var movingText = {
  background: (0, _css.style)({
    height: 'calc(100vh)',
    width: 'calc(100vw - 55px)',
    position: 'absolute',
    top: '0',
    left: '50px',
    fontFamily: _Theme.theme.font.title
  }),
  beforetext: (0, _css.style)({
    position: 'absolute',
    fontSize: '15em',
    right: '28.6%',
    letterSpacing: '-0.07em',
    top: '30%',
    color: _Theme.theme.colors.almost_white,
    '@media(max-width: 1240px)': { fontSize: '10em', top: '34%', right: '40%' },
    '@media(max-width: 640px)': { fontSize: '8em', top: '21%', right: '20%' },
    '@media(max-width: 440px)': { display: 'none' }
  }),
  fixedtitle: (0, _css.style)({
    position: 'absolute',
    fontSize: '6em',
    right: '10%',
    top: '30%',
    letterSpacing: '-6px',
    '@media(max-width: 640px)': { top: '10%' }
  }),
  movingtitle: (0, _css.style)({
    color: _Theme.theme.colors.black,
    letterSpacing: '-6px',
    '@media(max-width: 1240px)': { fontSize: '0.8em' },
    '@media(max-width: 640px)': { fontSize: '0.47em', letterSpacing: '-4px' }
  }),
  movingtitlebackground: _Theme.theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80'
  }
};

var container = (0, _css.css)({
  height: '100vh',
  width: '100vw',
  position: 'relative'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29uZmlnIiwic29jaWFscyIsIm1ldGEiLCJpbmRleCIsImNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIm1vdmluZ1RleHQiLCJ0ZXh0dHlwZWQiLCJDb21wb25lbnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ0b3AiLCJjb2xvciIsImNvbG9ycyIsImJsYWNrIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImxlZnQiLCJmb250RmFtaWx5IiwiZm9udCIsImJlZm9yZXRleHQiLCJhbG1vc3Rfd2hpdGUiLCJkaXNwbGF5IiwiZml4ZWR0aXRsZSIsIm1vdmluZ3RpdGxlIiwibW92aW5ndGl0bGViYWNrZ3JvdW5kIiwicHJpbWFyeSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeCIsInRyYW5zZm9ybV9tb3VzZV9wb3NfeSIsInNoYWRvd19tb3VzZV9wb3NfeCIsInNoYWRvd19tb3VzZV9wb3NfeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBV1c7QUFBQSxtQkFDcUIsS0FBS0EsS0FEMUI7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxPQURULFVBQ1NBLE9BRFQ7O0FBRVAsVUFBTUMsT0FBT0YsT0FBT0UsSUFBUCxDQUFZQyxLQUF6Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdDLFNBQWhCO0FBQ0UsNERBQVUsT0FBT0YsS0FBS0csS0FBdEIsRUFBNkIsYUFBYUgsS0FBS0ksV0FBL0Ms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LEtBSFg7QUFJVEMsd0JBQW9CO0FBSlg7QUFuQ00sQ0FBbkI7O0FBMkNBLElBQU1uQyxZQUFZLGNBQUk7QUFDcEJvQixVQUFRLE9BRFk7QUFFcEJiLFNBQU8sT0FGYTtBQUdwQkMsWUFBVTtBQUhVLENBQUosQ0FBbEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2d1aWxsYXVtZWtvbGx5L0RvY3VtZW50cy9OZXh0SlMvZ3VpbGxhdW1la29sbHkuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzLCBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyB0aGVtZSwgX3RhZywgX3ZlcnRpY2FsTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lJ1xuaW1wb3J0IEhlYWRCbG9jIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRCbG9jJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZ1bGxCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbEJhY2tncm91bmQnXG5pbXBvcnQgTW92aW5nVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL01vdmluZ1RleHQnXG5pbXBvcnQgVGV4dFR5cGVkIGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dFR5cGVkJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RhdGEvY29uZmlnJ1xuaW1wb3J0IHNvY2lhbHMgZnJvbSAnLi4vZGF0YS9zb2NpYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvY2lhbHM6IHNvY2lhbHMsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc29jaWFscyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGEgPSBjb25maWcubWV0YS5pbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxuICAgICAgICA8SGVhZEJsb2MgdGl0bGU9e21ldGEudGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhLmRlc2NyaXB0aW9ufSBrZXl3b3Jkcz17bWV0YS5rZXl3b3Jkc30gLz5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kIC8+XG4gICAgICAgIDxNZW51IGxpbmtzPXtzb2NpYWxzfSBzdHlsZT17X3ZlcnRpY2FsTWVudX0gLz5cbiAgICAgICAgPE1vdmluZ1RleHQgYmVmb3JldGV4dD1cIkhpLCBJJ20gXCJcbiAgICAgICAgICAgICAgICAgICAgbW92aW5ndGV4dD1cIkd1aWxsYXVtZSBLb2xseVwiXG4gICAgICAgICAgICAgICAgICAgIGFmdGVydGV4dD1cIi5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bW92aW5nVGV4dH0gLz5cbiAgICAgICAgPFRleHRUeXBlZCBzdHlsZT17dGV4dHR5cGVkfT5cbiAgICAgICAgICBJ4oCZbSBhIDxzdHJvbmc+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3N0cm9uZz4gYm9ybiAmIHJhaXNlZFxuICAgICAgICAgIGluIHRoZSBGcmVuY2ggQWxwcywgYnV0IEnigJltIGN1cnJlbnRseSBsaXZpbmcgaW4gTHlvbiAtIEZyYW5jZS5cbiAgICAgICAgICBJ4oCZbSBmbHVlbnQgaW4gTm9kZSAvIE1ldGVvciAvIEpTIC8gUmVhY3QsIGJ1dCBJ4oCZbSByZWNlbnRseVxuICAgICAgICAgIHN0YXJ0ZWQgZXhwZXJpbWVudGluZyB3aXRoIEdyYXBoUUwsIFJlZHV4IGFuZCBXZWJwYWNrLiBZb3UgY2FuIGRpc2NvdmVyXG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9yZXN1bWVcIj48YSBjbGFzc05hbWU9e190YWd9Pm15IHJlc3VtZSBoZXJlPC9hPjwvTGluaz4uXG4gICAgICAgICAgRG8gbm90IGhleml0YXRlIHRvIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17X3RhZ30+Y29udGFjdCBtZTwvYT48L0xpbms+LlxuICAgICAgICAgIDxici8+UFM6IFRoaXMgd2Vic2l0ZSBpcyBtYWRlIHdpdGggTmV4dEpTIC8gUmVhY3RKUyAvIEdsYW1vci5cbiAgICAgICAgPC9UZXh0VHlwZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgdGV4dHR5cGVkID0gY3NzKHtcbiAgd2lkdGg6ICc1OThweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzEwJScsXG4gIGZvbnRTaXplOiAnMS4xZW0nLFxuICBsaW5lSGVpZ2h0OiAnMS44ZW0nLFxuICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgdGV4dEFsaWduOiAnanVzdGlmeScsXG4gIHRleHRKdXN0aWZ5OiAnaW50ZXItd29yZCcsXG4gIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgMy4yZW0pJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy5ibGFjayxcbiAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7XG4gICAgZm9udFNpemU6ICcxZW0nLFxuICAgIHdpZHRoOiAnNDY3cHgnLFxuICAgIHRvcDogJ2NhbGMoMzAlICsgNGVtICsgNGVtKScsXG4gIH0sXG4gICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7XG4gICAgd2lkdGg6ICcyODBweCcsXG4gICAgdG9wOiAnY2FsYygzMCUgKyAyZW0pJyxcbiAgfSxcbn0pXG5cbmNvbnN0IG1vdmluZ1RleHQgPSB7XG4gIGJhY2tncm91bmQ6IHN0eWxlKHtcbiAgICBoZWlnaHQ6ICdjYWxjKDEwMHZoKScsXG4gICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gNTVweCknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICc1MHB4JyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICB9KSxcbiAgYmVmb3JldGV4dDogc3R5bGUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRTaXplOiAnMTVlbScsXG4gICAgcmlnaHQ6ICcyOC42JScsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3ZW0nLFxuICAgIHRvcDogJzMwJScsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy5hbG1vc3Rfd2hpdGUsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDEyNDBweCknOiB7IGZvbnRTaXplOiAnMTBlbScsIHRvcDogJzM0JScsIHJpZ2h0OiAnNDAlJyB9LFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiA2NDBweCknOiB7IGZvbnRTaXplOiAnOGVtJywgdG9wOiAnMjElJywgcmlnaHQ6ICcyMCUnIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDQ0MHB4KSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gIH0pLFxuICBmaXhlZHRpdGxlOiBzdHlsZSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZm9udFNpemU6ICc2ZW0nLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICB0b3A6ICczMCUnLFxuICAgIGxldHRlclNwYWNpbmc6ICctNnB4JyxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyB0b3A6ICcxMCUnIH0sXG4gIH0pLFxuICBtb3Zpbmd0aXRsZTogc3R5bGUoe1xuICAgIGNvbG9yOiB0aGVtZS5jb2xvcnMuYmxhY2ssXG4gICAgbGV0dGVyU3BhY2luZzogJy02cHgnLFxuICAgICdAbWVkaWEobWF4LXdpZHRoOiAxMjQwcHgpJzogeyBmb250U2l6ZTogJzAuOGVtJywgfSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogNjQwcHgpJzogeyBmb250U2l6ZTogJzAuNDdlbScsIGxldHRlclNwYWNpbmc6ICctNHB4Jyx9LFxuICB9KSxcbiAgbW92aW5ndGl0bGViYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMucHJpbWFyeSxcbiAgYW5pbWF0aW9uOiB7XG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc194OiAnLTEwMCcsXG4gICAgdHJhbnNmb3JtX21vdXNlX3Bvc195OiAnLTEwMCcsXG4gICAgc2hhZG93X21vdXNlX3Bvc194OiAnLTcwJyxcbiAgICBzaGFkb3dfbW91c2VfcG9zX3k6ICc4MCcsXG4gIH1cbn1cblxuY29uc3QgY29udGFpbmVyID0gY3NzKHtcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KVxuIl19