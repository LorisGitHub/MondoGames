<script lang="ts">
    import { onMount } from 'svelte';
    import { logged, games, friends, events, profil } from './stores';
    import routes from './routes'
    import Router from 'svelte-spa-router'
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
    import Drawer, {AppContent, Content, Header, Subtitle, Scrim} from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import {GameType} from './models/app-enum';

    let backUrl = 'http://88.125.48.25:60001';
    let myDrawer;
    let myDrawerOpen = false;

    let isLogged: Boolean = false;

    onMount(() => {
        friends.set([
            {
                nom: 'Gerard',
                prenom: 'Florian',
                pseudo: 'Kralone',
                online: false,
                point: 2500,
                country: 'fra',
                pp: 'https://cdn.discordapp.com/avatars/190174996235026433/5b9385eef2d2b128b104faac96f6a8fb.webp?size=128',
                ddn: new Date(),
            },
            {
                nom: 'Benoit',
                prenom: 'Loris',
                pseudo: 'Cheadle',
                online: true,
                point: 4000,
                country: 'jap',
                pp: 'https://cdn.discordapp.com/avatars/241989599470026765/0a2ba029253a2c04dc9a606d61fbd3ac.webp?size=128',
                ddn: new Date(),
            },
            {
                nom: 'Dave',
                prenom: 'Tibo',
                pseudo: 'Botulith',
                online: false,
                point: 300,
                country: 'fra',
                pp: 'https://cdn.discordapp.com/avatars/223930994745409537/2f2a1062ce5cd101099dff6a75a7685b.webp?size=128',
                ddn: new Date(),
            },
            {
                nom: 'Lamoureux',
                prenom: 'Kevin',
                pseudo: 'Yukanda',
                online: false,
                point: 150,
                country: 'fra',
                pp: 'https://cdn.discordapp.com/avatars/228584084618608641/4f54cf87ff1a82a0f743a0e4ae3206a2.webp?size=128',
                ddn: new Date(),
            },
            {
                nom: 'Riviere',
                prenom: 'Colin',
                pseudo: 'Zolac',
                online: true,
                point: 2100,
                country: 'por',
                pp: 'https://cdn.discordapp.com/avatars/242805635748462594/f5716aa41dbb832c51ac73791a5c08b2.webp?size=128',
                ddn: new Date(),
            },
            {
                nom: 'Cauvin',
                prenom: 'Maxime',
                pseudo: 'Shoko',
                online: true,
                point: 1750,
                country: 'ita',
                pp: 'https://cdn.discordapp.com/avatars/183335212439175169/a328c42a0f33f52ea2d0c93e825f24d9.webp?size=128',
                ddn: new Date(),
            }
        ]);
        events.set([
            {
                nom: 'Tournoi Uno',
                desc: 'Tournoi 8 joueurs sur le jeu uno',
                startDate: new Date(),
                endDate: new Date(),
                adress: {
                    name: '71 Chemin des Orsaniers',
                    city: 'Vedène',
                    zip: 84270,
                    country: 'France',
                    lat: 43.967911,
                    lon: 4.899947,
                },
                gameId: 5,
                img: 'https://colormygeneva.ch/sites/default/files/jeudi-en-folie-tournoi-uno-autre-geneve-fevrier-2019-evenement-sortie-soiree.jpg'
            },
            {
                nom: 'Tournoi Monopoly',
                desc: 'Tournoi 8 joueurs sur le jeu Monopoly',
                startDate: new Date(),
                endDate: new Date(),
                adress: {
                    name: '16 Route d\'Eyragues',
                    city: 'Maillane',
                    zip: 13910,
                    country: 'France',
                    lat: 43.833908,
                    lon: 4.785190,
                },
                gameId: 1,
                img: 'https://www.slate.fr/sites/default/files/styles/1060x523/public/monop_0.jpg'
            },
            {
                nom: 'Tournoi Cluedo',
                desc: 'Tournoi 8 joueurs sur le jeu Cluedo',
                startDate: new Date(),
                endDate: new Date(),
                adress: {
                    name: '83 Avenue du Docteur Georges Perrier',
                    city: 'Châteaurenard',
                    zip: 13160,
                    country: 'France',
                    lat: 43.878624,
                    lon: 4.853189,
                },
                gameId: 3,
            },
        ]);
        profil.set(            {
            nom: 'Benoit',
            prenom: 'Loris',
            pseudo: 'Cheadle',
            online: true,
            point: 4000,
            country: 'jap',
            pp: 'https://cdn.discordapp.com/avatars/241989599470026765/0a2ba029253a2c04dc9a606d61fbd3ac.webp?size=128',
            ddn: new Date(877185479000),
            adress: {
                name: '924 Rue du Cheval Blanc',
                city: 'Vedène',
                zip: 84270,
                country: 'France',
                lat: 43.967911,
                lon: 4.899947,
            },
        });

        getAllGames();
        getAllUsers();

        const subscription = profil.subscribe(value => {
            if(value){
                isLogged = true;
            }
        });
    });

    function getAllGames(){
        const resGames = fetch(`${backUrl}/open/Game/getAllGames`).then(value => {
            value.json().then(data => {
                games.set(data);
            })
        }, reason => {
            console.log('error while getting games');
        });
    }

    function getAllUsers(){
        const resUsers = fetch(`${backUrl}/open/MondoUser/getAllUsers`).then(value => {
            value.json().then(data => {
                // users.set(data);
            })
        }, reason => {
            console.log('error while getting users');
        });
    }

    function getAllEvents(){
        const resEvents = fetch(`${backUrl}/open/Events/getAllEvents`).then(value => {
            value.json().then(data => {
                // events.set(data);
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
        <Header class="flex-center p-0 mt-20">
            <img class="round-border m-0" width="100px" src="https://cdn.discordapp.com/avatars/241989599470026765/0a2ba029253a2c04dc9a606d61fbd3ac.webp?size=128"/>
<!--            <Row>
                <span style="font-size: 12px; font-weight: bold">Cheadle</span>
            </Row>-->
        </Header>
        <Content>
            <List class="mt-20">
                <Item style="border-bottom: 1px solid white" href="#/profil" on:click={() => setActive('profile')}>
                    <Text class="white">My profile</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="javascript:void(0)" on:click={() => setActive('games')}>
                    <Text class="white">My games</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="javascript:void(0)" on:click={() => setActive('friends')}>
                    <Text class="white">My friends</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="javascript:void(0)" on:click={() => setActive('events')}>
                    <Text class="white">My events</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="javascript:void(0)" on:click={() => setActive('groups')}>
                    <Text class="white">My guild</Text>
                </Item>
                <Item style="border-bottom: 1px solid white" href="javascript:void(0)" on:click={() => setActive('achievements')}>
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
                <IconButton href="#/signin" class="material-icons m-0" aria-label="Login">login</IconButton>
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