<script lang="ts">
    import Banner from "$lib/Banner.svelte";
    import Prompt from "$lib/Prompt.svelte";
    import Tagline from "$lib/Tagline.svelte";
    import TerminalBox from "$lib/TerminalBox.svelte";

</script>
<style lang="scss">
    @import "$lib/global";
    .body {
        margin: 2rem;
    }
    .bg {
        background-color: #1c1c1f;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        top: 0;
        left: 0;
    }
    p {
        line-height: 1.15;
        &:not(:last-child) {
            margin-bottom: 1ch;
        }
    }
    a,
    a:link,
    a:visited {
        color: #00aaff;
        text-decoration: none;
        cursor: pointer !important;
        &:hover {
            text-decoration: underline;
        }
    }
    .content {
        display: flex;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .prompt-container {
        margin-top: 16ch;
    }
</style>

<div class="bg"></div>
<div class="body">
<Banner />
<Tagline />
<div class="content">
    <TerminalBox width={40} margin="1ch 2ch" title="Introduction">
        <p>This website is owned by Emil (you might also know me as <a href="https://github.com/ObsidianPresidium">ObsidianPresidium</a>, or ember!), a developer, tech and open-source enthusiast 🧑‍💻 currently working at Cargoflux located in <span title="Denmark!">🇩🇰</span>, <span title="Europe!">🇪🇺</span>.</p>
        <p>You're looking at my personal website, which I plan to turn into something cool later!</p>
    </TerminalBox>
    <TerminalBox width={35} margin="1ch 2ch" title="Favorite tools">
        <p>&nbsp;&nbsp;* 🧰 Svelte (and SvelteKit)<br>
        &nbsp;&nbsp;* 🌐 Vue.js<br>
        &nbsp;&nbsp;* 🐧 Linux<br>
        &nbsp;&nbsp;* 🤖 Arduino<br>
        &nbsp;&nbsp;* 🐍 Python<br>
        &nbsp;&nbsp;* 🐋 Docker<br>
        </p>
    </TerminalBox>
    <TerminalBox width={30} margin="1ch 2ch" title="Socials">
        <p><a href="https://github.com/ObsidianPresidium">GitHub</a></p>
        <p><a href="https://linkedin.com/in/emil-aarestrup-a353a31b6">LinkedIn</a></p>
        <p><a href="https://mastodon.nu/@obbyluckyy">Mastodon.nu</a></p>
    </TerminalBox>
    <TerminalBox width={30} margin="1ch 2ch" title="Friends of Skejs">
        <p><a href="https://bambah.eu">🐱 bambah.eu</a></p>
    </TerminalBox>
</div>
<div class="prompt-container">
<Prompt />
</div>
</div>