<style lang="scss">
    @import "include-media/dist/include-media";
    pre {
        color: #2db878;
        text-wrap-mode: wrap;
    }

    .blink {
        color: white;
        animation: blink 1s linear infinite;
    }

    pre {
        @include media("<=tablet") {
            font-size: 1.25ch;
        }
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
    import { siteName } from "$lib/siteName";
    import { onMount } from "svelte";

    let text = $state("");
    let funnyPromptsWritten = 0;
    const funnyPrompts = [
        "sudo rm -rf --no-preserve-root /",
        "sudo dd if=/dev/urandom of=/dev/nvme0n1",
        ":(){ :|:& };:",
        "sudo systemctl disable gdm",
        "sudo dnf install --assume-yes snapd",
        "pip3 install WoeUSB-ng"
    ]
    const typeSpeed = 80;
    const displayTime = 6000;

    let typeStuff = () => {
        const weTypingThis = funnyPrompts[funnyPromptsWritten % funnyPrompts.length];
        setTimeout(() => {
            let index = 0;
            for (let char of weTypingThis.split("")) {
                setTimeout(() => {
                    text += char;
                }, index * typeSpeed);

                setTimeout(() => {
                    text = text.slice(0, -1);
                }, index * (typeSpeed / 2) + (weTypingThis.length) * typeSpeed + displayTime);

                index ++;
            }

            setTimeout(() => {
                funnyPromptsWritten ++;
                typeStuff();
            }, weTypingThis.length * (typeSpeed / 2) + (weTypingThis.length) * typeSpeed + displayTime)
        }, 15000);
    };

    onMount(typeStuff);
</script>

<pre>emil@{$siteName}<span style="color: white">:</span>~$ <span style="color: white">{text}</span><span class="blink">█</span></pre>