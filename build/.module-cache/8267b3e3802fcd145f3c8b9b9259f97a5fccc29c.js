var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        var menuNodes = this.props.data.map(function(menu) {
            return (
                React.createElement(Header, {key: menu.header, body: menu.body}, menu.header)
            );
        });
        return (
            React.createElement("div", {className: "sidePanel"}, 
                React.createElement(Search, null), 
                menuNodes
            )
        );
    }
});

var Search = React.createClass({displayName: "Search",
    handleSubmit: function(e) {
        e.preventDefault();
        var search = React.findDOMNode(this.refs.search).value.trim();
        if (!search) {
            return;
        }
        React.findDomNode(this.refs.search).value = '';
        return;
    },
    render: function() {
        return (
            React.createElement("form", {className: "search", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "search", ref: "search"})
            )
        );
    }
});

var Header = React.createClass({displayName: "Header",
    render: function() {
        var menuItems = this.props.body.map(function(item) {
            return (
                React.createElement(Body, {key: item}, item)
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
    {header: "browse", body: ["local files","blah"]},
    {header: "playlists", body: ["playlist1","blahblah"]}
];

React.render(
    React.createElement(SidePanel, {data: menu}),
    document.getElementById('side-panel')
);
