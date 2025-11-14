<style lang="scss">
    @import "include-media/dist/include-media";
    p {
        margin-bottom: 4ch;
        font-style: italic;
        text-align: center;
        @include media("<=tablet") {
            font-size: 1.25ch;
        }
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";

    let text = $state("");
    let taglines = [
        "Proud owner of smartphones before iPhone",
        "'Artificial intelligence is inferior to natural stupidity'? Have you seen what happens when you combine them?",
        "Vacuum cleaners have a tendency to suck",
        "#BringBackAero!",
        "What's wrong with GNOME?",
        "Svelte-pilled at first sight",
        "Are you guys going trick or treating?",
        "What's the deal with airline food?",
        "Currently worrying about whether I firewalled that SSH port or not",
        "Yeah, that'll *definitely* take one or two days tops",
        "Y'all gotta try saftemælk",
        "Probably yapping about Norse linguistics again",
        "Who's rallying the troops?",
        "I would put a joke about UDP here, but you might not get it"
    ];

    text = taglines[Math.floor(Math.random() * taglines.length)];
</script>

<p>"{text}"</p>