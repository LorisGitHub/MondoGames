<script lang="ts">
    import Card, {Content} from '@smui/card';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
</script>

<h3 class="m-0">Plateau</h3>
<Content class="horizontal-list mb-10" component={List}>
    {#each [...Array(12)].map((v, i) => i + 1) as item}
        <div style="padding: 0 10px; text-align: center">
            <IconButton class="round-border material-icons m-0">extension</IconButton>
            <Text>Item #{item}</Text>
        </div>
    {/each}
</Content>

<h3 class="m-0">Cartes</h3>
<Content class="horizontal-list mb-10" component={List}>
    {#each [...Array(12)].map((v, i) => i + 1) as item}
        <div style="padding: 0 10px; text-align: center">
            <IconButton class="round-border material-icons m-0">amp_stories</IconButton>
            <Text>Item #{item}</Text>
        </div>
    {/each}
</Content>

<h3 class="m-0">Stratégie</h3>
<Content class="horizontal-list mb-10" component={List}>
    {#each [...Array(12)].map((v, i) => i + 1) as item}
        <div style="padding: 0 10px; text-align: center">
            <IconButton class="round-border material-icons m-0">hourglass_full</IconButton>
            <Text>Item #{item}</Text>
        </div>
    {/each}
</Content>

<h3 class="m-0">Arcade</h3>
<Content class="horizontal-list mb-10" component={List}>
    {#each [...Array(12)].map((v, i) => i + 1) as item}
        <div style="padding: 0 10px; text-align: center">
            <IconButton class="round-border material-icons m-0">gamepad</IconButton>
            <Text>Item #{item}</Text>
        </div>
    {/each}
</Content>
