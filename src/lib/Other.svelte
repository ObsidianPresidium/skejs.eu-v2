<script lang="ts">
    import Box from "$lib/Box.svelte";
    let { title } = $props();
</script>

<Box {title}>
    <p><a href="https://google.com">Google</a></p>
</Box>