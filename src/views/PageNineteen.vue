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
            showInteractive: false,
            flag1: false,
            flag2: false,
            audio: {
                normal: {
                    indo: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/indo/(R) big font spread 19 (indo 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/(R) teks spread 19 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/indo/(R) big font spread 19 (indo 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/(R) teks spread 19 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/indo/(R) big font spread 19 (indo 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/(R) teks spread 19 indo 2.svg"
                        },
                    ],
                    english: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/(R) teks spread 19 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/(R) teks spread 19 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/(R) teks spread 19 english 2.svg"
                        },
                    ],
                    malay: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/(R) teks spread 19 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/(R) teks spread 19 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/(R) teks spread 19 malay 2.svg"
                        },
                    ],
                },
                big: {
                    indo: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/indo/(R) big font spread 19 (indo 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/(R) teks big spread 19 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/indo/(R) big font spread 19 (indo 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/(R) teks big spread 19 indo 2.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/indo/(R) big font spread 19 (indo 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/(R) teks big spread 19 indo 3.svg"
                        },
                    ],
                    english: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/(R) teks big spread 19 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/(R) teks big spread 19 english 2.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/(R) teks big spread 19 english 3.svg"
                        },
                    ], 
                    malay: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/(R) teks big spread 19 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/(R) teks big spread 19 malay 2.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-19/english/big font spread 19 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/(R) teks big spread 19 malay 3.svg"
                        },
                    ],
                }
            },
            texts: {
                normal: {
                    indo: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/teks spread 19 then instruksi indo.svg"
                    ],
                    english: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/teks spread 19 then instruksi english.svg"
                    ],
                    malay: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/teks spread 19 then instruksi malay.svg"
                    ],
                },
                big: {
                    indo: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-19/indo/teks spread big 19 then instruksi indo.svg"
                    ],
                    english: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-19/english/teks spread big 19 then instruksi english.svg"
                    ],
                    malay: [
                        this.linkBaseStore.linkBase + "src/assets/text/spread-19/malay/teks spread big 19 then instruksi malay.svg"
                    ],
                }
            }
        }
    },
    mounted() {
        // this.$refs['next-btn'].style.visibility = "visible";
        this.$refs['next-btn'].style.visibility = "hidden";
        // this.$refs['text-animate-checkbox'].checked = true;
        // this.changeText(0);
        
        const bgm = document.getElementById("bgm");
        bgm.src = this.linkBaseStore.linkBase + "src/assets/audio/music/Spread 19 - Spread 21.wav";
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
                this.changeText(0);
                this.showInteractive = true;
                this.$refs['next-btn'].style.visibility = "visible";

                sound.onended = undefined;
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

        const playBGM = async () => {
            try {
                await bgm.play();
            } catch(e) {
                console.log(e);
            }
            setTimeout(playBGM, 10);
        }

        setTimeout(playBGM, 10);
    },
    methods: {
        onVideoEnd() {
            setTimeout(() => {
                if(this.index < 0) {
                    this.$refs['text-animate-checkbox'].checked = true;
                    this.playAudio(0);
                }
                this.playLoop = true;
                // this.showInteractive = true;
                // this.$refs['text-animate-checkbox'].checked = true;
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

            this.$router.push("/page-twenty");

            // const fadeOut = (timestamp) => {
            //     if (!start) {
            //         start = timestamp;
            //     }
            //     const progress = timestamp - start;
            //     fadePanel.style.opacity = progress / 1000 * 0.588; // 0.588 is the opacity value for 1.7 seconds
            //     bgm.volume = 1 - progress / 1000 * 0.5;
            //     if (progress < 1700) {
            //         requestAnimationFrame(fadeOut);
            //     } else {
            //         this.$router.push("/page-twenty");
            //     }
            // }
            
            // requestAnimationFrame(fadeOut);
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
        onInteractiveClick(src) {
            /**
             * @type {HTMLAudioElement}
             */
            const sound = document.getElementById("sound");

            sound.src = this.linkBaseStore.linkBase + src;

            console.log(src);

            sound.play();
            bgm.volume = 0;

            sound.onended = () => {
                const bgm = document.getElementById("bgm");

                bgm.volume = 0.5;
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
                <source src="@/assets/video/Spread 19 - Entrance.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
            <video autoplay loop muted ref="loop-video" class="loop-video" @ended="onHoldEnd()">
                <source src="@/assets/video/Spread 19 - Loop.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
            <span v-if="showInteractive" class="interactive">
                <!-- <button id="interactive-1" @click="onInteractiveClick(1)">
                </button>
                <button id="interactive-2" @click="onInteractiveClick(2)">
                </button> -->
                <button id="interactive-1" @click="onInteractiveClick('src/assets/audio/music/Spread 19 (biola).mp3')">
                </button>

                <button id="interactive-2" @click="onInteractiveClick('src/assets/audio/music/Spread 19 (gamelan).mp3')">
                </button>

                <button id="interactive-3" @click="onInteractiveClick('src/assets/audio/music/Spread 19 (gendang).mp3')">
                </button>
                
                <button id="interactive-4" @click="onInteractiveClick('src/assets/audio/music/Spread 19 (keyboard).mp3')">
                </button>

                <button id="interactive-5" @click="onInteractiveClick('src/assets/audio/music/Spread 19 (oud).mp3')">
                </button>

                <button id="interactive-6" @click="onInteractiveClick('src/assets/audio/music/Spread 19 (saxophone).mp3')">
                </button>

                <img src="@/assets/image/spread-19/spread 19 - biola (untuk di-klik).svg">
                <img src="@/assets/image/spread-19/spread 19 - gamelan (untuk di-klik).svg">
                <img src="@/assets/image/spread-19/spread 19 - gendang (untuk di-klik).svg">
                <img src="@/assets/image/spread-19/spread 19 - keyboard (untuk di-klik).svg">
                <img src="@/assets/image/spread-19/spread 19 - oud (untuk di-klik).svg">
                <img src="@/assets/image/spread-19/spread 19 - saxophone (untuk di-klik).svg">
            </span>
            <div class="text-container">
                <input ref="text-animate-checkbox" type="checkbox" hidden id="text-animate-checkbox">
                <div class="text">
                    <img ref="text-img" src="@/assets/text/spread-2-english.svg">
                </div>
            </div>
            <!-- <img refs="temp-image" src="@/assets/temp/spread 19.jpg" class="temp-image"/> -->
            <input type="checkbox" id="burger-checkbox" hidden>
            <label for="burger-checkbox" class="button burger-menu burger">
                <img src="@/assets/new-icon/panah bawah samping-01.svg">
            </label>
            <FullscreenButton />
            <label class="button burger-menu storytelling" @click="onSoundClick()">
                <img src="@/assets/new-icon/no sub-01.svg">
            </label>
            <label class="button burger-menu music" @click="onMusicClick()">
                <img src="@/assets/new-icon/No music-01.svg">
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
    background-color: #303846;
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

    z-index: 999;
}

#interactive-1 {
    aspect-ratio: 2;
    /* background-color: red; */
    transform: translateY(20%);
    left: 67%;
    width: 15%;
}

#interactive-2 {
    /* background-color: blue; */
    transform: translateY(95%);
    left: 10%;
    aspect-ratio: 2;
    width: 25%;
}

#interactive-3 {
    aspect-ratio: 2;
    width: 22%;
    transform: translateY(260%);
    left: 14%;
}

#interactive-4 {
    aspect-ratio: 2.4;
    width: 26%;
    left: 70%;
    transform: translateY(105%);
}

#interactive-5 {
    aspect-ratio: 0.8;
    width: 15%;
    left: 52%;
    transform: translateY(29%);
}

#interactive-6 {
    aspect-ratio: 0.5;
    left: 40%;
    transform: translateY(45%);
}
</style>