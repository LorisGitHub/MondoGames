import Home from './components/home/Home.svelte'
import Map from './components/map/MapPage.svelte'
import Leaderboard from './components/leaderboards/LeaderboardPage.svelte'
import Profil from './components/user/ProfilPage.svelte'
import Guild from './components/user/GuildPage.svelte'
import MyGames from './components/user/MyGamesPage.svelte'
import Achievements from './components/user/AchievementsPage.svelte'
import MyEvents from './components/user/MyEventsPage.svelte'
import Shop from './components/shop/ShopPage.svelte'
import ShopItem from './components/shop/ShopItemPage.svelte'
import Signin from './components/login/SigninPage.svelte'
import Signout from './components/login/SignoutPage.svelte'
import NotFound from './components/NotFound.svelte'
import Event from './components/events/EventItemPage.svelte'
import Friends from './components/friends/FriendsPage.svelte'
import FriendChat from './components/friends/FriendChatPage.svelte'

export default {

    '/': Home,
    '/map': Map,
    '/event': Event,
    '/friends': Friends,
    '/friend': FriendChat,
    '/leaderboard': Leaderboard,
    '/shop': Shop,
    '/shop/item': ShopItem,
    '/signin': Signin,
    '/signout': Signout,

    // Lateral menu pages
    '/profil': Profil,
    '/guild': Guild,
    '/myGames': MyGames,
    '/achievements': Achievements,
    '/myEvents': MyEvents,

    // Catch-all, must be last
    '*': NotFound,
}
