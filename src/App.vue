<script>

export default {
    watch: {
    },
    mounted() {
        document.addEventListener('keyup', (e) => {
            if(e.key == "p") {

                /**
                 * @type {HTMLAudioElement}
                 */
                const sound = document.getElementById("sound");

                sound.currentTime = sound.duration;
            }
            if(e.key == "l") {
                /**
                 * @type {HTMLVideoElement}
                 */
                const entranceVideo = document.getElementsByClassName('entrance-video')[0];

                entranceVideo.currentTime = entranceVideo.duration;
            }
            if(e.key == "k") {
                /**
                 * @type {HTMLVideoElement}
                 */
                 const entranceVideo = document.getElementsByClassName('loop-video')[0];

                entranceVideo.currentTime = entranceVideo.duration;
            }
            if(e.key == "t") {
                this.$router.push("/page-twenty-one");
            }
            if(e.key == "o") {
                const fadePanel = document.getElementsByClassName("fade-panel")[0];

                fadePanel.style.opacity = "0";
            }
        })
    }
}

</script>

<template>
    <div class="fade-panel">
    </div>
    <audio ref="bgm" loop id="bgm">
        <source src="@/assets/audio/bgm/03 Kelimutu Lake.mp3" type="audio/mp3">
    </audio>
    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
