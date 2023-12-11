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
                    this.$router.push("/cover");
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
        src="@/assets/image/how to use (indo).jpg"
        class="page"
    >
    <img 
        v-if="languageStore.language == 'english'" 
        src="@/assets/image/how to use (english).jpg"
        class="page"
    >
    <img
        v-if="languageStore.language == 'malay'"
        src="@/assets/image/how to use (malay).jpg"
        class="page"
    >
    <label ref="next-btn" class="button next-btn" @click="onNextBtn()">
        <img src="@/assets/icons/next-back.svg">
    </label>
</template>

<style scoped>
    .page {
        width: 100vw;
        height: 100vh;
        background-color: white;;
    }
</style>