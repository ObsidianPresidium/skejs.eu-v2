<style lang="scss">
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
    div:hover img {
        animation: bounce 300ms;
    }

    img {
        width: 2rem;
        height: 2rem;
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
    let { image, text, link } = $props();
</script>

<a href={link}>
    <div>
        <img src="/socials/{image}" alt="{text}">
        <p>{text}</p>
    </div>
</a>