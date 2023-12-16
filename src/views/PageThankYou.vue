<script>
import { useLanguageStore } from '@/stores/language';
import { useLinkBaseStore } from "../stores/linkbase";
import FullscreenButton from "@/components/FullscreenButton.vue";

export default {
    components : {
        FullscreenButton,
    },
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
        onHomeBtn() {
            window.location = "https://symphonycolours.com/home";
        },
        onReplayMusic() {
            const bgm = document.getElementById("bgm");
            bgm.currentTime = 0;
        },
        onReplaySub() {
            if(this.audio != null) {
                this.playAudio(0);
            }
        },
        onMusicClick() {
            const bgm = document.getElementById("bgm");
            if(bgm.volume !== 0) {
                bgm.volume = 0;
            } else {
                bgm.volume = 0.5;
            }
        },
        onSoundClick() {
            const sound = this.$refs["sound"];
            if(sound.volume !== 0) {
                sound.volume = 0;
            } else {
                sound.volume = 0.5;
            }
        },
        onChangeFontSize() {
            const textImg = this.$refs["text-img"];
            if(this.audio != null) {
                if(this.fontSizeStore.fontSize === 'normal') {
                    this.fontSizeStore.changeFontSize('big')
                    if(this.index < 0) {
                        return;
                    }
                    textImg.src = this.audio['big'][this.languageStore.language][this.index].textSource;
                } else {
                    this.fontSizeStore.changeFontSize('normal')
                    if(this.index < 0) {
                        return;
                    }
                    textImg.src = this.audio['normal'][this.languageStore.language][this.index].textSource;
                }
            } else {
                if(this.fontSizeStore.fontSize === 'normal') {
                    this.fontSizeStore.changeFontSize('big')
                    if(this.index < 0) {
                        return;
                    }
                    textImg.src = this.texts['big'][this.languageStore.language][this.index];
                } else {
                    this.fontSizeStore.changeFontSize('normal')
                    if(this.index < 0) {
                        return;
                    }
                    textImg.src = this.texts['normal'][this.languageStore.language][this.index];
                }
            }
        }
    },
}

</script>

<template>
    
    <main>
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
        <div class="page-layout">
            <!-- <img refs="temp-image" src="@/assets/temp/Spread 9 tab (animasi) fin2.jpg" class="temp-image"/> -->
            <input type="checkbox" id="burger-checkbox" hidden>
            <label for="burger-checkbox" class="button burger-menu burger">
                <img src="@/assets/new-icon/panah bawah samping-01.svg">
            </label>
            <FullscreenButton />
            <label class="button burger-menu home" @click="onHomeBtn()">
                <img src="@/assets/new-icon/home-01.svg">
            </label>
            <label class="button burger-menu replay-music" @click="onReplayMusic()">
                <img src="@/assets/new-icon/replay icon logo-01.svg">
            </label>
            <label class="button burger-menu music" @click="onMusicClick()">
                <img src="@/assets/new-icon/No music-01.svg">
            </label>
            <label class="button burger-menu replay-sub" @click="onReplaySub()">
                <img src="@/assets/new-icon/replay sub-01.svg">
            </label>
            <label class="button burger-menu storytelling" @click="onSoundClick()">
                <img src="@/assets/new-icon/no sub-01.svg">
            </label>
            <label class="button burger-menu sizefont" @click="onChangeFontSize()">
                <img src="@/assets/new-icon/perbesar huruf-01.svg">
            </label>
        </div>
    </main>
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

    .page-layout {
        background-color: #303846;
    }
</style>