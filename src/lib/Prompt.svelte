<style lang="scss">
    pre {
        color: #2db878;
    }

    .blink {
        color: white;
        animation: blink 1s linear infinite;
    }

    @keyframes blink {
        0% {
            color: transparent;
        }

        49% {
            color: transparent;
        }

        50% {
            color: white;
        }

        100% {
            color: white;
        }
    }
</style>

<script lang="ts">
    let siteName = "aarestrup.dev";
</script>

<pre>emil@{siteName}<span style="color: white">:</span>~$ <span class="blink">█</span></pre>