<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '@smui/card';
    import {Icon} from '@smui/button';

    let guild = {
      name: 'CERI Guild',
      image: 'https://pbs.twimg.com/profile_images/1090554519296057345/0qHSCjWS.jpg',
      creation: '16 June 2016',
      address: {
          name: '339 Chemin des Meinajaries',
          city: 'Avignon',
          zip: '84000',
      }
    };

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    onMount(() => {
    });

</script>

<div class="m-10">
    {#if guild.image}
        <div class="flex-center mt-10">
            <img src="{guild.image}" class="w100"/>
        </div>
    {/if}
    <Card class="w100 mt-10 p-10">
        <h5 class="shop-item-title" style="margin: 20px 0 0">{guild.name}</h5>
        <div class="row mt-20" style="align-items: center">
            <Icon class="material-icons">calendar_today</Icon>
            <span style="font-size: 12px; line-height: initial" class="ml-10">Created the {guild.creation}</span>
        </div>
        <div class="row mt-10" style="align-items: center">
            <Icon class="material-icons">people</Icon>
            <span style="font-size: 12px; line-height: initial" class="ml-10">Currently has 196 members</span>
        </div>
        <div class="row mt-10" style="align-items: center">
            <Icon class="material-icons">games</Icon>
            <span style="font-size: 12px; line-height: initial" class="ml-10">Main games are: Monopoly, Uno</span>
        </div>
        {#if guild.address}
            <div class="row mt-10" style="align-items: center">
                <Icon class="material-icons">room</Icon>
                <span style="font-size: 12px; line-height: initial" class="ml-10">{guild.address.name}, {guild.address.city}, {guild.address.zip}</span>
            </div>
        {/if}
    </Card>
</div>


