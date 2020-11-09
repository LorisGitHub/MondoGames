<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Button, {Group, Label} from '@smui/button';
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';

    let login = '';
    let password = '';

    onMount(() => {
    });

    function onValidForm(){
        let log = document.getElementById("login").value;
        let pwd = document.getElementById("password").value;
        console.log("valid form", log, pwd);
    }

</script>

<div class="flex-center col h100">

    <input id="email" type="email" placeholder="Email" value=""/>
    <input id="login" type="text" placeholder="Login" value="{login}"/>
    <input id="password" type="password" placeholder="Password" value="{password}"/>
    <input id="tel" type="email" placeholder="Telephone" value=""/>

    <Button color='primary' class="mt-20 w75" on:click={() => onValidForm()} variant="raised"><Label>Create</Label></Button>
</div>
