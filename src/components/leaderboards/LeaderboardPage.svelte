<script lang="ts">
    import Card, {Content} from '@smui/card';
    import Button, {Group, Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';

    let clicked = 0;
</script>

<Group class="header-button mb-10" variant="raised">
    <Button color='secondary' class="m-0" on:click={() => clicked++} variant="raised"><Label>World</Label></Button>
    <Button color='secondary' class="m-0" on:click={() => clicked++} variant="raised"><Label>Country</Label></Button>
    <Button color='secondary' class="m-0" on:click={() => clicked++} variant="raised"><Label>Regional</Label></Button>
</Group>

<Content component={List} class="p-0">
    {#each [...Array(20)].map((v, i) => i + 1) as item}
        <Item class="pb-5 pt-5" style="border-bottom: 1px solid lightgray" on:click={() => clicked++}>
            <IconButton class="round-border material-icons m-0">face</IconButton>
            <Text class="ml-10">Item #{item}</Text>
        </Item>
    {/each}
</Content>
