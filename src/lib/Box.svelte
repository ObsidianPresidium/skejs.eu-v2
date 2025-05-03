<style lang="scss">
    @import "@fontsource/inter";

    $link-bracket-margin: 0.6rem;

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

    .flex {
        display: flex;
        flex-wrap: wrap;
        row-gap: 1rem;
        column-gap: 2rem;
        margin: 0.5rem;
    }
    :global(a, a:link, a:visited, a:active) {
        color: #00aaff;
        text-decoration: none;
        position: relative;
    }

    :global(a:hover::before) {
        transform: translateX(0.2rem);
    }

    :global(a:hover::after) {
        transform: translateX(-0.2rem);
    }

    :global(a::before) {
        content: "[";
        left: $link-bracket-margin * -1;
    }

    :global(a::after) {
        content: "]";
        right: $link-bracket-margin * -1;
    }

    :global(a::before, a::after) {
        font-weight: 100;
        position: absolute;
        scale: 1 1.5;
        translate: 0 -0.175rem;
        transition: transform 0.1s ease-out;
    }

    :global(p) {
        font-family: sans-serif;
        color: black;
        line-height: 1.15;
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    :global(h2) {
        font-weight: 900;
        font-size: 1rem;
        color: white;
        text-align: center;
        font-family: "Inter", sans-serif;
        margin-bottom: 1rem;
    }
</style>

<script lang="ts">
    let { title } = $props();
</script>

<div class="box">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <div class="flex">
        <slot />
    </div>
</div>
