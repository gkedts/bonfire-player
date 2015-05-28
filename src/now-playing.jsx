var React = require('react');
var _ = require('underscore');

var Track = require('./track.jsx');

var NowPlaying = React.createClass({
  propTypes: {
    state: React.PropTypes.string,
    current: React.PropTypes.object,
    mopidy: React.PropTypes.object.isRequired,
  },  

  render: function() {
    var playbutton;
    if (this.props.state == "playing") {
      playbutton = <div className="button" onClick={
        () => this.props.mopidy.playback.pause()}>▮▮</div>
   } else {
     playbutton = <div className="button" onClick={
        () => this.props.mopidy.playback.play()}>▶</div>;
  
    };  

    return <div className="now-playing">
      <div className="progress">
        ================================
      </div>
      <div className="controls">
        <div className="button" onClick={
          () => this.props.mopidy.playback.previous()}>◀▮</div>
        {playbutton}
        <div className="button" onClick={
          () => this.props.mopidy.playback.stop()}>◼</div>
        <div className="button" onClick={
          () => this.props.mopidy.playback.next()}>▮▶</div>
        <div className="button">∰</div>
        <div className="media-info">
            <div className="album-art" />
            <Track track={this.props.current} />
        </div>
      </div>
    </div>
  },  
});

module.exports = NowPlaying;
