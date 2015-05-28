var React = require('react');
var _ = require('underscore');

var Track = require('./track.jsx');

var FileBrowser = React.createClass({
  propTypes: {
    mopidy: React.PropTypes.object.isRequired,
    local: React.PropTypes.arrayOf(
      React.PropTypes.object),
  },  
  render: function() {
    if (this.props.local) {
      var folders = _.map(this.props.local, function(thing) {
        if (thing.type == "directory") {
          handleClick: () => {console.log('Hello!')}
          return <div className="folder" key={thing.uri}>
            <div className="folder-info" onClick={this.handleClick}>
              {thing.name}
            </div>
            {console.log(thing)}
          </div>
        } else {
          return <Track track={thing} key={thing.name} />
        }   
      }); 
      return <div className="file-browser">
        {folders}
      </div>
    } else {
      return <div className="file-browser">
        <div className="folder">
          <div className="folder-info">
            [no files to be found...]
          </div>
        </div>
      </div>
    }   
  },  
});

module.exports = FileBrowser;
