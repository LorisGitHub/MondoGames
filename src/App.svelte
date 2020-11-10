<script lang="ts">
    import { onMount } from 'svelte';
    import { logged, games, friends, events } from './stores';
    import routes from './routes'
    import Router from 'svelte-spa-router'
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
    import Drawer, {AppContent, Content, Header, Subtitle, Scrim} from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import {GameType} from './models/app-enum';

    let myDrawer;
    let myDrawerOpen = false;
    let active = 'Gray Kittens';

    let isLogged: Boolean = false;

    onMount(() => {
        games.set([
              {
                  id: 1,
                  nom: 'Monopoly',
                  price: 8,
                  numPlayers: '2-6',
                  type: GameType.Plateau,
                  img: 'https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SL1392_.jpg',
                  desc: 'It\'s the fast-dealing property trading game where players buy, sell, dream and scheme their way to riches. This version of the Monopoly game welcomes the Rubber Ducky, Tyrannosaurus Rex, and Penguin into its family of tokens. Choose your token, place it on GO! and roll the dice to own it all! There can be only one winner in the Monopoly game. Will it be you?',
                  rating: 4.5,
              },
              {
                  id: 2,
                  nom: 'Jeu de l\'oie',
                  price: 20,
                  numPlayers: '2-4',
                  type: GameType.Plateau,
                  img: 'https://www.regles-de-jeux.com/wp-content/uploads/2012/11/regle-jeu-oie.jpg',
                  rating: 4.5,
              },
              {
                  id: 3,
                  nom: 'Cluedo',
                  price: 20,
                  numPlayers: '3-8',
                  type: GameType.Plateau,
                  img: 'https://www.espritjeu.com/upload/image/cluedo-p-image-60570-grande.jpg',
                  rating: 4.5,
              },
              {
                  id: 4,
                  nom: 'La bonne paye',
                  price: 20,
                  numPlayers: '2-8',
                  type: GameType.Plateau,
                  img: 'https://images-na.ssl-images-amazon.com/images/I/91-j8eztdnL._AC_SL1500_.jpg',
                  rating: 4.5,
              },
              {
                  id: 5,
                  nom: 'Uno',
                  price: 5,
                  numPlayers: '2-4',
                  type: GameType.Carte,
                  img: 'https://cdn-ext.fanatical.com/production/product/original/b2e25f5e-a2cf-4d10-8698-d445ecf6640e.jpeg?w=1200',
                  rating: 4.5,
              },
              {
                  id: 6,
                  nom: 'Puissance 4',
                  price: 5,
                  numPlayers: '2',
                  type: GameType.Arcade,
                  img: 'https://www.ludifolie.com/14057-thickbox_default/puissance-4.jpg',
                  rating: 4.5,
              },
              {
                  id: 7,
                  nom: 'Attrape fantôme',
                  price: 5,
                  numPlayers: '2',
                  type: GameType.Arcade,
                  img: 'https://images-na.ssl-images-amazon.com/images/I/91Itw5nGbtL._AC_SX679_.jpg',
                  rating: 4.5,
              },
              {
                  id: 8,
                  nom: 'Jumanji',
                  price: 5,
                  numPlayers: '2-6',
                  type: GameType.Arcade,
                  img: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/images/0/0/5d4d393a8bc27_6045933_JEU_DE_PLATEAU_JUMANJI_EDITION_RETRO_PK1_855547_1_.jpg',
                  rating: 4.5,
              },
          ]);
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


        // const res = fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`).then(value => {
        //     console.log(value.json());
        // });

        const subscription = logged.subscribe(value => {
            isLogged = value;
        });
    });

    function openDrawer(){
        if(isLogged){
            myDrawerOpen = !myDrawerOpen;
        } else {
            console.log(isLogged);
        }
    }

    function setActive(value) {
        active = value;
        myDrawerOpen = false;
    }

    function goShop(){
        window.location.href = '#/shop';
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
        });
    }

</script>

<div class="top-app-bar-container flexor">
    <Drawer variant="modal" style="width: 80%" bind:this={myDrawer} bind:open={myDrawerOpen}>
        <Header class="flex-center p-0 mt-20">
            <img class="round-border m-0" width="100px" src="https://cdn.discordapp.com/avatars/241989599470026765/0a2ba029253a2c04dc9a606d61fbd3ac.webp?size=128"/>
<!--            <Row>
                <span style="font-size: 12px; font-weight: bold">Cheadle</span>
            </Row>-->
        </Header>
        <Content>
            <List>
                <Item href="javascript:void(0)" on:click={() => setActive('profile')} activated={active === 'profile'}>
                    <Text>My profile</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('games')} activated={active === 'games'}>
                    <Text>My games</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('friends')} activated={active === 'friends'}>
                    <Text>My friends</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('events')} activated={active === 'events'}>
                    <Text>My events</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('groups')} activated={active === 'groups'}>
                    <Text>My groups</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('achievements')} activated={active === 'achievements'}>
                    <Text>My achievements</Text>
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
                <a href="#/signin"><IconButton class="material-icons m-0" aria-label="Login">account_circle</IconButton></a>
            </Section>
        </Row>
    </TopAppBar>
    <div class="flexor-content">
        <Router {routes} />
    </div>
    <ul class="app-navbar">
        <li><a href="#/friends"><IconButton class="material-icons white m-0">people</IconButton></a></li>
        <li><a href="#/leaderboard"><IconButton class="material-icons white m-0">star</IconButton></a></li>
        <li><a href="#/"><IconButton class="material-icons white m-0">home</IconButton></a></li>
        <li><a href="#/shop"><IconButton class="material-icons white m-0">shopping_cart</IconButton></a></li>
        <li><a href="#/map"><IconButton class="material-icons white m-0">map</IconButton></a></li>
    </ul>
</div>