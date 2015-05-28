var React = require('react');
var _ = require('underscore');

var NowPlaying = require('./now-playing.jsx');
var Tracklist = require('./tracklist.jsx');
var InfoPanel = require('./info-panel.jsx');

var MainPanel = React.createClass({
  propTypes: {
    full: React.PropTypes.object.isRequired,
  },
  render: function() {
    return <div className="main-panel">
      <InfoPanel mopidy={this.props.full.mopidy} tracklist={this.props.full.tracklist} local={this.props.full.localFiles}/>
      <NowPlaying state={this.props.full.state} mopidy={this.props.full.mopidy} current={this.props.full.current}/>
    </div>
  },
});

module.exports = MainPanel;       
