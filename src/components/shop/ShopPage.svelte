<script lang="ts">
    import Card, {Content, Media} from '@smui/card';
    import Carousel from '@beyonk/svelte-carousel'
    import List from '@smui/list';
    import {Game} from '../../models/app-model';
    import {currentGame, games} from '../../stores.js';
    import { onMount } from 'svelte';

    let carouselGames = [
        {
            name: 'The Crew',
            img: 'https://cdn2.philibertnet.com/472228-medium_default/the-crew.jpg',
        },
        {
            name: 'Trek 12',
            img: 'https://cdn1.philibertnet.com/481271-medium_default/trek-12.jpg',
        },
        {
            name: '7 Wonders Duel',
            img: 'https://cdn1.philibertnet.com/480581-medium_default/7-wonders-duel-agora.jpg',
        },
        {
            name: 'Paris 1889',
            img: 'https://cdn1.philibertnet.com/481783-small_default/product-image.jpg',
        },
    ];

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

<div class="p-10 white">

    {#if allGamesByType && allGamesByType.length > 0}
        <h3 style="margin: 0 0 10px 0">New games !</h3>
        <div style="border-bottom: 2px solid #018786; border-top: 2px solid #018786; padding: 10px; background: white;">
            <Carousel controls="{false}" dots="{false}">
                {#each carouselGames as carouselGame}
                    <div class="carousel-image-container bg-white col pb-5" style="max-height: 130px !important;">
                        <img src="{carouselGame.img}" class="carousel-image"/>
        <!--                <span class="text-center" style>{carouselGame.name}</span>-->
                    </div>
                {/each}
            </Carousel>
        </div>

        <div class="mt-20">
            {#each allGamesByType as list}
                <h3 class="m-0">{list.type}</h3>
                <List class="horizontal-list mb-10">
                    {#each list.list as game}
                        <a href="#/shop/item">
                            <Card style="width: 100px; min-width: 100px; margin: 0 20px 0 0; height: fit-content; text-align: center" on:click={() => onSelectShopItem(game)}>
                                <Media style="background-image: url({game.img});" aspectRatio="16x9">
                                </Media>
                                <Content style="padding: 5px; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                                    {game.name}<br>
                                    {game.price}€
                                </Content>
                            </Card>
                        </a>
                    {/each}
                </List>
            {/each}
        </div>
    {:else}
        <h4 class="text-center white">No games to show</h4>
    {/if}

</div>


