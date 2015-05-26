var PlayPause= React.createClass({
  render: function() {
    var button;
    if (this.props.state == "playing") {
      playbutton = <div className="button">▮▮</div>
    }
    else {
      playbutton = <div className="button">▶</div>
    }
    return (
      <div className="play-pause">
        {playbutton}
      </div>
    );
  }
});

React.render(
  <PlayPause />,
  document.getElementById('main-panel')
);
