<script lang="ts">
    import { onMount } from 'svelte';
    import {events, currentEvent} from '../../stores.js';
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
        currentEvent.set(event);
    }
</script>

{#if allEvents && allEvents.length > 0}
    <div class="map-container">
        <!-- TODO: remplacer les coordonnées par les coordonnées de l'utilisateur ( comment faire sans cordova ? ) -->
        <Map lat={43.9} lon={4.85} zoom={7}>
            {#each allEvents as event}
                <MapMarker on:click={() => onSelectEvent(event)} lat={event.address.lat} lon={event.address.lon} label={event.name}/>
            {/each}
        </Map>
    </div>

    <List class="p-0">
        {#each allEvents as event}
            <a href="#/event">
                <Card class="m-10 pb-5 pt-5" style="border-bottom: 1px solid lightgray" on:click={() => onSelectEvent(event)}>
                    <div class="row">
                        <span style="font-size: 12px; font-weight: bold" class="ml-10">{event.name}</span>
                    </div>
                    <div class="row">
                        <span style="font-size: 12px; line-height: initial" class="ml-10">{event.address.name}, {event.address.city}, {event.address.zip}</span>
                    </div>
                </Card>
            </a>
        {/each}
    </List>
{:else}
    <h4 class="text-center white">No events to show</h4>
{/if}