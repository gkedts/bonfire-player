var React = require('react');
var _ = require('underscore');

var SidePanel = React.createClass({
  render: function() {
    var menuNodes = _.map(this.props.data, menu => {
      var menuItems = _.map(menu.body,
        item => <div key={item} className="body">{item}</div>
      );  
      return <div key={menu.header} className="header">
        {menu.header}
        {menuItems}
      </div>
    }); 
    return <div className="side-panel">
      <Search />
      {menuNodes}
    </div>
  }
});

var Search = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var search = React.findDOMNode(this.refs.search).value.trim();
    if (!search) {
      return;
    }   
    React.findDOMNode(this.refs.search).value = ''; 
    return;
  },  
  render: function() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="(currently broken)" ref="search"/>
        </form>
    );  
  }
});

module.exports = SidePanel;
