<script>
import { useLanguageStore } from '@/stores/language';
import { useLinkBaseStore } from "../stores/linkbase";

export default {
    setup() {
        const languageStore = useLanguageStore();
        const linkBaseStore = useLinkBaseStore();

        return {
            languageStore,
            linkBaseStore
        };
    },
    mounted() {
        const bgm = document.getElementById("bgm");
        bgm.volume = 0;

        let start = null;
        const fadePanel = document.getElementsByClassName("fade-panel")[0];

        function fadeIn(timestamp) {
            if (!start) {
                start = timestamp;
            }
            const progress = timestamp - start;
            fadePanel.style.opacity = 1 - progress / 1000 * 0.588; // 0.588 is the opacity value for 1.7 seconds
            bgm.volume = progress / 1000 * 0.5;
            if (progress < 1700) {
                requestAnimationFrame(fadeIn);
            }
        }

        requestAnimationFrame(fadeIn);
    },
    methods: {
        onNextBtn() {
            let start = null;
            const fadePanel = document.getElementsByClassName("fade-panel")[0];
            const bgm = document.getElementById("bgm");

            const fadeOut = (timestamp) => {
                if (!start) {
                    start = timestamp;
                }
                const progress = timestamp - start;
                fadePanel.style.opacity = progress / 1000 * 0.588; // 0.588 is the opacity value for 1.7 seconds
                bgm.volume = 1 - progress / 1000 * 0.5;
                if (progress < 1700) {
                    requestAnimationFrame(fadeOut);
                } else {
                    // this.$router.push("/cover");
                }
            }
            
            requestAnimationFrame(fadeOut);
        },
    },
}

</script>

<template>
    <img 
        v-if="languageStore.language == 'indo'" 
        src="@/assets/image/thank you (indo).jpg"
        class="page"
    >
    <img 
        v-if="languageStore.language == 'english'" 
        src="@/assets/image/thank you (english).jpg"
        class="page"
    >
    <img
        v-if="languageStore.language == 'malay'"
        src="@/assets/image/thank you (malay).jpg"
        class="page"
    >

    <a href="http://symphonycolours.com/craft-activity" class="clickable-link">
    </a>
</template>

<style scoped>
    .page {
        width: 100vw;
        height: 100vh;

        z-index: 150;

        position: absolute;
        top: 0;
        left: 0;

        opacity: 1;
    }

    .clickable-link {
        position: absolute;
        top: 0;
        left: 0;

        width: 30vw;
        height: 6vh;

        z-index: 1000;
        background-color: transparent;

        transform: translate(120%, 1350%);
    }
</style>