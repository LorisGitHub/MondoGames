<script lang="ts">
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    // import {Friend} from '../models/app-model'

    let clicked = 0;
/*    let friends: Friend = [
        {
            nom: 'Florian',
            prenom: 'Gerard',
            ddn: new Date(),
        }
    ];*/

    function doAction(action) {
        alert('You did an action: ' + action);
    }
</script>

<Content component={List}>
    {#each [...Array(6)].map((v, i) => i + 1) as item}
        <Item on:click={() => clicked++}>
            <Text>Item #{item}</Text>
        </Item>
    {/each}
</Content>

<Card class="w100 mt-10">
    <Content component={List}>
        {#each [...Array(6)].map((v, i) => i + 1) as item}
            <Item on:click={() => clicked++}>
                <Text>Item #{item}</Text>
            </Item>
        {/each}
    </Content>
</Card>

<!--<h2>Home component</h2>

<p>
    This sample shows how to set up the router with minimum functionality. <br/>
    The route definition object contains a number of routes (including some with parameters and a catch-all at the end).<br/>
    The links below allow navigating between pages.
</p>

<p>This is the Home component, which contains markup only.</p>

<p><em>Hint:</em> Try navigating with the links below, then use your browser's back and forward buttons.</p>

<h2>Home component</h2>

<p>
    This sample shows how to set up the router with minimum functionality. <br/>
    The route definition object contains a number of routes (including some with parameters and a catch-all at the end).<br/>
    The links below allow navigating between pages.
</p>

<p>This is the Home component, which contains markup only.</p>

<p><em>Hint:</em> Try navigating with the links below, then use your browser's back and forward buttons.</p>-->
