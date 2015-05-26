var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        return (
            React.createElement("div", {className: "sidePanel"}, 
                React.createElement(Header, null), 
                React.createElement(Body, null)
            )
        );
    }
});

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
            React.createElement("div", {className: "header"}, 
                "header"
            )
        );
    }
});

var Body = React.createClass({displayName: "Body",
    render: function() {
        return (
            React.createElement("div", {className: "body"}, 
                React.createElement(BodyItem, {type: "file"}, "File Browser")
            )
        );
    }
});

var BodyItem = React.createClass({displayName: "BodyItem",
    render: function() {
        return (
            React.createElement("div", {className: this.props.type}, 
                this.props.children
            )
        );
    }
});

React.render(
    React.createElement(SidePanel, null),
    document.getElementById('side-panel')
);
