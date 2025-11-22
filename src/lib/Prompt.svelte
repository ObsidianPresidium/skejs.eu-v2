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

    .dont-blink {
        animation: none !important;
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
    let isWriting = $state(false);
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

    const typingTime = (text: string) => text.length * (typeSpeed / 2) + (text.length) * typeSpeed;

    let typeStuff = () => {
        const weTypingThis = funnyPrompts[funnyPromptsWritten % funnyPrompts.length];
        setTimeout(() => {
            let index = 0;
            for (let char of weTypingThis.split("")) {
                // Write characters
                setTimeout(() => {
                    text += char;
                }, index * typeSpeed);

                // Delete characters
                setTimeout(() => {
                    text = text.slice(0, -1);
                }, index * (typeSpeed / 2) + (weTypingThis.length) * typeSpeed + displayTime);

                index ++;
            }

            // Don't blink the cursor while deleting
            setTimeout(() => {
                isWriting = true;
            }, (typeSpeed / 2) + (weTypingThis.length) * typeSpeed + displayTime);

            // Don't blink the cursor while writing
            isWriting = true;

            // Blink the cursor after finishing writing
            setTimeout(() => {
                isWriting = false;
            }, typingTime(weTypingThis));

            setTimeout(() => {
                // Blink the cursor after finishing deleting
                isWriting = false;

                funnyPromptsWritten ++;
                // Queue next funny prompt up
                typeStuff();
            }, typingTime(weTypingThis) + displayTime)
        }, 15000);
    };

    onMount(typeStuff);
</script>

<pre>emil@{$siteName}<span style="color: white">:</span>~$ <span style="color: white">{text}</span><span class="blink {isWriting ? 'dont-blink' : ''}">█</span></pre>