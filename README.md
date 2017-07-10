# Emoji Helper (Moon Edition)

An Emoji cheat sheet extension for Pale Moon, also a Bookmarklet.


## Development

Since nowadays most browsers allow plugins to be written in HTML/CSS/JS, it is very easy to build a cross-browser extension, especially when you're not interested in low-level browser functionality.

### Building

The build process is done through Gulp. Each submodule (`palemoon`, `bookmarklet`) has its own `Gulpfile` which takes care of building the corresponding extension build, e.g. copying required shared resources from the `shared` folder. 

The generated files are located in the `build` folders. To load the build folder into the browser, do the following:


#### Pale Moon

A good introduction to the Mozilla Add-on SDK is https://developer.mozilla.org/Add-ons/SDK/Tutorials/Getting_started

```bash
$ cd palemoon
$ gulp build
$ cd build
$ jpm xpi
```

#### Bookmarklet

```bash
$ cd bookmarklet
$ gulp dev
$ open test.html
```

`gulp dev` will start a server to deliver the bookmarklet. You can test/debug the bookmarklet using test.html.
