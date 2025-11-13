<style lang="scss">
    @import "$lib/global";
    .box-frame {
        display: grid;
        grid-template-columns: repeat(1ch 1fr 1ch);
        width: min-content;
    }

    .horizontal-window-decoration {
        color: white;
        display: grid;
        gap: 0;
        grid-template-columns: 1ch 1fr 1ch;
        grid-template-rows: 1ch 1fr 1ch;
        * {
            margin: 0;
        }
    }

    
    .corner {
        width: min-content;
        height: min-content;
    }

    .bar {
        text-align: center;
    }

    .decor-and-content {
        margin: 0 1ch;
        position: relative;
    }

    .content {
        height: min-content;
    }

    .vertical-window-decoration {
        position: absolute;
        height: 100%;
        width: 1ch;
        overflow: hidden;
        top: 0;
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    let upperBar: HTMLParagraphElement, lowerBar: HTMLParagraphElement, leftBar: HTMLParagraphElement, rightBar: HTMLParagraphElement;
    let windowMaxHeight: number;
    let root: HTMLDivElement;
    let content: HTMLDivElement;
    let { width, margin = "0", title="" } = $props();
    const upperBarWindowDecoration = () => {
        if (title === "") return "=".repeat(width);
        return `==[${title}]${'='.repeat(width - 4 - title.length)}`;
    };

    onMount(() => {
        content.style.margin = `${margin}`;
    });
</script>

<div class="box-frame" bind:this={root}>
    <div class="horizontal-window-decoration">
        <p class="corner">+</p>
        <p class="bar" bind:this={upperBar}>{ upperBarWindowDecoration() }</p>
        <p class="corner">+</p>
    </div>
    <div class="decor-and-content">
        <p class="vertical-window-decoration" style="left: -1ch" bind:this={leftBar}>{"|\n".repeat(9999)}</p>
        <div class="content" bind:this={content} bind:clientHeight={windowMaxHeight}>
            <slot />
        </div>
        <p class="vertical-window-decoration" style="right: -1ch" bind:this={rightBar}>{"|\n".repeat(9999)}</p>
    </div>
    <div class="horizontal-window-decoration">
        <p class="corner">+</p>
        <p class="bar" bind:this={lowerBar}>{ "=".repeat(width) }</p>
        <p class="corner">+</p>
    </div>
</div>