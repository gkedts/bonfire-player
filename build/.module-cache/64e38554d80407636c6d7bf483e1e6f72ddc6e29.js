var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        return (
            React.createElement("div", {className: "sidePanel"}, 
                "side panel"
            )
        );
    }
});
React.render(
    React.createElement(SidePanel, null),
    document.getElementById('side-panel')
);
