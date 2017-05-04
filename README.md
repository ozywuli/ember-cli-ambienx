# ember-cli-ambienx

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

---

This is Ember addon provides a wrapper for [Ambienx.js](https://github.com/ozywuli/ambienx). Use some background music to give your website or webapp some ambience.

## Installation

```bash
ember install ember-cli-ambienx
// or
npm install ember-cli-bg-music --save
// or
yarn add ember-cli-bg-music
```

## Setup

In your Ember app's config/environment.js file, define a property called `ambienx`. It accepts an object with key/values that correspond to all the options available in [Ambienx.js](https://github.com/ozywuli/ambienx).

For example:

```js
// config/environment.js
ambienx: {
    audioSrc: 'music.mp3',
    audioLoop: true,
    autoplay: false,
    enabledLoseFocus: true
}
``` 

Likewise, all [Ambienx.js](https://github.com/ozywuli/ambienx) methods are provided via a service called `serviceAmbienx`. This service by default is injected into all your components. If you want to use the `playAudio()` method, you can do so like this:

```js
this.get('serviceAmbienx').playAudio();
```
