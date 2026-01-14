<style lang="scss">
    * {
        text-decoration: none;
        cursor: pointer;
        transition: all 100ms;
    }
    .card {
        border: 0.2rem solid white;
        border-radius: 2rem;
        background-color: #1c1c1f;
        width: 20rem;
        height: 10rem;
        padding: 1rem;
        margin: 2rem;
        &:hover {
            border-color: #33e6ce;
            background-color: darken(#33e6ce, 0%);
            p {
                color: #1c1c1f;
            }
            h2 {
                color: white;
            }

        }
    }
    h2 {
        font-size: 1.7rem;
        color: #33e6ce;
        font-family: monospace;
        margin-top: -0.5rem;
        margin-bottom: 0.75rem;
        line-height: 2rem;
    }
    img {
        height: 2rem;
        margin-right: 0.5rem;
    }
    p {
        color: white;
    }
    .meta {
        font-family: monospace;
        font-size: 0.75rem;
    }
    .desc {
        font-family: sans-serif;
        line-height: 1.25rem;
    }
</style>

<script lang="ts">
    let { title, category, description, image, date, link } = $props();
</script>

<a href="blog/post/{link}">
    <div class="card">
        <h2>{#if image != ""}<img src={image}> {/if}{title}</h2>
        <p class="meta">{category} / {new Date(date).toLocaleString("da-DK")}</p>
        <hr>
        <p class="desc">{description}</p>
    </div>
</a>