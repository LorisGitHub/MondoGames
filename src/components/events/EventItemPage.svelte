<script lang="ts">
    import { onMount } from 'svelte';
    import {Event} from '../../models/app-model';
    import Card, {Content} from '@smui/card';
    import Button, {Group, Label, Icon} from '@smui/button';
    import {games, currentGame, currentEvent} from '../../stores.js';

    let currentEvent_ : Event = null;

    onMount(() => {
        const subscription = currentEvent.subscribe(value => {
            currentEvent_ = value;
            if(currentEvent_ && currentEvent_.gameId){
                const subscriptionCurrentGame = games.subscribe(value => {
                    if(value && value.length > 0){
                        const game = value.find(game => game.id === currentEvent_.gameId);
                        if(game){
                            currentGame.set(game);
                            console.log(game);
                        }
                    }
                });
            }
        });
    });

    function onGoShop(){
        window.location.href = '#/shop/item';
    }

</script>

{#if currentEvent_}
    <div class="m-10">
        {#if currentEvent_.img}
            <div class="flex-center">
                <img src="{currentEvent_.img}" class="w100"/>
            </div>
        {/if}
        <Card class="w100 mt-10 p-10">
            <h5 class="shop-item-title" style="margin: 20px 0 0">{currentEvent_.nom}</h5>
            <div class="row mt-20" style="align-items: center">
                <Icon class="material-icons">subject</Icon>
                <span style="font-size: 12px; line-height: initial" class="ml-10">{currentEvent_.desc}</span>
            </div>
            <div class="row mt-10" style="align-items: center">
                <Icon class="material-icons">room</Icon>
                <span style="font-size: 12px; line-height: initial" class="ml-10">{currentEvent_.adress.name}, {currentEvent_.adress.city}, {currentEvent_.adress.zip}</span>
            </div>
        </Card>
        <Button color='primary' class="mt-10 w100" on:click={() => onGoShop()} variant="raised"><Label>See on store</Label><Icon class="material-icons">remove_red_eye</Icon></Button>

    </div>
{/if}


