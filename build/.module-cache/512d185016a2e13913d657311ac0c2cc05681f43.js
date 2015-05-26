var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        return (
            React.createElement("div", {className: "sidePanel"}, 
                "/*", React.createElement(Search, {header: "search"}), "*/", 
                React.createElement(SideItem, {header: "browse"}, "File Browser")
            )
        );
    }
});

/*var Search = React.createClass({
    render: function() {
        return (
            <div className="header">
                {this.props.header}
            </div>
        );
    }
});*/

var SideItem = React.createClass({displayName: "SideItem",
    render: function() {
        return (
            React.createElement("div", {className: "header"}, 
                this.props.header
            )
 /*           <div className="body">
                <BodyItem type="browser">{this.props.children}</BodyItem>
            </div>*/
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
