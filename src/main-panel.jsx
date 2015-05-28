var React = require('react');
var _ = require('underscore');

var NowPlaying = require('./now-playing.jsx');
var Tracklist = require('./tracklist.jsx');
var InfoPanel = require('./info-panel.jsx');

var MainPanel = React.createClass({
  propTypes: {
    current: React.PropTypes.object,
    tracklist: React.PropTypes.arrayOf(
      React.PropTypes.object),
    state: React.PropTypes.string,
    mopidy: React.PropTypes.object.isRequired,
  },
  render: function() {
    return <div className="main-panel">
      <InfoPanel state={this.props.state} mopidy={this.props.mopidy} tracklist={this.props.tracklist} current={this.props.current}/>
      <NowPlaying state={this.props.state} mopidy={this.props.mopidy} tracklist={this.props.tracklist} current={this.props.current}/>
    </div>
  },
});

module.exports = MainPanel;       
