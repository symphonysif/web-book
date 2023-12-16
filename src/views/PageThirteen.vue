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

        return { languageStore, fontSizeStore, linkBaseStore}
    },
    data() {
        return {
            playLoop: false,
            index: -1,
            showInteractive: false,
            flag1: false,
            flag2: false,
            audio: {
                normal: {
                    indo: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/indo/(R) big font spread 13 (indo 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/indo/(R) teks spread 13 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/indo/(R) big font spread 13 (indo 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/indo/(R) teks spread 13 indo 2.svg"
                        },
                    ],
                    english: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/english/(R) teks spread 13 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/english/(R) teks spread 13 english 2.svg"
                        },
                    ],
                    malay: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/malay/(R) teks spread 13 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/malay/(R) teks spread 13 malay 2.svg"
                        },
                    ],
                },
                big: {
                    indo: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/indo/(R) big font spread 13 (indo 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/indo/(R) teks big spread 13 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/indo/(R) big font spread 13 (indo 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/indo/(R) teks big spread 13 indo 2.svg"
                        },
                    ],
                    english: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/english/(R) teks big spread 13 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/english/(R) teks big spread 13 english 2.svg"
                        },
                    ],
                    malay: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/malay/(R) teks big spread 13 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-13/english/big font spread 13 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-13/malay/(R) teks big spread 13 malay 2.svg"
                        },
                    ],
                }
            },
            texts: null
        }
    },
    mounted() {
        // this.$refs['next-btn'].style.visibility = "visible";
        this.$refs['next-btn'].style.visibility = "hidden";
        // this.$refs['text-animate-checkbox'].checked = true;
        // this.changeText(0);
        
        const bgm = document.getElementById("bgm");
        // bgm.src = this.linkBaseStore.linkBase + "src/assets/audio/music/Spread 11 - Spread 13.wav";
        const sound = this.$refs["sound"];

        // bgm.volume = 0;
        sound.volume = 0.5;

        if(this.languageStore.language == "malay") {
            sound.volume = 0;
        }

        const fadePanel = document.getElementsByClassName("fade-panel")[0];

        let start = null;

        // function fadeIn(timestamp) {
        //     if (!start) {
        //         start = timestamp;
        //     }
        //     const progress = timestamp - start;
        //     fadePanel.style.opacity = 1 - progress / 1000 * 0.588; // 0.588 is the opacity value for 1.7 seconds
        //     bgm.volume = progress / 1000 * 0.5;
        //     if (progress < 1700) {
        //         requestAnimationFrame(fadeIn);
        //     }
        // }

        // requestAnimationFrame(fadeIn);


        sound.onended = () => {
            if(this.index + 1 < this.audio[this.fontSizeStore.fontSize][this.languageStore.language].length) {
                this.playAudio(this.index+1);
            } else {
                this.$refs['next-btn'].style.visibility = "visible";
                /**
                 * @type {HTMLVideoElement}
                 */
                // const entranceVideo = document.getElementsByClassName("entrance-video")[0];

                // entranceVideo.src = "/src/assets/video/Spread 6 - Entrance (2).mp4";

                // entranceVideo.play();

                // setTimeout(() => {
                //     /**
                //      * @type {HTMLVideoElement}
                //      */
                //     const loopVideo = document.getElementsByClassName("loop-video")[0];
                //     loopVideo.src = "/src/assets/video/Spread 6 - Loop.mp4";
    
                //     loopVideo.play();
                    
                // }, 500);
                 
                //  entranceVideo.onended = () => {

                //     this.$refs['next-btn'].style.visibility = "visible";
                //     this.playLoop = true;
                // }
            }
        }

        // const playBGM = async () => {
        //     try {
        //         await bgm.play();
        //     } catch(e) {
        //         console.log(e);
        //     }
        //     setTimeout(playBGM, 10);
        // }

        // setTimeout(playBGM, 10);
    },
    methods: {
        onVideoEnd() {
            setTimeout(() => {
                if(this.index < 0) {
                    this.$refs['text-animate-checkbox'].checked = true;
                    this.playAudio(0);
                }
                // this.playLoop = true;
                // this.showInteractive = true;
                this.$refs['text-animate-checkbox'].checked = true;
            }, 1000);
        },
        onHoldEnd() {
            this.$refs['next-btn'].style.visibility = "visible";
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
            if(this.texts == null) {
                return;
            }
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
                    this.$router.push("/page-fourteen");
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
        onInteractiveClick(index) {
            if(index === 1) {
                this.flag1 = true;
            } else if(index === 2) {
                this.flag2 = true;
            }

            if(this.flag1 === true && this.flag2 === true) {
                this.playLoop = true;
                this.$refs['loop-video'].play();
                this.showInteractive = false;
                this.changeText(1);
            }
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
            <video v-if="!playLoop" autoplay muted class="entrance-video" @ended="onVideoEnd()">
                <source src="@/assets/video/Spread 13 - Entrance _ Hold.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
            <video muted ref="loop-video" class="loop-video" @ended="onHoldEnd()">
                <source src="@/assets/video/Spread 13 - Entrance _ Hold.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
            <!-- <span v-if="showInteractive" class="interactive">
                <button id="interactive-1" @click="onInteractiveClick(1)">
                </button>
                <button id="interactive-2" @click="onInteractiveClick(2)">
                </button>
                <img src="@/assets/image/spread-7/spread 7 - tokoh macan kecil (untuk di-klik).svg">
                <img src="@/assets/image/spread-7/spread 7 - tokoh macan wayang (untuk di-klik).svg">
            </span> -->
            <div class="text-container">
                <input ref="text-animate-checkbox" type="checkbox" hidden id="text-animate-checkbox">
                <div class="text">
                    <img ref="text-img" src="@/assets/text/spread-2-english.svg">
                </div>
            </div>
            <!-- <img refs="temp-image" src="@/assets/temp/spread 13.jpg" class="temp-image"/> -->
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

.page-layout {
    background-color: #996523;
}

.entrance-video {
    width: 100vw;
    z-index: 20;
    background: url('/src/assets/video/Spread 6 - Entrance (1).mp4') no-repeat center center;
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

.interactive {
    position: absolute;
    width: 100vw;
    z-index: 200;
    top: 0;
    left: 0;
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

#interactive-1 {
    left: 10% !important;
    transform: translateY(450%) !important;
}

#interactive-2 {
    transform: translateY(420%) !important;
    left: 16% !important;
}

#interactive-3 {
    transform: translateY(370%) !important;
    left: 13% !important;
}
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

#interactive-1 {
    /* background-color: red; */
    transform: translateY(270%);
    left: 1%;
}

#interactive-2 {
    /* background-color: blue; */
    transform: translateY(370%);
    left: 7%;
}
</style>