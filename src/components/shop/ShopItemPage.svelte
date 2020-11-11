<script lang="ts">
    import { onMount } from 'svelte';
    import {Game} from '../../models/app-model';
    import Card, {Content} from '@smui/card';
    import Button, {Group, Label, Icon} from '@smui/button';
    import {currentGame} from '../../stores.js';

    let currentGame_ : Game = null;

    onMount(() => {
        const subscription = currentGame.subscribe(value => {
            currentGame_ = value;
        });
    });

    function onBuy(){
        console.log('buyed!');
    }


</script>

{#if currentGame_}
    <div class="m-10">
        {#if currentGame_.img}
            <div class="flex-center">
                <img src="{currentGame_.img}" class="w100"/>
            </div>
        {/if}
        <Card class="w100 mt-10 p-10">
            <h5 class="shop-item-title" style="margin: 20px 0 0">{currentGame_.name}</h5>
            <div class="w100 mt-20 row" style="justify-content: space-between">
                <div class="row w30 flex-center">
                    <Icon class="material-icons">bookmark</Icon>
                    <span style="font-size: 12px; line-height: initial" class="ml-10">{currentGame_.type}</span>
                </div>
                <div class="row w30 flex-center">
                    <Icon class="material-icons">star</Icon>
                    <span style="font-size: 12px; line-height: initial" class="ml-10">{currentGame_.rating}</span>
                </div>
                <div class="row w30 flex-center">
                    <Icon class="material-icons">supervisor_account</Icon>
                    <span style="font-size: 12px; line-height: initial" class="ml-10">{currentGame_.numPlayers}</span>
                </div>
<!--                <div class="row w30 flex-center">-->
<!--                    <Icon class="material-icons">euro_symbol</Icon>-->
<!--                    <span style="font-size: 12px; line-height: initial" class="ml-10">{currentGame_.price}</span>-->
<!--                </div>-->
            </div>
            {#if currentGame_.desc}
                <div class="row mt-10" style="align-items: center">
                    <Icon class="material-icons">subject</Icon>
                    <span style="font-size: 12px; line-height: initial" class="ml-10">{currentGame_.desc}</span>
                </div>
            {/if}
        </Card>
        <Button color='primary' class="mt-10 w100" on:click={() => onBuy} variant="raised"><Label>Buy</Label><Icon class="material-icons">add_shopping_cart</Icon></Button>
    </div>
{/if}


