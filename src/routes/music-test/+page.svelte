<style lang="scss">
    * {
        font-family: "Tahoma";
        font-smooth: never;
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";

    let init: HTMLAudioElement;
    let loop: HTMLAudioElement;

    let isPlaying = false;
    let play = () => {};
    let setSong = () => {};
    let song = $state("fzero")

    onMount(() => {
        setSong = () => {
            init.src = `/audio/${song}-init.ogg`;
            loop.src = `/audio/${song}-loop.ogg`;
            init.load();
            loop.load();
        }
        play = () => {
            if (isPlaying) {
                loop.pause();
            } else {
                isPlaying = true;
            }
            init.currentTime = 0;
            loop.currentTime = 0;
            init.play();
            setTimeout(() => {
                loop.play();
            }, init.duration * 1000);
        }
    });
    
</script>

<audio controls preload="auto" bind:this={init}>
    <source src="/audio/fzero-init.ogg" type="audio/ogg">
</audio>
<audio controls loop preload="auto" bind:this={loop}>
    <source src="/audio/fzero-loop.ogg" type="audio/ogg">
</audio>

<button onclick={play}>Play from start</button>

<input type="text" bind:value={song} />

<button onclick={setSong}>Set song</button>