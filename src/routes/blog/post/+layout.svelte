<style lang="scss">
    @import "$lib/blog";
    .all-container {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .container {
        width: min(100%, 50rem);
        box-shadow: 0 0 1rem black;
        padding: 2rem;
        margin: 2rem 0;
    }

    .header {
        margin: 2rem;
        display: flex;
        height: 3rem;
        h2 {
            font-size: 1.7rem;
            margin-bottom: 0.5rem;
            color: #33e6ce;
            font-family: monospace;
        }
        img {
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
    }

    a,
    a:link,
    a:visited {
        font-family: monospace;
        color: #00aaff;
        text-decoration: none;
        cursor: pointer !important;
        &:hover {
            text-decoration: underline;
        }
    }

    img {
        height: 100%;
    }
</style>

<script lang="ts">
    import posts from "$lib/posts";
    import { page } from "$app/state";

    const routeName = page.url.pathname.slice(page.url.pathname.lastIndexOf("/") + 1, page.url.pathname.length);
    console.log(routeName);
    const currentPost = posts.filter(post => post.link == routeName)[0];
    let { image, title, category, date } = currentPost;
</script>

<div class="all-container">
    <div class="header">
        {#if image != ""}<img src="/{image}"> {/if}
        <div class="text">
            <h2>{title}</h2>
            <p class="meta">{category} / {new Date(date).toLocaleString("da-DK")}</p>
        </div>
    </div>
    <p><a href="..">&ldsh; Back to blog posts</a></p>
    <div class="container">
        <slot />
    </div>
</div>
