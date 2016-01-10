var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"Babelify"}, {"id":2,"text":"Watchify"},{"id":3,"text":"BrowserSync"},{"id":4,"text":"Bootstrap"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

				return (
					<div>
						<ul>{listItems}</ul>
					</div>);
    }
});

module.exports = List;
