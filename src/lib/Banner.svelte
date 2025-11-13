<style lang="scss">
    @import "$lib/global";
    pre {
        position: absolute;
        font-size: 1rem;
        margin: 1ch;
        color: transparent;
        background-image: linear-gradient(to right, #00ffb3, #00aeff, #00ffb3, #00aeff, #00ffb3);
        background-size: 200%;
        background-position-x: 0%;
        background-clip: text;
        text-align: center;
        overflow: visible;
        transform-origin: 0% 0%;

        animation: effect 4s infinite linear;
    }

    .container {
        display: flex;
        justify-content: flex-start;
        width: min-content;
        
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

    let siteName = "aarestrup.dev";
    let fig = $state("Emil Aarestrup");
    let terrace = null;
    let pre: HTMLPreElement;
    let testSize = () => null;
    
    
    onMount(async () => {
        let fontContents = fetch("/fonts/Terrace.flf")
        fontContents.then((body) => {
            terrace = body.text;
        });
        //siteName = window.location.hostname;
        document.title = siteName.substring(0, 1).toUpperCase() + siteName.substring(1);
        await fontContents;
        fig = (await figlet.text(siteName, {
            font: "Terrace",
            whitespaceBreak: true
        })).slice(8);

        testSize = () => {
            let figLength = (fig.slice(0, fig.indexOf("\n"))).length;
            console.log(window.innerWidth);
            const marg = 48;
            const w = figLength * 8 + (460);
            console.log(w);
            if (window.innerWidth < w) {
                const scalar = window.innerWidth / (w);
                pre.style.scale = scalar.toString();
            } else {
                pre.style.scale = "none";
            }
        };

        window.onresize = testSize;
        testSize();
    });
</script>

<div class="container">
    <pre bind:this={pre}>
        {fig}
    </pre>
</div>