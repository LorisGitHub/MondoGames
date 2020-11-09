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

    function onCreateAccount(){
        window.location.href = '#/signout';
    }

</script>

<div class="flex-center col h100">

    <img src="favicon3.png" class="w30">

    <input id="login" class="mt-50" type="text" placeholder="Login" value="{login}"/>
    <input id="password" type="password" placeholder="Password" value="{password}"/>

    <Button color='primary' class="mt-20 w75" on:click={() => onValidForm()} variant="raised"><Label>Login</Label></Button>
    <Button color='primary' class="w75" on:click={() => onCreateAccount()} variant="raised"><Label>Create account</Label></Button>
</div>
