<script lang="ts">
	let name = 'world';
    import routes from './routes'
    import Router from 'svelte-spa-router'
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
</script>

<div class="top-app-bar-container flexor">
    <TopAppBar variant="static" color='primary'>
        <Row>
            <Section>
                <IconButton class="material-icons m-0">menu</IconButton>
                <Title>Flex Static</Title>
            </Section>
            <Section align="end" toolbar>
                <IconButton class="material-icons m-0" aria-label="Download">file_download</IconButton>
                <IconButton class="material-icons m-0" aria-label="Print this page">print</IconButton>
                <IconButton class="material-icons m-0" aria-label="Bookmark this page">bookmark</IconButton>
            </Section>
        </Row>
    </TopAppBar>
    <div class="flexor-content">
        <Router {routes} />
    </div>
    <ul class="app-navbar">
        <li><a href="#/"><IconButton class="material-icons white m-0">people</IconButton></a></li>
        <li><a href="#/hello/svelte"><IconButton class="material-icons white m-0">T</IconButton></a></li>
        <li><a href="#/wild/card"><IconButton class="material-icons white m-0">home</IconButton></a></li>
        <li><a href="#/does/not/exist"><IconButton class="material-icons white m-0">shopping_cart</IconButton></a></li>
        <li><a href="#/hello/svelte"><IconButton class="material-icons white m-0">map</IconButton></a></li>
    </ul>
</div>