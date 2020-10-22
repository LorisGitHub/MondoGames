import Home from './components/Home.svelte'
import Name from './components/Name.svelte'
import Wild from './components/Wild.svelte'
import NotFound from './components/NotFound.svelte'
import Friends from './components/Friends.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/friends': Friends,

    // Using named parameters, with last being optional
    '/hello/:first/:last?': Name,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/wild': Wild,
    '/wild/*': Wild,

    // Catch-all, must be last
    '*': NotFound,
}
