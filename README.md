# JSX Templates

### Installation

`meteor add utilities:jsxtemplates`

### Concept

One of the major concerns of newcomers to React is how it mixes HTML and JavaScript, which harms separation of concerns. The typical use case being working with a designer who suddenly has to understand JavaScript to modify even the simplest template. 

This can be alleviated by using stateless components (which should only contain minimal logic), but even so there is still some JavaScript boilerplate involved (function declaration, return statement, etc.):

```js
function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}
```

This package defines a new `.jsxt` (JSX Template) extension for use within Meteor projects. When Meteor detects a `.jsxt` file at build time, it will:

1. Take the file's content.
2. Insert it as the return value of a stateless component with the same name as the file.

In other words, the previous component could be rewritten as a file called `HelloMessage.jsxt` with the following contents: 

```html
<div>Hello {props.name}</div>;
```

Note: the `props` argument is always named “props”.

#### Isn't This Just Like Blaze?

No! Blaze uses the Spacebars templating language. This is still plain old JSX. It's basically exactly what you have in your component already, except with the function declaration removed. 

### Questions

- Would this be useful?
- How would we specify `propTypes` and `defaultProps`?
- Should we implement destructuring so you're able to write `{name}` instead of `{props.name}`?
- Do we need to handle context?
