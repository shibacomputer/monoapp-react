var Preact = require('preact')

Component.prototype = Object.create(Preact.Component.prototype)

function withReact (state, emitter, app) {
  app._mount = (tree, newTree) => Preact.render(newTree, tree)
  app._render = (tree, newTree) => Preact.render(newTree, tree)
  Component.prototype.global = state
  Component.prototype.emit = function () {
    emitter.emit.apply(emitter, arguments)
  }
}

function Component (props) {
  Preact.Component.call(this, props)
}

module.exports = withReact
module.exports.Component = Component
