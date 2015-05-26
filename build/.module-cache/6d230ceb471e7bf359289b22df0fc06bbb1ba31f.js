var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        var menuNodes = this.props.data.map(function(menu) {
            return (
                React.createElement(Header, {key: menu.header, body: menu.body}, menu.header)
            );
        });
        return (
            React.createElement("div", {className: "sidePanel"}, 
                menuNodes
            )
        );
    }
});

var Header = React.createClass({displayName: "Header",
    render: function() {
        var menuItems = this.props.body.map(function(item) {
            return (
                React.createElement(Body, {key: this.item}, this)
            );
        });
        return (
            React.createElement("div", {className: "header"}, 
                this.props.children, 
                menuItems
            )
        );
    }
});

var Body = React.createClass({displayName: "Body",
    render: function() {
        return (
            React.createElement("div", {className: "body"}, 
                this.props.key
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
    {header: "browse", body: ["local files","blah"]},
    {header: "playlists", body: ["playlist1","blahblah"]}
];

React.render(
    React.createElement(SidePanel, {data: menu}),
    document.getElementById('side-panel')
);
