<script lang="ts">
    import Card, {Content} from '@smui/card';
    import Button, {Group, Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import {Friend} from '../../models/app-model'

    let clicked = 0;

    let friends: Friend = [
        {
            nom: 'Gerard',
            prenom: 'Florian',
            pseudo: 'Kralone',
            country: 'fr',
            pp: 'https://cdn.discordapp.com/avatars/190174996235026433/5b9385eef2d2b128b104faac96f6a8fb.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Benoit',
            prenom: 'Loris',
            pseudo: 'Cheadle',
            country: 'fr',
            pp: 'https://cdn.discordapp.com/avatars/241989599470026765/0a2ba029253a2c04dc9a606d61fbd3ac.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Dave',
            prenom: 'Tibo',
            pseudo: 'Botulith',
            country: 'fr',
            pp: 'https://cdn.discordapp.com/avatars/223930994745409537/2f2a1062ce5cd101099dff6a75a7685b.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Lamoureux',
            prenom: 'Kevin',
            pseudo: 'Yukanda',
            country: 'fr',
            pp: 'https://cdn.discordapp.com/avatars/228584084618608641/4f54cf87ff1a82a0f743a0e4ae3206a2.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Riviere',
            prenom: 'Colin',
            pseudo: 'Zolac',
            country: 'fr',
            pp: 'https://cdn.discordapp.com/avatars/242805635748462594/f5716aa41dbb832c51ac73791a5c08b2.webp?size=128',
            ddn: new Date(),
        },
        {
            nom: 'Cauvin',
            prenom: 'Maxime',
            pseudo: 'Shoko',
            country: 'fr',
            pp: 'https://cdn.discordapp.com/avatars/183335212439175169/a328c42a0f33f52ea2d0c93e825f24d9.webp?size=128',
            ddn: new Date(),
        }
    ];
</script>

<Group class="header-button mb-10" variant="raised">
    <Button color='secondary' class="m-0" on:click={() => clicked++} variant="raised"><Label>World</Label></Button>
    <Button color='secondary' class="m-0" on:click={() => clicked++} variant="raised"><Label>Country</Label></Button>
    <Button color='secondary' class="m-0" on:click={() => clicked++} variant="raised"><Label>Regional</Label></Button>
</Group>

<Content component={List} class="p-0 ml-10">
    {#each friends as friend, i}
        <Item class="w100" style="border-bottom: 1px solid lightgray; padding: 5px 0 5px;" on:click={() => clicked++}>
            <h2 class="mr-10" style="color: {i === 0 ? '#daa520': i === 1 ? '#C0C0C0': i === 2 ? '#B08D57':'black'}">{i+1}</h2>
            <img class="round-border m-0" style="height: 50px" src="{friend.pp}"/>
            <div style="width: -webkit-fill-available">
                <Text class="ml-10">{friend.pseudo}</Text>
            </div>
            <div style="width: 50px; display: flex; position: relative; right: 20px;">
                <img style="height: 20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"/>
            </div>
        </Item>
    {/each}
</Content>
