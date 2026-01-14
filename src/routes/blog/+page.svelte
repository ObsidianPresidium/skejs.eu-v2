<style lang="scss">
    @import "$lib/global";
    .posts-container {
        display: flex;
        flex-wrap: wrap;
        width: min(100%, 80rem);
    }

    .all-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    p {
        text-align: center;
    }
    a,
    a:link,
    a:visited {
        color: #00aaff;
        text-decoration: none;
        cursor: pointer !important;
        &:hover {
            text-decoration: underline;
        }
    }
</style>

<script lang="ts">
    import Card from "$lib/Card.svelte";
    import Banner from "$lib/Banner.svelte";
    import posts from "$lib/posts";
</script>

<Banner text="skejs blog" />

<div class="all-container">
<div class="posts-container">
    {#each posts as post}
    <Card {...post} />
    {/each}
</div>
</div>
<p><a href="..">&ldsh; Back to home</a></p>