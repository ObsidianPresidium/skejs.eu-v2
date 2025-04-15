<style lang="scss">
    @font-face {
        font-family: "tf2-build";
        src: url("/tf2build.ttf") format("truetype");
    }

    .wallpaper {
        position: relative;
        object-fit: fill;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: -2;
    }

    .background {
        margin: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .maptext {
        position: absolute;
        top: 5rem;
        right: 10rem;
        text-align: center;
        font-family: "tf2-build";
        font-size: 3rem;
        color: white;
        line-height: 1;

        p {
            margin: 1rem;
        }

        p:first-child {
            color: #afa896;
        }

        p:nth-child(2) {
            font-size: 5rem;
        }

        p:nth-child(3) {
            color: #e9e2c8;
        }
    }
    .gradient {
        background-image: radial-gradient(
            circle at 0% 25%,
            rgba(0,0,0,0) 40%,
            #2b2724ff 60%
        );
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .loadbox {
        $content-margin: 0.4rem;
        background-color: #393532;
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        width: 24rem;
        height: 12rem;
        border-radius: 0.5rem;
        padding: 0.75rem 1.25rem;
        box-sizing: border-box;
        p {
            font-size: 0.85rem;
            font-family: sans-serif
        }

        &__titlebar {
            display: flex;
            justify-content: space-between;
            color: #e9e2c8;
            p {
                margin: 0;
                font-size: 1rem;
            }
        }

        &__loadstatus {
            color: #7b776e;
            margin-left: $content-margin;
        }
        &__progress-container {
            display: grid;
            grid-template-columns: 16rem 1fr;
            margin: $content-margin;
            gap: 0.5rem;
            height: 1.5rem;
        }

        &__progressbar {
            background-color: #282421;
            width: 100%;
            height: 100%;
        }

        &__cancel {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: left;
            background-color: #a39884;
            border: none;
            &:active {
                background-color: #807c6f;
            }

            &:active::after {
                border: 1px solid #53514a;
            }
            &::after {
                content: "";
                position: absolute;
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                top: 1px;
                left: 1px;
                border: 1px solid #807c6f;
            }
        }
        &__anticheatbox {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: 2rem;
            align-items: start;
            margin-left: 0.8rem;
            margin-top: 1rem;
            p {
                color: #e9e2c8;
                margin: 0.8rem 0;
            }

            p:first-child {
                margin-top: 0;
            }
        }
    }
</style>

<script lang="ts">
    import ProgressBar from "$lib/ProgressBar.svelte";
</script>

<div class="background">
    <img class="wallpaper" src="/tf2-load.png" />
    <div class="gradient"></div>
    <div class="maptext">
        <p>You're on your way to:</p>
        <p>Swiftwater</p>
        <p>Level 3 enemy</p>
    </div>
    <div class="loadbox">
        <div class="loadbox__titlebar">
            <p>LOADING...</p>
            <p>X</p>
        </div>
        <p class="loadbox__loadstatus">Retrieving server info...</p>
        <div class="loadbox__progress-container">
            <ProgressBar width={240} progress={0.65} />
            <button class="loadbox__cancel">Cancel</button>
        </div>
        <div class="loadbox__anticheatbox">
            <img src="/sac-icon.png" alt="SAC">
            <div>
                <p>Note: This server is SAC secured.</p>
                <p>Cheating will result in a stern talking-to.</p>
            </div>
        </div>
    </div>
</div>