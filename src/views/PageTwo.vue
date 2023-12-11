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
            audio: {
                normal: {
                    indo: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/indo/(R) big font spread 2 (indo 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/indo/(R) teks spread 2 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/indo/(R) big font spread 2 (indo 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/indo/(R) teks spread 2 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/indo/(R) big font spread 2 (indo 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/indo/(R) teks spread 2 indo 2.svg"
                        }
                    ],
                    english: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/english/(R) teks spread 2 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/english/(R) teks spread 2 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/english/(R) teks spread 2 english 2.svg"
                        }
                    ],
                    malay: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/malay/(R) teks spread 2 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/malay/(R) teks spread 2 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/malay/(R) teks spread 2 malay 2.svg"
                        }
                    ],
                },
                big: {
                    indo: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/indo/(R) big font spread 2 (indo 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/indo/(R) teks big spread 2 indo 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/indo/(R) big font spread 2 (indo 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/indo/(R) teks big spread 2 indo 2.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/indo/(R) big font spread 2 (indo 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/indo/(R) teks big spread 2 indo 3.svg"
                        }
                    ],
                    english: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/english/(R) teks big spread 2 english 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/english/(R) teks big spread 2 english 2.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/english/(R) teks big spread 2 english 3.svg"
                        }
                    ],
                    malay: [
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 1).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/malay/(R) teks big spread 2 malay 1.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 2).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/malay/(R) teks big spread 2 malay 2.svg"
                        },
                        {
                            soundSource: this.linkBaseStore.linkBase + "src/assets/audio/storytelling/spread-2/english/big font spread 2 (english 3).mp3",
                            textSource: this.linkBaseStore.linkBase + "src/assets/text/spread-2/malay/(R) teks big spread 2 malay 3.svg"
                        }
                    ],
                }
            }
        }
    },
    mounted() {
        this.$refs['next-btn'].style.visibility = "hidden";
        
        const bgm = document.getElementById("bgm");
        // bgm.src = this.linkBaseStore.linkBase + "src/assets/audio/music/Spread 2 - Spread 3.wav";
        const sound = this.$refs["sound"];

        // bgm.volume = 0;
        sound.volume = 0.5

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
                this.$refs['text-animate-checkbox'].checked = true;
                // this.$refs['sound'].play();
                this.playAudio(0);
                this.playLoop = true;
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

            this.$router.push("/page-three");

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
            //         this.$router.push("/page-three");
            //     }
            // }
            
            // requestAnimationFrame(fadeOut);
        },
        onChangeFontSize() {
            const textImg = this.$refs["text-img"];
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
        }
    }
}
</script>

<template>
    <main>
        <div class="page-layout">
            <audio ref="sound" id="sound" >
                <source src="@/assets/audio/storytelling/Spread 2.mp3" type="audio/mp3">
            </audio>
            <video v-if="!playLoop" autoPlay muted class="entrance-video" @ended="onVideoEnd()">
                <source src="@/assets/video/Spread 2 - Entrance.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
            <video autoPlay muted loop class="loop-video">
                <source src="@/assets/video/Spread 2 - Loop.mp4" type="video/mp4">
                Your browser does not support the video tag
            </video>
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
.entrance-video {
    width: 100vw;
    z-index: 20;
}

.text-container {
    z-index: 100;
}

.loop-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10;
}
</style>