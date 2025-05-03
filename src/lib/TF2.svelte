<script lang="ts">
    import Box from "$lib/Box.svelte";
    let { title } = $props();
</script>

<Box {title}>
    <p><a href="https://scrap.tf">Scrap.tf</a></p>
    <p><a href="https://uncletopia.com/servers">Uncletopia</a></p>
    <p><a href="https://steamcommunity.com/market/search?appid=440">Market</a></p>
</Box>