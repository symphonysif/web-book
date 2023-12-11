<script>
export default {
    methods: {
        toggleMusic() {
            const bgm = this.$refs["bgm"];
            if (bgm.paused) {
                bgm.play();
            } else {
                bgm.pause();
            }
        }
    }
}
</script>

<template>
    <label class="button burger-menu music" @click="toggleMusic()">
        <img src="@/assets/icons/music.svg">
    </label>
</template>