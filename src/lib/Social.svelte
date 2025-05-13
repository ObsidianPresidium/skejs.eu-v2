<style lang="scss">
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
    div:hover img, div:hover .icon {
        animation: bounce 300ms;
    }

    img, .icon {
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
    }

    a, a:link, a:visited, a:active {
        color: white;
        text-decoration: none;
    }

    p {
        color: white;
        font-family: sans-serif;
    }

    @keyframes bounce {
        0% {
            transform: none;
        }
        50% {
            transform: scale(1.2) rotate(15deg);
        }
        100% {
            transform: none;
        }
    }
</style>

<script lang="ts">
    let { image = "", text, link, emoji = "" } = $props();
</script>

<a href={link}>
    <div>
        {#if image}
            <img src="/socials/{image}" alt="{text}">
        {/if}
        {#if emoji}
            <span class="icon">{emoji}</span>
        {/if}
        <p>{text}</p>
    </div>
</a>