var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        return (
            React.createElement("div", {className: "sidePanel"}, 
                React.createElement(SideMenu, {data: this.props.data})
            )
        );
    }
});

var SideMenu = React.createClass({displayName: "SideMenu",
    render: function() {
        var menuNodes = this.props.data.map(function(menu) {
            return (
                React.createElement(Header, {key: menu.header}, menu.header)
            );
        });
        return (
            React.createElement("div", {className: "sideMenu"}, 
                menuNodes
            )
        );
    }
});

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
            React.createElement("div", {className: "header"}, 
                this.props.children
            )
        );
    }
});

var Body = React.createClass({displayName: "Body",
    render: function() {
        return (
            React.createElement("div", {className: "body"}, 
                this.props.children
            )
        );
    }
});

/*var BodyItem = React.createClass({
    render: function() {
        return (
            <div className={this.props.type}>
                {this.props.children}
            </div>
        );
    }
});
*/

var menu = [
    {header: "browse", body: ["local files", "spotify"]},
    {header: "playlists", body: ["playlist1", "playlist2"]}
];

React.render(
    React.createElement(SidePanel, {data: menu}),
    document.getElementById('side-panel')
);
