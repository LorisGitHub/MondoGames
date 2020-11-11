<script lang="ts">
    import { onMount } from 'svelte';
    import { games, friends, events, profil } from './stores';
    import routes from './routes'
    import Router from 'svelte-spa-router'
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
    import Drawer, {Content, Header, Scrim} from '@smui/drawer';
    import List, {Item, Text} from '@smui/list';

    let backUrl = 'http://88.125.48.25:60001';
    let myDrawer;
    let myDrawerOpen = false;

    let profil_ = null;
    let isLogged: Boolean = false;

    onMount(() => {
        const profilStorage = localStorage.getItem('profil');
        if(profilStorage != null){
            profil.set(JSON.parse(profilStorage));
        }

        getAllGames();
        getAllUsers();
        getAllEvents();

        const subscription = profil.subscribe(value => {
            if(value){
                profil_ = value;
                isLogged = true;
            }
        });
    });

    function getAllGames(){
        const resGames = fetch(`${backUrl}/open/Game/getAllGames`, {
            'content-encoding': 'gzip, compress, br'
        }).then(value => {
            value.json().then(data => {
                games.set(data);
            })
        }, reason => {
            console.log('error while getting games');
        });
    }

    function getAllUsers(){
        const resUsers = fetch(`${backUrl}/open/MondoUser/getAllUsers`, {
            'content-encoding': 'gzip, compress, br'
        }).then(value => {
            value.json().then(data => {
                friends.set(data);
            })
        }, reason => {
            console.log('error while getting users');
        });
    }

    function getAllEvents(){
        const resEvents = fetch(`${backUrl}/open/Event/getAllEvents`, {
            'content-encoding': 'gzip, compress, br'
        }).then(value => {
            value.json().then(data => {
                data.forEach(event => {
                    event.address = JSON.parse(event.address);
                })
                events.set(data);
            })
        }, reason => {
            console.log('error  while getting events');
        });
    }

    function openDrawer(){
        if(isLogged){
            myDrawerOpen = !myDrawerOpen;
        } else {
            console.log(isLogged);
        }
    }

    function setActive(value) {
        myDrawerOpen = false;
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
        });
    }

</script>

<div class="top-app-bar-container flexor">
    <Drawer variant="modal" style="width: 80%; background: #292a2b" bind:this={myDrawer} bind:open={myDrawerOpen}>
        <Header class="flex-center p-0 mt-30">
            {#if profil_}
                <img class="round-border m-0" width="100px" src="{profil_.profilePicture}"/>
            {/if}
        </Header>
        <Content>
            <List class="mt-20">
                <Item style="border-bottom: 1px solid white" href="#/profil" on:click={() => setActive('profile')}>
                    <Text class="white">My profile</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="#/myGames" on:click={() => setActive('games')}>
                    <Text class="white">My games</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="javascript:void(0)" on:click={() => setActive('friends')}>
                    <Text class="white">My friends</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="#/map" on:click={() => setActive('events')}>
                    <Text class="white">My events</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="#/guild" on:click={() => setActive('groups')}>
                    <Text class="white">My guild</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="#/achievements" on:click={() => setActive('achievements')}>
                    <Text class="white">My achievements</Text>
                </Item>
            </List>
        </Content>
    </Drawer>
    <Scrim/>
    <TopAppBar variant="static" color='primary'>
        <Row>
            <Section>
                <IconButton on:click={() => openDrawer()} class="material-icons m-0">menu</IconButton>
                <Title>Mondo Games</Title>
            </Section>
            <Section align="end" toolbar>
                <IconButton class="material-icons m-0" aria-label="Download">search</IconButton>
                {#if !isLogged}
                    <IconButton href="#/signin" class="material-icons m-0" aria-label="Login">login</IconButton>
                {/if}
            </Section>
        </Row>
    </TopAppBar>
    <div class="flexor-content">
        <Router {routes} />
    </div>
    <ul class="app-navbar">
        <li><IconButton href="#/friends" class="material-icons white m-0">people</IconButton></li>
        <li><IconButton href="#/leaderboard" class="material-icons white m-0">star</IconButton></li>
        <li><IconButton href="#/" class="material-icons white m-0">home</IconButton></li>
        <li><IconButton href="#/shop" class="material-icons white m-0">shopping_cart</IconButton></li>
        <li><IconButton href="#/map" class="material-icons white m-0">map</IconButton></li>
    </ul>
</div>