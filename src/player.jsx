var SidePanel = React.createClass({
    render: function() {
        var menuNodes = this.props.data.map(function(menu) {
            return (
                <Header key={menu.header} body={menu.body}>{menu.header}</Header>
            );
        });
        return (
            <div className="side-panel">
                <Search />
                {menuNodes}
            </div>
        );
    }
});

var Search = React.createClass({
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
            <form className="search" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="search" ref="search"/>
            </form>
        );
    }
});

var Header = React.createClass({
    render: function() {
        var menuItems = this.props.body.map(function(item) {
            return (
                <Body key={item}>{item}</Body>
            );
        });
        return (
            <div className="header">
                {this.props.children}
                {menuItems}
            </div>
        );
    }
});

var Body = React.createClass({
    render: function() {
        return (
            <div className="body">
                {this.props.children}
            </div>
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
    <SidePanel data={menu}/>,
    document.getElementById('side-panel')
);

var MainPanel = React.createClass({
    render: function() {
        return (
            <div className="main-panel">
                <InfoPanel />
                <NowPlaying />
            </div>
        );
    }
});

var InfoPanel = React.createClass({
    render: function() {
        return (
            <div className="info-panel">
                [insert info panel stuff here]
            </div>
        );
    }
});
var NowPlaying = React.createClass({
    render: function() {
        return (
            <div className="now-playing">
                <LoadingBar />
                <Button type="back"/><Button type="play"/><Button type="forw"/>
            </div>
        );
    }
});

var LoadingBar = React.createClass({
    render:function() {
        return (
            <div className="loading">
                =========================
            </div>
        );
    }
});

var Button = React.createClass({
    render:function() {
        return (
            <div className="button">
                {this.props.type}
            </div>
        );
    }
});
React.render(
    <MainPanel />,
    document.getElementById('main-panel')
);
