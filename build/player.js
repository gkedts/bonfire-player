var PlayPause= React.createClass({displayName: "PlayPause",
  render: function() {
    var button;
    if (this.props.state == "playing") {
      playbutton = React.createElement("div", {className: "button"}, "▮▮")
    }
    else {
      playbutton = React.createElement("div", {className: "button"}, "▶")
    }
    return (
      React.createElement("div", {className: "play-pause"}, 
        playbutton
      )
    );
  }
});

React.render(
  React.createElement(PlayPause, null),
  document.getElementById('main-panel')
);
