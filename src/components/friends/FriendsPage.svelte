<script type="ts">
    import Card, {Content} from '@smui/card';
    import List, {Item, Text} from '@smui/list';
    import {Friend} from '../../models/app-model'
    import {currentFriend} from '../../stores.js';

    let friends: Friend = [
        {
            nom: 'Gerard',
            prenom: 'Florian',
            pseudo: 'Kralone',
            pp: 'https://cdn.discordapp.com/avatars/190174996235026433/5b9385eef2d2b128b104faac96f6a8fb.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Benoit',
            prenom: 'Loris',
            pseudo: 'Cheadle',
            pp: 'https://cdn.discordapp.com/avatars/241989599470026765/0a2ba029253a2c04dc9a606d61fbd3ac.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Dave',
            prenom: 'Tibo',
            pseudo: 'Botulith',
            pp: 'https://cdn.discordapp.com/avatars/223930994745409537/2f2a1062ce5cd101099dff6a75a7685b.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Lamoureux',
            prenom: 'Kevin',
            pseudo: 'Yukanda',
            pp: 'https://cdn.discordapp.com/avatars/228584084618608641/4f54cf87ff1a82a0f743a0e4ae3206a2.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Riviere',
            prenom: 'Colin',
            pseudo: 'Zolac',
            pp: 'https://cdn.discordapp.com/avatars/242805635748462594/f5716aa41dbb832c51ac73791a5c08b2.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Cauvin',
            prenom: 'Maxime',
            pseudo: 'Shoko',
            pp: 'https://cdn.discordapp.com/avatars/183335212439175169/a328c42a0f33f52ea2d0c93e825f24d9.webp?size=128',
            ddn: new Date(),
        }
    ];

    function onSelectFriend(item: Friend) {
        currentFriend.set(item);
    }
</script>

<Content class="horizontal-list" component={List}>
    {#each friends as friend}
        <a href="#/friend">
            <div style="padding: 0 10px; text-align: center" on:click={() => onSelectFriend(friend)}>
                <img class="round-border m-0" style="height: 50px" src="{friend.pp}"/>
                <span style="font-size: 12px; font-weight: bold">{friend.pseudo}</span>
                <span style="height: 10px; width: 10px; background-color: green; border-radius: 50%; position: relative; top: -84px; left: 45px; display: flex;"></span>
            </div>
        </a>
    {/each}
</Content>

<Card class="w100">
    <Content component={List} class="p-0">
        {#each friends as friend}
            <a href="#/friend">
                <Item class="pb-5 pt-5" style="border-bottom: 1px solid lightgray" on:click={() => onSelectFriend(friend)}>
                    <img class="round-border m-0" style="height: 50px" src="{friend.pp}"/>
                    <span style="font-size: 12px;" class="ml-10">{friend.prenom} {friend.nom}</span><br>
                </Item>
            </a>
        {/each}
    </Content>
</Card>
