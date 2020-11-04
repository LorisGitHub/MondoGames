<script lang="ts">
    import Card, {Content, Media} from '@smui/card';
    import List from '@smui/list';
    import {Game} from '../../models/app-model';
    import {currentGame, games} from '../../stores.js';
    import { onMount } from 'svelte';

    let allGamesByType = [];
    let tmpList = [];

    onMount(() => {
        const subscription = games.subscribe(value => {
            if(value && value.length > 0){
                value.forEach(game => {
                    addElementToList(game);
                });
            }
            allGamesByType = [...tmpList];
        });
    });

    function addElementToList(game: Game){
        let exist: Boolean = false;
        tmpList.forEach(filteredGames => {
            if(filteredGames.type === game.type){
                exist = true;
                filteredGames.list.push(game);
            }
        });
        if(!exist){
            tmpList.push(
                {
                    type: game.type,
                    list: [game],
                }
            );
        }
    }

    function onSelectShopItem(item: Game){
        currentGame.set(item);
    }

</script>

{#if allGamesByType && allGamesByType.length > 0}
<div class="p-10">
    {#each allGamesByType as list}
        <h3 class="m-0">{list.type}</h3>
        <List class="horizontal-list mb-10">
            {#each list.list as game}
                <a href="#/shop/item">
                    <Card style="width: 100px; min-width: 100px; margin: 0 10px; height: fit-content; text-align: center" on:click={() => onSelectShopItem(game)}>
                        <Media style="background-image: url({game.img});" aspectRatio="16x9">
                        </Media>
                        <Content style="padding: 5px; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                            {game.nom}<br>
                            {game.price}€
                        </Content>
                    </Card>
                </a>
            {/each}
        </List>
    {/each}
</div>
{/if}


