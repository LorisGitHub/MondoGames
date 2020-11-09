<script>
    import { onMount } from 'svelte';
    import {events} from '../../stores.js';
    import {Event} from '../../models/app-model'
    import Card, {Content} from '@smui/card';
    import List, {Item, Text} from '@smui/list';
    import Map from './Map.svelte';
    import MapMarker from './MapMarker.svelte';

    let allEvents = [];

    onMount(() => {
        const subscription = events.subscribe(value => {
            if(value && value.length > 0){
                allEvents = value;
                console.log(allEvents);
            }
        });
    });

    function onSelectEvent(event){
        console.log(event);
    }
</script>

{#if allEvents && allEvents.length > 0}
    <div class="map-container">
        <Map lat={43.9} lon={4.85} zoom={7}>
            {#each allEvents as event}
                <MapMarker on:click={() => onSelectEvent(event)} lat={event.lat} lon={event.lon} label={event.nom}/>
            {/each}
            <!--    <MapMarker lat={43.967911} lon={4.899947} label="Vedène"/>-->
        </Map>
    </div>

    <List class="p-0">
        {#each allEvents as event}
<!--            <a href="#/event">-->
                <Card class="m-10 pb-5 pt-5" style="border-bottom: 1px solid lightgray" on:click={() => onSelectEvent(event)}>
                    <div class="row">
                        <span style="font-size: 12px; font-weight: bold" class="ml-10">{event.nom}</span>
                    </div>
                    <div class="row">
                        <span style="font-size: 12px;" class="ml-10">{event.desc}</span>
                    </div>
                </Card>
<!--            </a>-->
        {/each}
    </List>
{/if}