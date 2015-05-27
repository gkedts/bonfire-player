var React = require('react');
var _ = require('underscore');

var Track = require('./track.jsx');

var Tracklist = React.createClass({
  propTypes: {
    tracklist: React.PropTypes.arrayOf(
      React.PropTypes.object),
    mopidy: React.PropTypes.object.isRequired,
  },  

  render: function () {
    if (this.props.tracklist) {
      var tracks = _.map(this.props.tracklist,
        track => <div className="track" key={track.tlid}>
          <Track track={track.track} key={track.track.name} />
          <div className="track-buttons" key={track.tlid}> 
            <div className="play" onClick={
                () => this.props.mopidy.playback.play(track)}>▶
            </div>
            <div className="remove" onClick={
                () => this.props.mopidy.tracklist.remove({'tlid':[track.tlid]})}>☒</div>
          </div>
        </div>);
      return <div className="tracklist">
        {tracks}
      </div>;

    } else {
      return <div className="tracklist">
        [nothing queued]
      </div>;
    }   
  },  
});

module.exports = Tracklist;
