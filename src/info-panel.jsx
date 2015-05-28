var React = require('react');
var _ = require('underscore');

var Tracklist = require('./tracklist.jsx');
var FileBrowser = require('./file-browser.jsx');

var InfoPanel = React.createClass({
  propTypes: {
    tracklist: React.PropTypes.arrayOf(
      React.PropTypes.object),
    local: React.PropTypes.arrayOf(
      React.PropTypes.object),
    mopidy: React.PropTypes.object.isRequired,
  },
  render: function() {
    return <div className="info-panel">
      <FileBrowser mopidy={this.props.mopidy} local={this.props.local}/>
      <Tracklist tracklist={this.props.tracklist} mopidy={this.props.mopidy}/>
    </div>
  },
});

module.exports = InfoPanel;
