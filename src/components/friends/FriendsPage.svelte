<script type="ts">
    import { onMount } from 'svelte';
    import Card, {Content} from '@smui/card';
    import List, {Item, Text} from '@smui/list';
    import {User} from '../../models/app-model'
    import {currentFriend, friends} from '../../stores.js';

    let allFriends: User[] = [];
    let allOnlineFriends: User[] = [];

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

    function onSelectFriend(item: User) {
        currentFriend.set(item);
    }
</script>

{#if (allOnlineFriends && allOnlineFriends.length > 0) || (allFriends && allFriends.length > 0)}
    {#if allOnlineFriends && allOnlineFriends.length > 0}
        <List class="horizontal-list">
            {#each allOnlineFriends as friend}
                <a href="#/friend">
                    <div class="online-friend" on:click={() => onSelectFriend(friend)}>
                        <img class="round-border m-0" style="height: 50px" src="{friend.profilePicture}"/>
                        <span style="font-size: 12px; font-weight: bold" class="white">{friend.userName}</span>
                        <span style="height: 10px; width: 10px; background-color: green; border-radius: 50%; position: relative; top: -78px; left: 45px; display: flex;"></span>
                    </div>
                </a>
            {/each}
        </List>
    {:else}
        <h4 class="text-center white">No friends connected</h4>
    {/if}

    {#if allFriends && allFriends.length > 0}
        <List class="p-10">
            <h4 style="margin: 0" class="text-center white">Latest messages</h4>
            {#each allFriends as friend}
                <a href="#/friend">
                    <Card class="p-5 mt-5 row" style="border-bottom: 1px solid lightgray" on:click={() => onSelectFriend(friend)}>
                        <img class="round-border m-0" style="height: 50px" src="{friend.profilePicture}"/>
                        <div class="col">
                            <span style="font-size: 12px; font-weight: bold" class="ml-10">{friend.lastName} {friend.firstName}</span>
                            <span style="font-size: 12px; font-family: cursive" class="ml-10">Salut à tous</span>
                        </div>
                    </Card>
                </a>
            {/each}
        </List>
    {:else}
        <h4 class="text-center white">No messages to show</h4>
    {/if}
{:else}
    <h4 class="text-center white">Nothing to show</h4>
{/if}
