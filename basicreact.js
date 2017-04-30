//Attaches myList variable contents to 'app' id 

var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
var myList = (
	<ul>
    <li>Dogs</li>
    <li>Cats</li>
    <li>Birds</li>
    </ul>
);

ReactDOM.render(myList, document.getElementById('app'));
