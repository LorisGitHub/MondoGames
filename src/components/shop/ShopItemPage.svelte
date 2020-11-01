<script lang="ts">
    import { onMount } from 'svelte';
    import Text from '@smui/list';
    import {Game} from '../../models/app-model';

    import {currentGame} from '../../stores.js';

    let currentGame_ : Game = null;

    onMount(() => {
        const subscription = currentGame.subscribe(value => {
            currentGame_ = value;
        });
    });


</script>

{#if currentGame_}
    <h1 class="text-center">{currentGame_.nom}</h1>
    <img src="{currentGame_.img}" class="w100"/>
    <Text>
        {currentGame_.price}€<br>
        {currentGame_.type}
    </Text>
{/if}


