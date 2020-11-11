<script lang="ts">
    import { onMount } from 'svelte';
    import {User} from '../../models/app-model';
    import Card from '@smui/card';
    import {Icon} from '@smui/button';
    import {profil} from '../../stores.js';

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

    let achievements = ["Successfuly created my accout !", "Joined a guild !", "Successfuly buyed my first game !", "Participated in my first event !"];

    onMount(() => {
    });


</script>

<div class="m-10">
    <h4 class="text-center white">My achievements</h4>
    {#each achievements as achievement}
        <Card class="p-5 mt-5 row" style="border-bottom: 1px solid lightgray">
            <div style="display: flex; align-items: center">
                <span style="font-size: 12px; font-weight: bold" class="ml-10">{achievement}</span>
            </div>
        </Card>
    {/each}
</div>


