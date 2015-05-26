var Mopidy = require("mopidy");
var React = require("react");
var JQuery = require("jquery");

var PlayPause = React.createClass({
  propTypes: {
    state: React.PropTypes.string,
    mopidy: React.PropTypes.object.isRequired,
  },

  render: function() {
    var button;
    if (this.props.state == "playing") {
      playbutton = <div className="button" onClick={
        () => this.props.mopidy.playback.pause()}>▮▮</div>;
    }
    else {
      playbutton = <div className="button" onClick={
        () => this.props.mopidy.playback.play()}>▶</div>;
    };
    return <div className="play-pause">
      {playbutton}
    </div>
  }
});

var MopidyPlayer = React.createClass({
  getInitialState: function() {
    var mopidy = new Mopidy({
      webSocketUrl: "ws://redox.mit.edu/mopidy/ws/",
      autoConnect: false,
    });
    mopidy.on(console.log.bind(console));
    mopidy.on("state:online", () => {
      this.setState({connected: true});
      mopidy.playback.getCurrentTrack().done(
        track => this.setState({nowPlaying: track}));
      mopidy.playback.getState().done(
        state => this.setState({state: state}));
      mopidy.tracklist.getTlTracks().done(
        tlTracks => this.setState({tracklist: tlTracks}));
    });
    mopidy.on('state:offline', () => this.setState({connected: false}));
    mopidy.on('event:playbackStateChanged',
      event => this.setState({state: event.new_state}));
    mopidy.on('event:trackPlaybackEnded',
      event => this.setState({nowPlaying: null}));
    mopidy.on('event:trackPlaybackStarted',
      event => this.setState({nowPlaying: event.tl_track.track}));

    window.mopidy = mopidy;
    mopidy.connect();
    return {
      connected: false,
      state: null,
      currentTrack: null,
      tracklist: null,
      mopidy: mopidy,
    };
  },

  render: function () {
    if (!this.state.connected) {
      return <div className="play-pause">loading...</div>
    }
    else {
      return <div>
        <PlayPause state={this.state.state} mopidy={this.state.mopidy} />
      </div>
    }
  },
});

React.render(
  <MopidyPlayer />,
  document.getElementById('main-panel')
);
