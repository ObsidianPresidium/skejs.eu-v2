<style lang="scss">
    @import "@fontsource/inter";
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: -1;
        background: linear-gradient(143deg, #c42525, #af126d, #04a9db);
        background-size: 600% 600%;
        
        animation: backgroundLoadingAnimation 8000ms infinite;

        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
        }
    }

    .hidden {
        display: none;
    }

    .control-panel {
        p, a, a:link, a:visited, a:active, label {
            font-family: sans-serif;
            line-height: 1.15;
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
        a, a:link, a:visited, a:active, label {
            color: #00aaff;
            text-decoration: none;
        }
        p {
            font-family: sans-serif;
            color: black;
            line-height: 1.15;
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
        label {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            background-color: transparent;
            border-radius: 1rem;
            transition: background-color 0.1s ease, color 0.3s ease;
        }
        .checkbox:checked + label {
            background-color: #0093dd;
            color: white;
        }

    }

    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin: 2rem;

        .box {
            max-width: 30rem;
            min-width: 20rem;
            min-height: 10rem;
            padding: 1rem;
            background-color: #ffffff88;
            border-radius: 1rem;
            backdrop-filter: blur(10px);
            box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.2);
        }
    }

    h1 {
        font-weight: 900;
        font-size: 3rem;
        color: white;
        text-align: center;
        margin-top: 2rem;
        font-family: "Inter", sans-serif;
    }

    h2 {
        font-weight: 900;
        font-size: 1rem;
        color: white;
        text-align: center;
        font-family: "Inter", sans-serif;
        margin-bottom: 1rem;
    }

    @keyframes backgroundLoadingAnimation {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import type { Component } from 'svelte';
    import CounterStrike from '$lib/CounterStrike.svelte';
    import TF2 from '$lib/TF2.svelte';
    import Other from '$lib/Other.svelte';

    type Box = [Component<any>, {title: string}];
    type TBoxArray = Box[];

    let showCs = $state(false);
    let video: HTMLVideoElement;
    let videoHidden = $state(true);
    let boxArray: TBoxArray = [
        [CounterStrike, {title: "Counter-Strike links"}],
        [TF2, {title: "Team Fortress 2 links"}],
        [Other, {title: "Other links"}]
    ];
    let boxStateArray = $state(boxArray.map(() => false));

    onMount(() => {
        video.addEventListener("durationchange", () => {
            video.currentTime = Math.random() * video.duration;
            video.addEventListener("canplay", () => {
                videoHidden = false;
            });
        });
    });
</script>

<div class="background">
    <video bind:this={video} class:hidden={videoHidden} autoplay muted loop src="/video/zelda.webm"></video>
</div>

<h1>Steam Start Page</h1>

<div class="boxes">
    <div class="control-panel shadow box">
        <h2>Control Panel</h2>
        <input type="checkbox" class="checkbox hidden" id="cs" bind:checked={boxStateArray[0]}>
        <label for="cs">CS links</label>
        <input type="checkbox" class="checkbox hidden" id="tf2" bind:checked={boxStateArray[1]}>
        <label for="tf2">TF2 links</label>
        <input type="checkbox" class="checkbox hidden" id="other" bind:checked={boxStateArray[2]}>
        <label for="other">Other links</label>
    </div>
    {#each boxStateArray as boxIsOn, i}
        {#if boxIsOn}
            <svelte:component this={boxArray[i][0]} {...boxArray[i][1]} />
        {/if}
    {/each}
</div>