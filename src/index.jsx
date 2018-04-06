// tell the library what to render, which is our greeting and the required root node.
// you need a , after the last div, because it's list of things React is rendering I guess?

ReactDOM.render(
  <div>
    <h1>Help Queue</h1>
    <h2>{new Date().toLocaleTimeString()}</h2>
    <h3>3a</h3>
    <h3>Thato and Haley</h3>
    <p><em>Firebase will not save record!</em></p>
  </div>,
  document.getElementById('react-app-root')
);
