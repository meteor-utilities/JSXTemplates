# JSX Templates

This is a Meteor experiment to find a middle ground between pure React components and more familiar templating systems.

### Installation

`meteor add utilities:jsxtemplates`

### Demo

Here's [a fork of the Simple Todos example app](https://github.com/SachaG/simple-todos-react-jsxt) using JSX templates. 

### The “Problem”

One of the major concerns of React newcomers is how (unlike templating systems like Handlebars, Mustache, etc.) it makes it possible to mix view logic and controller logic. 

This can be alleviated by using the smart/dumb component strategy and, more recently, functional stateless components (FSC).

Even so there is still some JavaScript boilerplate involved (function declaration, return statement, etc.) preventing FSCs from being "pure" JSX:

```js
function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}
```

*Note: this may or may not be an actual problem. Again, this is more of an experiment*

### The Solution

This package defines a new `.jsxt` (JSX Templates) extension for use within Meteor projects. When Meteor detects a `.jsxt` file at build time, it will:

1. Take the file's JSX content.
2. Insert it as the return value of a stateless component with the same name as the file.
3. Destructure the props object. 
4. Preserve any "normal" JS code before and after the JSX block.

In other words, the previous component could be rewritten as a file called `HelloMessage.jsxt` with the following contents: 

```html
<div>Hello {props.name}</div>;
```

Note: the `props` argument is always named “props”.

### Adding JavaScript Code

You'll often need to add more code to your component to do things like declare `propTypes`, import modules, etc. 

You can do so in footer and header blocks above or below the main JSX block, as long as you don't use the `<` or `>` characters anywhere in these two blocks:

```html
var foo="bar";

<div>Hello {foo}</div>;

var bar = "foo";
```

### Common Questions

#### Isn't This Just Like A Templating Language?

No! This is still plain old JSX, without any `if` or `each`. It's basically exactly what you have in your component already, except with the function declaration removed. 

#### Is This Actually Useful?

Probably not. At the end of the day, you're introducing an extra layer of processing to your app and probably breaking linting/syntax highlighting just to save a few lines of code. 

Still, who knows, it might be useful to some?
