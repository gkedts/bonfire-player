var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        return (
            React.createElement("div", {className: "sidePanel"}, 
                React.createElement(Header, null, "browse"), 
                React.createElement(Body, null, "local files")
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
React.render(
    React.createElement(SidePanel, null),
    document.getElementById('side-panel')
);
