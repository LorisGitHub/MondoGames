import Home from './components/home/Home.svelte'
import Map from './components/map/MapPage.svelte'
import Leaderboard from './components/leaderboards/LeaderboardPage.svelte'
import Shop from './components/shop/ShopPage.svelte'
import ShopItem from './components/shop/ShopItemPage.svelte'
import Wild from './components/Wild.svelte'
import NotFound from './components/NotFound.svelte'
import Friends from './components/friends/Friends.svelte'

export default {

    // Exact path
    '/': Home,
    '/map': Map,
    '/friends': Friends,
    '/leaderboard': Leaderboard,
    '/shop': Shop,
    '/shop/item': ShopItem,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/wild': Wild,
    '/wild/*': Wild,

    // Catch-all, must be last
    '*': NotFound,
}
