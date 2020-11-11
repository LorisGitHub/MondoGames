<script lang="ts">
    import { onMount } from 'svelte';
    import {User} from '../../models/app-model';
    import Card from '@smui/card';
    import {Icon} from '@smui/button';
    import {profil} from '../../stores.js';

    let profil_: User = null;
    let ddnString: String = null;
    let backUrl = 'http://88.125.48.25:60001';

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    onMount(() => {
        const subscription = profil.subscribe(value => {
            profil_ = value;
            if(profil_){
                const ddn = new Date(profil_.birthdate);
                let month = '' + (ddn.getMonth() +1);
                let day = '' + ddn.getDate();
                let year = ddn.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                ddnString = [day, monthNames[month-1], year].join(' ');
            }
        });
    });

    function HelloWorldTest(){
        const resUsers = fetch(`${backUrl}/helloWorld`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        }).then(value => {
            value.json().then(data => {
                console.log(data);
            })
        }, reason => {
            console.log('error');
        });
    }


</script>

{#if profil_}
    <div class="m-10">
        {#if profil_.profilePicture}
            <div class="flex-center mt-10">
                <img src="{profil_.profilePicture}" class="w30"/>
            </div>
        {/if}
        <Card class="w100 mt-10 p-10">
            <h5 class="shop-item-title" style="margin: 20px 0 0">{profil_.firstName} {profil_.lastName}</h5>
            <div class="row mt-10" style="align-items: center">
                <Icon class="material-icons">calendar_today</Icon>
                <span style="font-size: 12px; line-height: initial" class="ml-10">{ddnString}</span>
            </div>
            <div class="row mt-10" style="align-items: center">
                <Icon class="material-icons">games</Icon>
                <span style="font-size: 12px; line-height: initial" class="ml-10">Monopoly, Uno</span>
            </div>
            <div class="row mt-10" style="align-items: center">
                <Icon class="material-icons">groups</Icon>
                <span style="font-size: 12px; line-height: initial" class="ml-10">CERI Guild</span>
            </div>
            {#if profil_.adress}
                <div class="row mt-10" style="align-items: center">
                    <Icon class="material-icons">room</Icon>
                    <span style="font-size: 12px; line-height: initial" class="ml-10">{profil_.adress.name}, {profil_.adress.city}, {profil_.adress.zip}</span>
                </div>
            {/if}
        </Card>
    </div>
{/if}


