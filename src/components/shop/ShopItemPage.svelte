<script lang="ts">
    import { onMount } from 'svelte';
    import Card, {Content, Media} from '@smui/card';
    import List, {Item, Text} from '@smui/list';
    import {Game} from '../../models/app-model';

    import {currentGame} from '../../stores.js';

    let currentGame_ : Game = null;

    onMount(() => {
        const subscription = currentGame.subscribe(value => {
            currentGame_ = value;
            console.log(value);
        });
    });


</script>

{#if currentGame_}
    <h1 class="text-center">{currentGame_.nom}</h1>
    <img src="{currentGame_.img}" class="w100"/>
    <Text>
        {currentGame_.nom}<br>
        {currentGame_.price}€<br>
        {currentGame_.type}
    </Text>
{/if}


