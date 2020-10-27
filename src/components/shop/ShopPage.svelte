<script lang="ts">
    import Card, {Content, Media} from '@smui/card';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import {Game} from '../../models/app-model';
    import {GameType} from '../../models/app-enum';

    let plateau: Game = [
        {
            nom: 'Monopoly',
            price: 8,
            type: GameType.Plateau,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SL1392_.jpg',
        },
        {
            nom: 'Jeu de l\'oie',
            price: 20,
            type: GameType.Plateau,
            img: 'https://www.regles-de-jeux.com/wp-content/uploads/2012/11/regle-jeu-oie.jpg',
        },
        {
            nom: 'Cluedo',
            price: 20,
            type: GameType.Plateau,
            img: 'https://www.espritjeu.com/upload/image/cluedo-p-image-60570-grande.jpg',
        },
        {
            nom: 'La bonne paye',
            price: 20,
            type: GameType.Plateau,
            img: 'https://images-na.ssl-images-amazon.com/images/I/91-j8eztdnL._AC_SL1500_.jpg',
        }
    ];

    let cartes: Game = [
        {
            nom: 'Uno',
            price: 5,
            type: GameType.Carte,
            img: 'https://cdn-ext.fanatical.com/production/product/original/b2e25f5e-a2cf-4d10-8698-d445ecf6640e.jpeg?w=1200',
        },
    ];

    let arcades: Game = [
        {
            nom: 'Puissance 4',
            price: 5,
            type: GameType.Arcade,
            img: 'https://www.ludifolie.com/14057-thickbox_default/puissance-4.jpg',
        },
        {
            nom: 'Attrape fantôme',
            price: 5,
            type: GameType.Arcade,
            img: 'https://images-na.ssl-images-amazon.com/images/I/91Itw5nGbtL._AC_SX679_.jpg',
        },
        {
            nom: 'Jumanji',
            price: 5,
            type: GameType.Arcade,
            img: 'https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/images/0/0/5d4d393a8bc27_6045933_JEU_DE_PLATEAU_JUMANJI_EDITION_RETRO_PK1_855547_1_.jpg',
        },
    ];

    const gamesList = [
        {
            type: GameType.Plateau,
            list: plateau,
        },
        {
            type: GameType.Carte,
            list: cartes,
        },
        {
            type: GameType.Arcade,
            list: arcades,
        }
    ];

</script>

{#each gamesList as list}
    <h3 class="m-0">{list.type}</h3>
    <Content class="horizontal-list mb-10" component={List}>
        {#each list.list as game}
            <Card style="width: 100px; min-width: 100px; margin: 0 10px; height: fit-content; text-align: center">
                <Media style="background-image: url({game.img});" aspectRatio="16x9">
                </Media>
                <Content style="padding: 5px; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                    {game.nom}<br>
                    {game.price}€
                </Content>
            </Card>
        {/each}
    </Content>
{/each}


