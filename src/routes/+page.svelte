<style lang="scss">
    @import "@fontsource/cantarell/700";
    @import "@fontsource/inter";

    .background {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -999;
        background-image: radial-gradient(at top right, #260c86, #15062b);
        background-size: 200% 200%;
        width: 100vw;
        height: 100vh;
        animation: siteIn 1500ms ease-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    
    h1 {
        color: white;
        font-size: 3rem;
        font-family: "Cantarell", sans-serif;
        margin: 2rem 0;
        text-align: center;
    }
    
    p {
        font-family: sans-serif;
        color: white;
        line-height: 1.15;
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
    
    a {
        &:link,
        &:visited,
        &:active {
            color: #00aaff;
            text-decoration: none;
        }
    }
    
    .item {
        border-radius: 1rem;
        background-color: rgba(255, 255, 255, 0.15);
        padding: 1rem;
        width: 25rem;
        flex-basis: 25rem;
        flex-grow: 1;
    }
    
    .content-box {
        margin: 1rem auto;
        max-width: min(100%, 60rem);
    }
    
    .item-box {
        margin: 0 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }
    
    ul {
        list-style: none;
        margin: -0.5rem 1rem 1rem;
    }
    
    li {
        position: relative; 
        color: white;
        font-family: sans-serif;
        line-height: 1.15;
        margin-left: 1rem;
        &:not(:last-child) {
            margin-bottom: 0.2rem;
        }
        &::before {
            content: "➙";
            position: absolute;
            color: white;
            left: -1rem;
            margin-right: 0.5rem;
            opacity: 0;
            transform: translateX(-1rem);
            transition: all 150ms ease-in-out;
        }
        &:hover::before {
            transform: none;
            opacity: 1;
        }
    }
    
    h2 {
        color: white;
        font-size: 2rem;
        font-family: "Inter", sans-serif;
        margin-bottom: 2rem;
        text-align: left;
        text-transform: uppercase;
        padding-left: 1rem;
        padding-bottom: 0.25rem;
        border-bottom: 0.1rem solid white;
    }

    .wave {
        animation: wave 3s 2;
    }

    .hand {
        display: inline-block;
        transform-origin: 70% 70%;
        cursor: grab;
        transition: scale 500ms, rotate 500ms;
    }

    // .hand:hover {
    //     scale: 0.6;
    //     rotate: 30deg;
    // }

    .high-five {
        animation: high-five 500ms 1 ease-out;
        transform-origin: 70% 70%;
        rotate: 30deg;
        cursor: grab;
    }

    .particles {
        border-radius: 50%;
        border: 1px solid white;
        animation: particles 500ms 1;
        translate: -2.75rem 1rem;
        position: absolute;
        width: 3rem;
        height: 3rem;
        pointer-events: none;
    }

    .hidden {
        display: none !important;
    }
    
    @keyframes siteIn {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 50% 50%;
        }
    }

    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        12.5% {
            transform: rotate(15deg);
        }
        25% {
            transform: rotate(0deg);
        }
        37.5% {
            transform: rotate(15deg);
        }
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @keyframes high-five {
        0% {
            transform: none;
        }
        25% {
            transform: scale(3) translate(15%, 7%);
        }
        50% {
            transform: scale(3) translate(15%, 7%);
        }
        100% {
            transform: none;
        }
    }

    @keyframes particles {
        0% {
            opacity: 0;
        }
        33% {
            transform: scale(2);
            opacity: 0;
        }
        50% {
            transform: scale(4);
            opacity: 1;
        }
        100% {
            transform: scale(8);
            opacity: 0;
        }
    }
</style>

<script lang="ts">
    import Social from "$lib/Social.svelte";
    import { onMount } from "svelte";

    let siteName = $state("my website");
    let socialsBoxRelativePosition = $state("on the right");
    const getSocialsBoxRelativePosition = () => {
        if (window.innerWidth < 928) {
            return "below";
        } else {
            return "on the right";
        }
    };
    // TODO: fix the animation!
    // let hand: HTMLSpanElement;
    // let particles: HTMLSpanElement;
    // let animationEndHandler: () => void;
    // let clickHandler: () => void;
    // onMount(() => {
    //     hand.classList.add("wave");
    //     animationEndHandler = () => {
    //         hand.classList.remove("wave");
    //     };
    //     clickHandler = () => {
    //         hand.classList.add("high-five");
    //         particles.classList.remove("hidden");
    //         animationEndHandler = () => {
    //             hand.classList.remove("high-five");
    //             particles.classList.add("hidden");
    //         };
    //     };
    // });

    onMount(() => {
        siteName = window.location.hostname;
        document.title = siteName.substring(0, 1).toUpperCase() + siteName.substring(1);
        socialsBoxRelativePosition = getSocialsBoxRelativePosition()
        window.addEventListener("resize", () => socialsBoxRelativePosition = getSocialsBoxRelativePosition());
    });
</script>

<div class="background">
</div>
<div class="content-box">
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
    <h1>Welcome to {siteName}! <span class="hand">👋</span><span class="particles hidden">&nbsp;</span></h1>
    <div class="item-box">
        <div class="bio item">
            <p>This website is owned by Emil (you might also know me as <a href="https://github.com/ObsidianPresidium">ObsidianPresidium</a>, or ember!), a developer, tech and open-source enthusiast 🧑‍💻 currently studying at AspIT Copenhagen 👨🏻‍🎓 located in <span title="Denmark!">🇩🇰</span>, <span title="Europe!">🇪🇺</span>.</p>
            <p>You're looking at my personal website, which I plan to turn into something cool later!</p>
            <p>My favorite tools to work with are:</p>
            <ul>
                <li>🧰 Svelte (and SvelteKit!)</li>
                <li>🌐 Web</li>
                <li>🐧 GNU/Linux</li>
                <li>🤖 Arduino</li>
                <li>🐍 Python</li>
                <li>🔷 .NET</li>
                <li>🐋 Docker</li>
            </ul>
            <p>Besides development, my hobbies are linguistics, e-sports and hiking!<p>
            <p>Use the box {socialsBoxRelativePosition} to connect with me!</p>
        </div>
        <div class="socials-box item">
            <h2>Socials</h2>
            <div class="socials">
                <Social image="github.svg" text="GitHub" link="https://github.com/ObsidianPresidium" />
                <Social image="mastodon.svg" text="Mastodon" link="https://mastodon.nu/@obbyluckyy" />
            </div>
        </div>
        <div class="friends-box item">
            <h2>Friends of skejs</h2>
            <div class="friends">
                <Social emoji="🐱" text="bambah.eu" link="https://bambah.eu" />
            </div>
        </div>
    </div>
</div>