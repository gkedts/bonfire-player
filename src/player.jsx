var React = require('react');
var Mopidy = require('mopidy');
var _ = require('underscore');

var SidePanel = require('./side-panel.jsx');
var MainPanel = require('./main-panel.jsx');
var Tracklist = require('./tracklist.jsx');
var Track = require('./track.jsx');

var MopidyPlayer = React.createClass({
  getInitialState: function() {
    var mopidy = new Mopidy({
      webSocketUrl: "ws://localhost:6680/mopidy/ws/",
      autoConnect: false,
    });
    mopidy.on('state:online', () => {
      this.setState({connected: true});
      mopidy.playback.getCurrentTrack().done(
        track => this.setState({nowPlaying: track}));
      mopidy.playback.getState().done(
        state => this.setState({state: state}));
      mopidy.tracklist.getTlTracks().done(
        tlTracks => this.setState({tracklist: tlTracks}));
      mopidy.library.browse(uri="local:directory").done(
        folder => this.setState({localFile: folder}));
    });
    mopidy.on('state:offline', () => this.setState({connected: false}));
    mopidy.on('event:playbackStateChanged',
      event => this.setState({state: event.new_state}));
    mopidy.on('event:trackPlaybackEnded',
      event => this.setState({nowPlaying: null}));
    mopidy.on('event:trackPlaybackStarted',
      event => this.setState({nowPlaying: event.tl_track.track}));
    mopidy.on('event:tracklistChanged',
      () => mopidy.tracklist.getTlTracks().done(
        tlTracks => this.setState({tracklist: tlTracks})));
    //TODO:
    // event:trackPlaybackPaused
    //event:trackPlaybackResumed
    //event:volumeChanged
    //event:optionsChanged
    //event:playlistsLoaded

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
      return <div className="loading">loading...</div>;
    }
    else {
      return <div>
        <SidePanel data={menu} />
        <MainPanel full={this.state} />
      </div>
    }
  },
});

var menu = [ 
  {header: "browse", body: ["local files","blah"]},
  {header: "playlists", body: ["playlist1","blahblah"]}
];

React.render(
  <MopidyPlayer />,
  document.body
);

