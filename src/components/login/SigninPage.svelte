<script lang="ts">
    import Button, {Label} from '@smui/button';
    import { profil } from '../../stores';

    let backUrl = 'http://88.125.48.25:60001';

    function onValidForm(){
        let username = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        const resGames = fetch(`${backUrl}/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(resp => {
            resp.json().then(jwt => {
                localStorage.setItem('Authorization', `JWT ${jwt[0].jwtToken}`);
                localStorage.setItem('profil', JSON.stringify(jwt[1]));
                profil.set(jwt[1]);
                document.location.href = '#/';
            });
        }, reason => {
            console.log('error while trying to log');
        });
    }

</script>

<div class="flex-center col h100">

    <img src="favicon3.png" class="w30">

    <form class="mt-50 text-center">
        <input id="login" type="text" placeholder="Login" autocomplete="username" value=""/>
        <input id="password" type="password" placeholder="Password" autocomplete="current-password" value=""/>
    </form>

    <Button color='primary' class="mt-20 w75" on:click={() => onValidForm()} variant="raised"><Label>Login</Label></Button>
    <Button href='#/signout' color='primary' class="w75" variant="raised"><Label>Create account</Label></Button>
</div>
