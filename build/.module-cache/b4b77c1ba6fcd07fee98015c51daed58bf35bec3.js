var SidePanel = React.createClass({displayName: "SidePanel",
    render: function() {
        var menuNodes = this.props.data.map(function(menu) {
            return (
                React.createElement(Header, {key: menu.header, body: menu.body}, menu.header)
            );
        });
        return (
            React.createElement("div", {className: "side-panel"}, 
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

var MainPanel = React.createClass({displayName: "MainPanel",
    render: function() {
        return (
            React.createElement("div", {className: "main-panel"}, 
                React.createElement(InfoPanel, null), 
                React.createElement(NowPlaying, null)
            )
        );
    }
});

var InfoPanel = React.createClass({displayName: "InfoPanel",
    render: function() {
        return (
            React.createElement("div", {className: "info-panel"}, 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit magna, ultrices sit amet lacus a, varius iaculis lacus. Integer non luctus odio. Vestibulum porttitor diam a sapien suscipit efficitur. Nunc sagittis elit sit amet diam aliquam venenatis. Fusce vel massa felis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas viverra efficitur ante. Donec eu maximus mi, quis fermentum enim. Duis at consequat lorem. Praesent et posuere felis. Maecenas dignissim in ante sed molestie. Vivamus a orci nunc. Quisque accumsan quis odio ac tincidunt. Donec sed scelerisque lectus, a egestas purus. Sed varius neque odio, a posuere lacus convallis molestie. Aenean congue ligula quis diam laoreet, eu venenatis enim laoreet. Phasellus eget felis sit amet risus feugiat consequat. Vivamus cursus nulla in nunc dignissim cursus. Quisque sodales elit eu felis facilisis, eget mattis ipsum condimentum."
            )
        );
    }
});
var NowPlaying = React.createClass({displayName: "NowPlaying",
    render: function() {
        return (
            React.createElement("div", {className: "now-playing"}, 
                "A herp-da-derpy-derp"
            )
        );
    }
});

React.render(
    React.createElement(MainPanel, null),
    document.getElementById('main-panel')
);
