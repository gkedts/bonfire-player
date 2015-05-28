var React = require('react');
var _ = require('underscore');

var Tracklist = require('./tracklist.jsx');

var InfoPanel = React.createClass({
  propTypes: {
    current: React.PropTypes.object,
    tracklist: React.PropTypes.arrayOf(
      React.PropTypes.object),
    state: React.PropTypes.string,
    mopidy: React.PropTypes.object.isRequired,
  },
  render: function() {
    return <div className="info-panel">
      <Tracklist tracklist={this.props.tracklist} mopidy={this.props.mopidy}/>
    </div>
  },
});

module.exports = InfoPanel;
