<style lang="scss">
    @import "$lib/global";

    .banner {
        font-family: monospace;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1;
        white-space: nowrap;
        margin: 0;
        color: transparent;
        background-image: linear-gradient(to right, #00ffb3, #00aeff, #00ffb3, #00aeff, #00ffb3);
        background-size: 200%;
        background-position-x: 0%;
        background-clip: text;
        -webkit-background-clip: text;
        text-align: center;
        max-width: 100%;
        animation: effect 4s infinite linear;
        display: inline-block;
    }

    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 0;
        overflow: hidden;
        box-sizing: border-box;
    }

    @keyframes effect {
        0% {
            background-position-x: 0%;
        }
        100% {
            background-position-x: 200%;
        }
    }
</style>

<script lang="ts">
    import { onMount, tick } from "svelte";

    let banner: HTMLHeadingElement;
    let container: HTMLDivElement;
    let { text } = $props<{ text: string }>();

    const adjustFontSize = () => {
        if (!banner || !container) return;

        const available = Math.max(0, Math.min(container.clientWidth, window.innerWidth) - 32);
        if (available <= 0) return;

        banner.style.fontSize = "100px";
        const measuredWidth = banner.scrollWidth || banner.getBoundingClientRect().width;
        if (measuredWidth <= 0) return;

        banner.style.fontSize = `${Math.min(100, (available / measuredWidth) * 100)}px`;
    };

    onMount(() => {
        document.title = text.substring(0, 1).toUpperCase() + text.substring(1);

        const ro = new ResizeObserver(() => adjustFontSize());
        ro.observe(container);

        adjustFontSize();

        return () => {
            ro.disconnect();
        };
    });

    $effect(() => {
        text;
        tick().then(adjustFontSize);
    });
</script>

<div class="container" bind:this={container}>
    <h1 class="banner" bind:this={banner}>{text}</h1>
</div>
