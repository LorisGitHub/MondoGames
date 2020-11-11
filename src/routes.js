import Home from './components/home/Home.svelte'
import Map from './components/map/MapPage.svelte'
import Leaderboard from './components/leaderboards/LeaderboardPage.svelte'
import Profil from './components/user/ProfilPage.svelte'
import Shop from './components/shop/ShopPage.svelte'
import ShopItem from './components/shop/ShopItemPage.svelte'
import Signin from './components/login/SigninPage.svelte'
import Signout from './components/login/SignoutPage.svelte'
import NotFound from './components/NotFound.svelte'
import Event from './components/events/EventItemPage.svelte'
import Friends from './components/friends/FriendsPage.svelte'
import FriendChat from './components/friends/FriendChatPage.svelte'

export default {

    // Exact path
    '/': Home,
    '/map': Map,
    '/event': Event,
    '/friends': Friends,
    '/friend': FriendChat,
    '/leaderboard': Leaderboard,
    '/shop': Shop,
    '/shop/item': ShopItem,
    '/profil': Profil,
    '/signin': Signin,
    '/signout': Signout,

    // Catch-all, must be last
    '*': NotFound,
}
