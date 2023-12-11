<script>
export default {
    methods: {
        toggleFullscreen() {
            const elem = document.documentElement;
            if (!document.fullscreenElement) {
                elem.requestFullscreen().catch(err => {
                    alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
        }
    }
}
</script>

<template>
    <label class="burger-menu button fullscreen-btn" @click="toggleFullscreen()">
        <img src="@/assets/new-icon/full screen.svg">
    </label>
</template>