# Stateless-Templates

(Note: this is obviously a W.I.P. Readme-driven development!)

One of the major concerns of newcomers to React is how it mixes HTML and JavaScript, which harms separation of concerns. The typical use case being working with a designer who suddenly has to understand JavaScript to modify even the simplest template. 

This can be alleviated by using stateless components (which should only contain minimal logic), but even so there is still some JavaScript boilerplate involved (function declaration, return statement, etc.):

```js
function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}
```

This package defines a new `.jst` (JavaScript Template) extension for use within Meteor projects. When Meteor detects a `.jst` file at build time, it will:

1. Take the file's content.
2. Insert it as the return value of a stateless component with the same name as the file.

In other words, the previous component could be rewritten as a file called `HelloMessage.jst` with the following contents: 

```js
<div>Hello {props.name}</div>;
```
