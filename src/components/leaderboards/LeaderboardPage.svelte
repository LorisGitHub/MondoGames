<script lang="ts">
    import { onMount } from 'svelte';
    import Button, {Group, Label} from '@smui/button';
    import Icon from '@smui/icon-button';
    import List, {Item, Text} from '@smui/list';
    import {Friend} from '../../models/app-model'
    import {friends} from '../../stores.js';

    let allFriends: Friend[] = [];
    let filteredFriends: Friend[] = [];

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
                if(a.point < b.point){
                    return 1;
                } else if(a.point > b.point){
                    return -1;
                }
                return 0;
            });
        } else if(categorie === 'country'){
            filteredFriends = allFriends.filter(friend => friend.country === 'fra').sort((a, b) => {
                if(a.point < b.point){
                    return 1;
                } else if(a.point > b.point){
                    return -1;
                }
                return 0;
            });
        } else if(categorie === 'friends'){
            // TODO: a faire
        }
    }
</script>

<Group class="header-button mb-10 mt-10" variant="raised">
    <Button color='secondary' class="m-0" on:click={() => onSelectCategorie('world')} variant="raised"><Label>World</Label></Button>
    <Button color='secondary' class="m-0" on:click={() => onSelectCategorie('country')} variant="raised"><Label>Country</Label></Button>
    <Button color='secondary' class="m-0" on:click={() => onSelectCategorie('world')} variant="raised"><Label>Amis</Label></Button>
</Group>

<List class="p-0 ml-10">
    {#each filteredFriends as friend, i}
        <Item class="w100" style="border-bottom: 1px solid lightgray; padding: 5px 0 5px;">
            <h2 class="mr-10" style="color: {i === 0 ? '#daa520': i === 1 ? '#C0C0C0': i === 2 ? '#B08D57':'black'}">{i+1}</h2>
            <img class="round-border m-0" style="height: 50px" src="{friend.pp}"/>
            <div style="width: -webkit-fill-available">
                <Text class="ml-10">{friend.pseudo}</Text>
            </div>
            <div style="width: 50px; display: flex; position: relative; right: 20px;">
                <img style="height: 20px" src="assets/countryFlags/{friend.country}.svg"/>
            </div>
        </Item>
    {/each}
</List>
