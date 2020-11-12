<script lang="ts">
    import { onMount } from 'svelte';
    import List, {Item} from '@smui/list';
    import Card from '@smui/card';
    import {User, Message} from '../../models/app-model';
    import Textfield from '@smui/textfield';
    import {currentFriend, messages} from '../../stores.js';

    // TODO: change to real profil id and set change messages subscribe to my messages
    let myProfileId = 1;

    let currentFriend_ : User = null;
    let messages_: Message[] = [];
    let valueTextareaCharCount = '';

    onMount(() => {
        const input = document.getElementById('message-input');
        input.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                addMessageToStore(input.value);
                input.value = '';
            }
        });

        const subscription = currentFriend.subscribe(value => {
            currentFriend_ = value;
        });
        const msgSubscription = messages.subscribe(value => {
            if(value && value.length > 0){
                messages_ = value;
            }
        });
    });

    function addMessageToStore(text: String){
        $messages = [...$messages, {
            from: myProfileId,
            to: 2,
            time: new Date(),
            text: text
        }];
    }

    function getMessageDate(time: Date){
        const jour = time.getDay()+1;
        const month = time.getMonth()+1;
        const year = time.getFullYear();
        return `${jour}/${month}/${year} at ${time.getHours()}:${time.getMinutes()}`;
    }

</script>

{#if currentFriend_}
    <div class="friend-chat-header p-0">
        <Item class="w100 pb-5 pt-5">
            <img class="round-border m-0" style="height: 40px" src="{currentFriend_.profilePicture}"/>
            <span style="font-size: 12px;" class="ml-10 white">{currentFriend_.lastName} {currentFriend_.firstName}</span><br>
        </Item>
    </div>

    <div class="p-10">
        <List class="p-0">
            {#each messages_ as message}
                <div class="{message.from === myProfileId ? 'ml-20':'mr-20'}">
                    <Card class="{message.from === myProfileId ? 'bg-lightblue w100 mb-10':'w100 mb-10'}">
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
    <input id="message-input" class="w100 m-10" style="height: 50px; line-height: 1.3"  placeholder="Votre message"/>
</div>


