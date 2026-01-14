<style lang="scss">
    @import "$lib/global";
    pre {
        position: absolute;
        font-size: 1rem;
        white-space: pre;
        margin: 0;
        color: transparent;
        background-image: linear-gradient(to right, #00ffb3, #00aeff, #00ffb3, #00aeff, #00ffb3);
        background-size: 200%;
        background-position-x: 0%;
        background-clip: text;
        text-align: center;
        overflow: visible;
        transform-origin: center top;
        will-change: transform;
        animation: effect 4s infinite linear;
        display: inline-block
    }

    .container {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 0;
        overflow: hidden;
        
    }

    @keyframes effect {
        0% {
            background-position-x: 0%;
        }
        100% {
            background-position-x: 200%;
        }
    }
</style>

<script lang="ts">
    import figlet from "figlet";
    import { onMount } from "svelte";

    let fig = $state("Emil Aarestrup");
    let terrace = null;
    let pre: HTMLPreElement;
    let container: HTMLDivElement;
    let { text } = $props();

    const adjustScale = () => {
        if (!pre || !container) return;
        // available width for the banner (allow some padding)
        const available = Math.max(0, container.clientWidth - 32);
        const contentWidth = pre.scrollWidth || pre.getBoundingClientRect().width;
        const scale = contentWidth > 0 ? Math.min(1, available / contentWidth) : 1;
        pre.style.transform = `scale(${scale})`;
        // Keep container height matching the scaled content to avoid layout jumps
        const unscaledHeight = pre.clientHeight || pre.getBoundingClientRect().height;
        container.style.height = `${unscaledHeight * scale}px`;
    };
    
    
    onMount(() => {
        let ro: ResizeObserver | null = null;

        (async () => {
            try {
                const res = await fetch("/fonts/Terrace.flf");
                if (res.ok) {
                    const fontText = await res.text();
                    if ((figlet as any).parseFont) {
                        (figlet as any).parseFont("Terrace", fontText);
                    }
                }
            } catch (e) {
                // ignore font load errors; figlet will fall back
            }

            document.title = text.substring(0, 1).toUpperCase() + text.substring(1);

            try {
                const rendered = await figlet.text(text, {
                    font: "Terrace",
                    whitespaceBreak: true
                });
                // keep the raw output; trim leading blank lines if needed
                fig = rendered.replace(/^\n+/, "");
                fig = fig.slice(8);
            } catch (e) {
                // fallback to plain text if figlet fails
                fig = text;
            }

            // Observe container size changes (handles window resize and layout changes)
            ro = new ResizeObserver(() => adjustScale());
            ro.observe(container);

            // also adjust once now
            adjustScale();
        })();

        return () => {
            if (ro) ro.disconnect();
        };
    });
</script>

<div class="container" bind:this={container}>
    <pre bind:this={pre}>
        {fig}
    </pre>
</div>