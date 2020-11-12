<script lang="ts">
    import { onMount } from 'svelte';
    import Button, {Group, Label} from '@smui/button';
    import List, {Item, Text} from '@smui/list';
    import {User} from '../../models/app-model'
    import {friends} from '../../stores.js';

    let allFriends: User[] = [];
    let filteredFriends: User[] = [];

    onMount(() => {
        const subscription = friends.subscribe(value => {
            if(value && value.length > 0){
                allFriends = value;
                onSelectCategorie('world');
            }
        });
    });

    function onSelectCategorie(categorie: String){
        if(categorie === 'world'){
            filteredFriends = allFriends.sort((a, b) => {
                if(a.score < b.score){
                    return 1;
                } else if(a.score > b.score){
                    return -1;
                }
                return 0;
            });
        } else if(categorie === 'country'){
            filteredFriends = allFriends.filter(friend => friend.country === 'FRA').sort((a, b) => {
                if(a.score < b.score){
                    return 1;
                } else if(a.score > b.score){
                    return -1;
                }
                return 0;
            });
        } else if(categorie === 'friends'){
            // TODO: a faire
        }
    }
</script>

<Group class="header-button mb-10 mt-20" variant="raised">
    <Button color='primary' class="m-0" on:click={() => onSelectCategorie('world')} variant="raised" checked><Label>World</Label></Button>
    <Button color='primary' class="m-0" on:click={() => onSelectCategorie('country')} variant="raised"><Label>Country</Label></Button>
    <Button color='primary' class="m-0" on:click={() => onSelectCategorie('world')} variant="raised"><Label>Amis</Label></Button>
</Group>

{#if allFriends && allFriends.length > 0 }
    <List class="p-0 mt-20 white ml-10 mr-10">
        {#each filteredFriends as friend, i}
            <div class="w100 row flex-center" style="border-bottom: 1px solid lightgray; padding: 5px 0 5px;">
                <h2 class="mr-10" style="color: {i === 0 ? '#daa520': i === 1 ? '#C0C0C0': i === 2 ? '#B08D57':'white'}">{i+1}</h2>
                <img class="round-border m-0" style="height: 50px" src="{friend.profilePicture}"/>
                <div style="width: -webkit-fill-available">
                    <Text class="ml-10">{friend.userName}</Text>
                </div>
                <div style="width: 50px; display: flex; justify-content: flex-end; position: relative; right: 20px;">
                    <img style="height: 20px" src="assets/countryFlags/{friend.country}.svg"/>
                </div>
            </div>
        {/each}
    </List>
{:else}
    <h4 class="text-center white">Nothing to show</h4>
{/if}
