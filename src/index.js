// call React to invoke the React library and use the createElement method which is native to React. It takes takes 3 args: type fo element, props or properties of the element, and children fo the element.

// to keep code DRY, we establish a new variable, app, which creates a div with both elements as args. Then we render just app. Otherwise, you need to .render() both variables separately.


var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");

var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

// tell the library what to render, which is our greeting and the required root
// node.

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
