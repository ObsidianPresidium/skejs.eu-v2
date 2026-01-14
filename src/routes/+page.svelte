<script lang="ts">
    import Banner from "$lib/Banner.svelte";
    import Prompt from "$lib/Prompt.svelte";
    import Tagline from "$lib/Tagline.svelte";
    import TerminalBox from "$lib/TerminalBox.svelte";
    import { setSiteName, siteName } from "$lib/siteName";
    import { onMount } from "svelte";
    
    onMount(() => {
        setSiteName(window.location.hostname);
    })

</script>
<style lang="scss">
    @import "$lib/global";
    @import "include-media/dist/include-media";
    .body {
        margin: 2rem;
        @include media("<=tablet") {
            margin: 0.5rem;
        }
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
        @include media("<=tablet") {
            scale: 0.75;
            transform-origin: center top;
            margin-bottom: -100%;
        }
    }

    .prompt-container {
        margin-top: 16ch;
    }
</style>

<div class="bg"></div>
<div class="body">
<Banner text={$siteName}/>
<Tagline />
<div class="content">
    <TerminalBox width={38} margin="1ch 2ch" title="Introduction">
        <p>This website is owned by Emil (you might also know me as <a href="https://github.com/ObsidianPresidium">ObsidianPresidium</a>, or ember!), a developer, tech and open-source enthusiast 🧑‍💻 located in <span title="Denmark!">🇩🇰</span>, <span title="Europe!">🇪🇺</span></p>
        <p>I am currently working at <a href="https://cargoflux.com">Cargoflux 📦</a> as a full-stack Ruby on Rails ♦️ developer intern.</p>
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
        <p><a href="blog">Blog</a></p>
        <p><a href="https://github.com/ObsidianPresidium">GitHub</a></p>
        <p><a href="https://linkedin.com/in/emil-aarestrup-a353a31b6">LinkedIn</a></p>
        <p><a href="https://mastodon.nu/@obbyluckyy">Mastodon.nu</a></p>
    </TerminalBox>
    <TerminalBox width={30} margin="1ch 2ch" title="Friends of Skejs">
        <p><a href="https://tarpie.xyz">🌸 tarpie.xyz</a></p>
        <p><a href="https://bambah.eu">🐱 bambah.eu</a></p>
        
    </TerminalBox>
    <TerminalBox width={40} margin="1ch 2ch" title="Kudos">
        <p>This website is made with ❤️ in Svelte and deployed by Vercel. The ASCII art is programmatically generated with <a href="https://www.npmjs.com/package/figlet">figlet</a>.</p>
        <p><a href="https://github.com/ObsidianPresidium/skejs.eu-v2">View the source code for this site here</a></p>
    </TerminalBox>
</div>
<div class="prompt-container">
<Prompt />
</div>
</div>