var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        return (
            React.createElement("div", {className: "sidePanel"}, 
                React.createElement(SideItem, {header: "browse"}, "File Browser")
            )
        );
    }
});

var SideItem = React.createClass({displayName: "SideItem",
    render: function() {
        return (
            React.createElement("div", {className: "header"}, 
                this.props.header
            )
/*            <BodyItem type="browser">{this.props.children}</BodyItem>*/
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
