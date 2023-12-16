<script>
import FullscreenButton from "@/components/FullscreenButton.vue";

import { mapStores } from 'pinia';
import { useLanguageStore } from '@/stores/language';
import { useFontSizeStore } from '@/stores/fontsize';
import { useLinkBaseStore } from "../stores/linkbase";

export default {
    components : {
        FullscreenButton,
    },
    setup() {
        const languageStore = useLanguageStore();
        const fontSizeStore = useFontSizeStore();
        const linkBaseStore = useLinkBaseStore();

        return { languageStore, fontSizeStore, linkBaseStore }
    },
    data() {
        return {
            playLoop: false,
            index: -1,
            audio: null,
            texts: {
                normal: {
                    indo: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/indo/teks spread 4 (instruksi indo).svg",
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/indo/teks spread 4 indo.svg",
                    ],
                    english: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/english/teks spread 4 (instruksi english).svg",
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/english/teks spread 4 english.svg",
                    ],
                    malay: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/malay/teks spread 4 (instruksi malay).svg",
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/malay/teks spread 4 malay.svg",
                    ],
                },
                big: {
                    indo: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/indo/teks spread big 4 (instruksi indo).svg",
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/indo/teks spread big 4 indo.svg",
                    ],
                    english: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/english/teks spread big 4 (instruksi english).svg",
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/english/teks spread big 4 english.svg",
                    ], 
                    malay: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/malay/teks spread big 4 (instruksi malay).svg",
                        this.linkBaseStore.linkBase + "src/assets/text/spread-4/malay/teks spread big 4 malay.svg",
                    ],
                }
            }
        }
    },
    mounted() {
        this.$refs['next-btn'].style.visibility = "hidden";
        this.$refs['text-animate-checkbox'].checked = true;
        this.changeText(0);
        
        const bgm = document.getElementById("bgm");
        bgm.src = this.linkBaseStore.linkBase + "src/assets/audio/music/Spread 4.wav";
        const sound = this.$refs["sound"];

        bgm.volume = 0;
        sound.volume = 0.5;

        if(this.languageStore.language == "malay") {
            sound.volume = 0;
        }
        
        const fadePanel = document.getElementsByClassName("fade-panel")[0];

        let start = null;

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


        sound.onended = () => {
            if(this.index + 1 < this.audio[this.fontSizeStore.fontSize][this.languageStore.language].length) {
                this.playAudio(this.index+1);
            } else {
                this.$refs['next-btn'].style.visibility = "visible";
            }
        }

        const playBGM = async () => {
            try {
                await bgm.play();
            } catch(e) {
                console.log(e);
            }
            setTimeout(playBGM, 10);
        }
        setTimeout(playBGM, 5000);
    },
    methods: {
        onVideoEnd() {
            setTimeout(() => {
                // this.$refs['text-animate-checkbox'].checked = true;
                // this.$refs['sound'].play();
                // this.playAudio(0);
                // this.playLoop = true;
            }, 1000);
        },
        playAudio(index) {
            const sound = this.$refs["sound"];
            sound.src = this.audio[this.fontSizeStore.fontSize][this.languageStore.language][index].soundSource;
            sound.play();

            const textImg = this.$refs["text-img"];
            textImg.src = this.audio[this.fontSizeStore.fontSize][this.languageStore.language][index].textSource;
            this.index = index;
        },
        changeText(index) {
            const textImg = this.$refs["text-img"];
            textImg.src = this.texts[this.fontSizeStore.fontSize][this.languageStore.language][index];
            this.index = index;
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
                    this.$router.push("/page-five");
                }
            }
            
            requestAnimationFrame(fadeOut);
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
        },
        onInteractiveClick() {
            this.playLoop = true;

            const video = this.$refs["loop-video"];
            video.play();

            video.onended = () => {
                this.$refs['next-btn'].style.visibility = "visible";
            }

            this.changeText(1);
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
        }
    }
}
</script>

<template>
    <main>
        <div class="page-layout">
            <audio ref="sound" id="sound">
                <source src="@/assets/audio/storytelling/Spread 2.mp3" type="audio/mp3">
            </audio>
            <video v-if="!playLoop" autoPlay muted class="entrance-video" @ended="onVideoEnd()">
                <source src="@/assets/video/(R) Spread 4 - Entrance.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
            <video muted ref="loop-video" class="loop-video">
                <source src="@/assets/video/(R) Spread 4 - Hold.mp4" type="video/mp4">
                Your browser does not support the video tag
                </video>
            <span v-if="!playLoop" class="interactive">
                <button @click="onInteractiveClick()">
                </button>
                <img src="@/assets/image/spread-4/spread 4 - tokoh macan utama (untuk di-klik).svg">
            </span>
            <div class="text-container">
                <input ref="text-animate-checkbox" type="checkbox" hidden id="text-animate-checkbox">
                <div class="text">
                    <img ref="text-img" src="@/assets/text/spread-2-english.svg">
                </div>
            </div>
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
            <label ref="next-btn" class="button next-btn" @click="onNextBtn()">
                <img src="@/assets/new-icon/play-01.svg">
            </label>
        </div>
    </main>
</template>

<style scoped>
.entrance-video {
    width: 100vw;
    z-index: 20;
    background-size: cover;
}

.text-container {
}

.loop-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10;
}

@media only screen and (max-height: 575.98px) and (orientation: landscape) {

    .entrance-video {
        position: absolute;
        width: 80vw;

        left: 50%;
        
        transform: translateX(-50%);
    }

    .loop-video {
        position: absolute;
        width: 80vw;

        left: 50%;
        
        transform: translateX(-50%);

    }

    .interactive img{
        position: absolute !important;
        width: 80vw !important;

        /* left: 50%; */
        
        transform: translateX(10%);
    }

    .interactive button {
        left: 14% !important;
        transform: translateY(65%) !important;
    }
}
.interactive {
    position: absolute;
    width: 100vw;
    z-index: 200;
    top: 0;
    left: 0;
}

.interactive img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;

    filter: blur(20px) brightness(2);
}

.interactive button {
    aspect-ratio: 1;
    width: 9%;
    height: auto;
    /* background-color: red; */
    position: absolute;
    left: 7%;

    transform: translateY(90%);

    border-radius: 0;

    z-index: 300;
}
</style>