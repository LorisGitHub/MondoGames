<script lang="ts">
    import { onMount } from 'svelte';
    import {Game} from '../../models/app-model';
    import Card, {Content} from '@smui/card';
    import {currentGame} from '../../stores.js';

    let currentGame_ : Game = null;

    onMount(() => {
        const subscription = currentGame.subscribe(value => {
            currentGame_ = value;
        });
    });


</script>

{#if currentGame_}
    <div class="m-10">
        <h1 class="shop-item-title white">{currentGame_.nom}</h1>
        <div class="flex-center">
            <img src="{currentGame_.img}" class="w75"/>
        </div>
        <div class="row mt-20" style="justify-content: space-between">
            <Card class="w30 p-10 larger bold text-center">
                {currentGame_.price}€
            </Card>
            <Card class="w30 p-10 larger bold text-center">
                {currentGame_.type}
            </Card>
            <Card class="w30 p-10 larger bold text-center">
                {currentGame_.rating}/5
            </Card>
        </div>
        {#if currentGame_.desc}
            <Card class="w100 mt-10 p-10">
                {currentGame_.desc}
            </Card>
        {/if}
    </div>
{/if}


