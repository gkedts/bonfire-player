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
                React.createElement(Header, {key: menu.header, body: menu.body}, menu.header)
            );
        });
        return (
            React.createElement("div", {className: "header"}, 
                menuNodes
            )
        );
    }
});

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
            React.createElement("div", {className: "header"}, 
                this.props.children, 
                React.createElement(Body, null)
            )
        );
    }
});

var Body = React.createClass({displayName: "Body",
    render: function() {
        return (
            React.createElement("div", {className: "body"}, 
                this.props.body
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
    {header: "browse", body: "local files"},
    {header: "playlists", body: "playlist1"}
];

React.render(
    React.createElement(SidePanel, {data: menu}),
    document.getElementById('side-panel')
);
