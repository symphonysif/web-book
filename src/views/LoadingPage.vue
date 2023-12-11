<script>

export default {
    data() {
        return {
            playLoading: false,
            loadingInterval: null,
            isChromium: null,
            orientation: null
        }
    },  
    mounted() {

        var isChromium = !!window.chrome;

        this.isChromium = isChromium;

        const fadePanel = document.getElementsByClassName("fade-panel")[0];
        fadePanel.style.opacity = "0";
        const bgm = document.getElementById("bgm");
        bgm.sound = 0;

        const playLoadingContainer = document.querySelector(".play-loading-container");
        // const checkOrientation = () => {
        //     if(screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary") {
        //         playLoadingContainer.style.display = "none";
        //         this.playLoading = false;
        //         this.orientation = true;
        //         requestAnimationFrame(checkOrientation);
        //     } else {
        //         playLoadingContainer.style.display = "flex";
        //         this.orientation = false;
        //         if(this.isChromium) {
        //             this.playLoading = true;
        //         }
        //         requestAnimationFrame(checkOrientation);
        //     }
        // }

        // requestAnimationFrame(checkOrientation);

        this.orientation = true;

        if(this.isChromium) {
            this.playLoading = true;
        } else {
            this.playLoading = false;
        }

        if(this.loadingInterval === null) {
            /**
             * @type {HTMLDivElement}
             */
            const loadingBarFill = document.querySelector(".loading-bar-fill");
            loadingBarFill.style.width = "0%";
            const loadingTime = 1000; // 2 seconds
            let progress = 0;
            this.loadingInterval = setInterval(() => {
                if(this.playLoading === false) {
                    return;
                }
                const loadingBarFill = document.querySelector(".loading-bar-fill");
                loadingBarFill.style.width = `${progress}%`;
                progress += 100/loadingTime;

                if(progress >= 100) { 
                    clearInterval(this.loadingInterval);
                    this.nextPage();
                }
            }, 1)
        }
    },
    methods: {
        nextPage() {
            this.$router.push("/language-options");
        }
    }
}

</script>

<template>
    <main>
        <div class="background">
            <label v-if="!playLoading">
                <!-- <img v-if="orientation" class="rotate-device" src="@/assets/image/loading-rotate.svg"> -->
                <img v-if="!isChromium" class="is-chromium" src="@/assets/image/use-chromium.svg">
            </label>
            <div v-if="playLoading" class="play-loading-container">
                <img src="/src/assets/image/icon.png">
                <div class="loading-bar">
                    <div class="loading-bar-fill"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.rotate-device {
    rotate: -90deg;
}

.is-chromium {
    rotate: -90deg;
    width: 30vw;
}

.background {
    background-color: #EFD940;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
}

.background label{
    font-size: 2em;

    transform: rotate(90deg);
}

.play-loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3em;
    
    width: 50%;
}

.play-loading-container img {
    width: 15%;
}

.loading-bar{
    background-color: #fff;
    height: 1em;
    width: 100%;
    margin-top: 1em;
    
    border-radius: 999px;
}

.loading-bar-fill {
    background-color: #E06124;
    height: 100%;
    width: 50%;

    border-radius: 999px;
    /* transition: width 1s ease-in-out; */
}
</style>