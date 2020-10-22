<script lang="ts">
	let name = 'world';
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
        <Header>
            <Title>Super Drawer</Title>
        </Header>
        <Content>
            <List>
                <Item href="javascript:void(0)" on:click={() => setActive('Gray Kittens')} activated={active === 'Gray Kittens'}>
                    <Text>Gray Kittens</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('A Space Rocket')} activated={active === 'A Space Rocket'}>
                    <Text>A Space Rocket</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('100 Pounds of Gravel')} activated={active === '100 Pounds of Gravel'}>
                    <Text>100 Pounds of Gravel</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('All of the Shrimp')} activated={active === 'All of the Shrimp'}>
                    <Text>All of the Shrimp</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => setActive('A Planet with a Mall')} activated={active === 'A Planet with a Mall'}>
                    <Text>A Planet with a Mall</Text>
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
        <li><a href="#/hello/svelte"><IconButton class="material-icons white m-0">star</IconButton></a></li>
        <li><a href="#/"><IconButton class="material-icons white m-0">home</IconButton></a></li>
        <li><a href="#/does/not/exist"><IconButton class="material-icons white m-0">shopping_cart</IconButton></a></li>
        <li><a href="#/wild/card"><IconButton class="material-icons white m-0">map</IconButton></a></li>
    </ul>
</div>