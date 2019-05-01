# Navigator

A minimal, anchor-hash-based tab navigation library for small websites.

## Motivation

While there are many great front-end routers and frameworks, I hate JS so much that overcoming the
difficultues of setting up webpack and build pipeline is the worst nightmare I can imagine.

Instead, I decided to write a custom, small library that can be included to any website
via `<script>` tag and easily extended / modified to be compatible with any CSS framework.

The usage is simple: create a html file with all of the pages that can be opened,
create `Navigator` object with ids of these pages and let it do the rest.
See [the example](example.html) that pretty much goes through everything 
you need to know to use this thing, including some customization possibilities.

### Note on browser compatibility
The library uses ES6 syntax and will not work on old browsers, 
but I don't care about them and you likely shouldn't care too - 
[95% of Internet users already have browsers that support ES6](https://caniuse.com/#feat=es6).
