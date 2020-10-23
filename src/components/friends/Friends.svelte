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

<Content class="horizontal-list" component={List}>
    {#each [...Array(12)].map((v, i) => i + 1) as item}
        <div style="padding: 0 10px; text-align: center" on:click={() => clicked++}>
            <IconButton class="round-border material-icons m-0">people</IconButton>
            <Text>Item #{item}</Text>
        </div>
    {/each}
</Content>

<Card class="w100 mt-10">
    <Content component={List} class="p-0">
        {#each [...Array(20)].map((v, i) => i + 1) as item}
            <Item class="pb-5 pt-5" style="border-bottom: 1px solid" on:click={() => clicked++}>
                <IconButton class="round-border material-icons m-0">people</IconButton>
                <Text class="ml-10">Item #{item}</Text>
            </Item>
        {/each}
    </Content>
</Card>
