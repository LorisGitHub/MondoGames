<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '@smui/card';
    import List, {Item, Text} from '@smui/list';
    import {GameType} from '../../models/app-enum';

    let allGames = [
        {
            name: 'Cluedo',
            price: 20,
            type: GameType.Board,
            image: 'https://www.espritjeu.com/upload/image/cluedo-p-image-60570-grande.jpg',
            rating: 4.5,
        },
        {
            name: 'Jeu de l\'oie',
            price: 20,
            type: GameType.Board,
            image: 'https://www.regles-de-jeux.com/wp-content/uploads/2012/11/regle-jeu-oie.jpg',
            rating: 4.5,
        },
        {
            name: 'Uno',
            price: 5,
            type: GameType.Cards,
            image: 'https://cdn-ext.fanatical.com/production/product/original/b2e25f5e-a2cf-4d10-8698-d445ecf6640e.jpeg?w=1200',
            rating: 4.5,
        },
    ];

    onMount(() => {
    });


</script>

<div class="m-10">
    <List class="mt-0">
        <h4 class="text-center white">My games</h4>
        {#each allGames as game}
            <Card class="p-5 mt-5 row" style="border-bottom: 1px solid lightgray">
                <div class="w30 flex-center">
                    <img class="m-0" style="height: 50px" src="{game.image}"/>
                </div>
                <div style="display: flex; align-items: center">
                    <span style="font-size: 12px; font-weight: bold" class="ml-10">{game.name}</span>
                </div>
            </Card>
        {/each}
    </List>
</div>


