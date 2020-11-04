<script type="ts">
    import { onMount } from 'svelte';
    import Card, {Content} from '@smui/card';
    import List, {Item, Text} from '@smui/list';
    import {Friend} from '../../models/app-model'
    import {currentFriend, friends} from '../../stores.js';

    let allFriends: Friend[] = [];
    let allOnlineFriends: Friend[] = [];

    onMount(() => {
        const subscription = friends.subscribe(value => {
            if(value && value.length > 0){
                allFriends = value;
                const tmpOnlineFriends = [];
                allFriends.forEach(friend => {
                   if(friend.online){
                       tmpOnlineFriends.push(friend);
                   }
                });
                allOnlineFriends = tmpOnlineFriends;
            }
        });
    });

    function onSelectFriend(item: Friend) {
        currentFriend.set(item);
    }
</script>

{#if allOnlineFriends && allOnlineFriends.length > 0}
<List class="horizontal-list">
    {#each allOnlineFriends as friend}
        <a href="#/friend">
            <div class="online-friend" on:click={() => onSelectFriend(friend)}>
                <img class="round-border m-0" style="height: 50px" src="{friend.pp}"/>
                <span style="font-size: 12px; font-weight: bold">{friend.pseudo}</span>
                <span style="height: 10px; width: 10px; background-color: green; border-radius: 50%; position: relative; top: -78px; left: 45px; display: flex;"></span>
            </div>
        </a>
    {/each}
</List>
{/if}

<Card class="w100">
    <List class="p-0">
        {#each allFriends as friend}
            <a href="#/friend">
                <Item class="pb-5 pt-5" style="border-bottom: 1px solid lightgray" on:click={() => onSelectFriend(friend)}>
                    <img class="round-border m-0" style="height: 50px" src="{friend.pp}"/>
                    <span style="font-size: 12px;" class="ml-10">{friend.prenom} {friend.nom}</span><br>
                </Item>
            </a>
        {/each}
    </List>
</Card>
