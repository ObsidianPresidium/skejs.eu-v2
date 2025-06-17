<script lang="ts">
    import Box from "$lib/Box.svelte";
    let { title } = $props();
</script>

<Box {title}>
    <p><a href="https://play.refrag.gg">Refrag</a></p>
    <p><a href="https://hltv.org">HLTV</a></p>
    <p><a href="https://steamcommunity.com/market/search?appid=730">Market</a></p>
    <p><a href="https://csnades.gg">CSNades</a></p>
</Box>