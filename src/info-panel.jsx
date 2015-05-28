var React = require('react');
var _ = require('underscore');

var Tracklist = require('./tracklist.jsx');
var FileBrowser = require('./file-browser.jsx');

var InfoPanel = React.createClass({
  propTypes: {
    tracklist: React.PropTypes.arrayOf(
      React.PropTypes.object),
    state: React.PropTypes.string,
    mopidy: React.PropTypes.object.isRequired,
    local: React.PropTypes.arrayOf(
      React.PropTypes.object),
  },
  render: function() {
    return <div className="info-panel">
      <FileBrowser local={this.props.local} mopidy={this.props.mopidy}/>
      <Tracklist tracklist={this.props.tracklist} mopidy={this.props.mopidy}/>
    </div>
  },
});

module.exports = InfoPanel;
