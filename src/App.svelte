<script lang="ts">
    import routes from './routes'
    import Router from 'svelte-spa-router'
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
    import Drawer, {AppContent, Content, Header, Subtitle, Scrim} from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';

    let myDrawer;
    let myDrawerOpen = false;
    let active = 'Gray Kittens';

    function setActive(value) {
        active = value;
        myDrawerOpen = false;
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
        });
    }

</script>

<div class="top-app-bar-container flexor">
    <Drawer variant="modal" style="width: 80%" bind:this={myDrawer} bind:open={myDrawerOpen}>
        <Header class="flex-center">
            <Title class="p-0"><IconButton style="width: auto; font-size: 66px" class="material-icons mt-20">account_circle</IconButton></Title>
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
    <TopAppBar variant="static" color='secondary'>
        <Row>
            <Section>
                <IconButton on:click={() => myDrawerOpen = !myDrawerOpen} class="material-icons m-0">menu</IconButton>
                <Title>Mondo Games</Title>
            </Section>
            <Section align="end" toolbar>
                <IconButton class="material-icons m-0" aria-label="Download">search</IconButton>
                <IconButton class="material-icons m-0" aria-label="Bookmark this page">bookmark</IconButton>
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