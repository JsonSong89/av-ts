import Vue from 'vue'

export {Component} from './src/core'
export {Lifecycle} from './src/lifecycle'
export {Prop, p} from './src/prop'
export {Render} from './src/render'
export {Transition} from './src/transition'
export {Watch} from './src/watch'
export {Data} from './src/data'
export {Mixin, Trait} from './src/functions'

export type CreateElement = typeof Vue.prototype.$createElement
export { Vue }
