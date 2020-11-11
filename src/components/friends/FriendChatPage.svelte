<script lang="ts">
    import { onMount } from 'svelte';
    import List, {Item, Text} from '@smui/list';
    import Card, {Content} from '@smui/card';
    import {User} from '../../models/app-model';
    import Textfield, {Input, Textarea} from '@smui/textfield';
    import CharacterCounter from '@smui/textfield/character-counter/index';
    import {currentFriend} from '../../stores.js';

    let currentFriend_ : User = null;
    let valueTextareaCharCount = '';

    onMount(() => {
        const subscription = currentFriend.subscribe(value => {
            currentFriend_ = value;
            console.log(value);
        });
    });

    const messages = [
        {
            me: true,
            time: new Date(),
            text: 'Salut ça va ?'
        },
        {
            me: false,
            time: new Date(),
            text: 'Bien et toi ?'
        },
        {
            me: true,
            time: new Date(),
            text: 'Bien, merci'
        },
        {
            me: false,
            time: new Date(),
            text: 'Ok'
        },
        {
            me: false,
            time: new Date(),
            text: 'Grosse discussion'
        },
        {
            me: true,
            time: new Date(),
            text: 'J\'avoue c\'est naze'
        },
        {
            me: false,
            time: new Date(),
            text: 'Pire'
        },
        {
            me: true,
            time: new Date(),
            text: 'Salut du coup'
        },
    ];

    function getMessageDate(time: Date){
        const jour = time.getDay()+1;
        const month = time.getMonth()+1;
        const year = time.getFullYear();
        return `${jour}/${month}/${year}`;
    }

</script>

{#if currentFriend_}
    <div class="friend-chat-header p-0">
        <Item class="w100 pb-5 pt-5">
            <img class="round-border m-0" style="height: 40px" src="{currentFriend_.pp}"/>
            <span style="font-size: 12px;" class="ml-10 white">{currentFriend_.prenom} {currentFriend_.nom}</span><br>
        </Item>
    </div>

    <div class="p-10">
        <List class="p-0">
            {#each messages as message}
                <div class="{message.me ? 'ml-20':'mr-20'}">
                    <Card class="{message.me ? 'bg-lightblue w100 mb-10':'w100 mb-10'}">
                        <Item class="pb-5 pt-5" style="border-bottom: 1px solid lightgray; width: auto">
                            <span style="position: absolute; font-style: italic; font-size: 10px; bottom: -4px; right: 4px;">{getMessageDate(message.time)}</span>
                            <span style="font-size: 12px; font-family: cursive" class="ml-10">{message.text}</span>
                        </Item>
                    </Card>
                </div>
            {/each}
        </List>
    </div>
{/if}

<div class="friend-chat-saisie">
    <Textfield class="w100 m-10" style="height: 50px; line-height: 1.3" textarea lineRipple={false} bind:value={valueTextareaCharCount} label="Votre message"/>
</div>


