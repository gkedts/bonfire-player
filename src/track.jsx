var React = require('react');
var _ = require('underscore');

var React = require("react");
var _ = require("underscore");

var Track = React.createClass({
  propTypes: {
    track: React.PropTypes.object,
  },  

  render: function () {
    if (this.props.track != undefined) {
      var artists = _.without(_.union(
        _.map(this.props.track.artists, artist => artist.name),
        _.map(this.props.track.composers, composer => composer.name),
        _.map(this.props.track.album.artists, artist => artist.name)
      ), undefined, null);
      var renderedArtists = _.map(artists, 
        name => <div className="artist" key={name}>{name}</div>);
      return <div className="song-info">
        <div className="title">{this.props.track.name}</div>
        {renderedArtists}
        <div className="album">{this.props.track.album.name}</div>
      </div>;
    } else {
      return <div className="song-info">
        <div className="title">[no info to display]</div>
      </div>
    }
  },
});

module.exports = Track;
