<style lang="scss">
    .progress-bar {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 4px;
        height: 1.5rem;
        width: 240px;
        padding: 4px 4px 2px;
        box-sizing: border-box;
        background-color: #282421;
        &__pill {
            width: 8px;
            height: 100%;
            background-color: white;
        }
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    let { width, progress = $bindable() } = $props();
    let progressBar: HTMLDivElement;
    let progressPills: boolean[] = $state([]);
    let maxPills = Math.floor((width - 4) / 12);
    let filledPills = 0;

    function setProgressBar() {
        progressPills = [];
        while (progressPills.length <= progress * maxPills) {
            progressPills.push(true);
            filledPills = progressPills.length;
        }
        while (progressPills.length < maxPills) {
            progressPills.push(false);
        }
    }
    setProgressBar();
    console.log(progressPills, filledPills, maxPills);

    onMount(() => {
        progressBar.style.width = `${width}px`;
    });
</script>

<div class="progress-bar" bind:this={progressBar}>
    {#each progressPills as pill}
        {#if pill}
            <div class="progress-bar__pill"></div>
        {/if}
    {/each}
</div>