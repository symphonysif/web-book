<script>
import { useLanguageStore } from '@/stores/language';

export default {
    setup() {
        const languageStore = useLanguageStore();

        return { languageStore }
    },
    mounted() {
        const fadePanel = document.getElementsByClassName("fade-panel")[0];
        fadePanel.style.opacity = "0";
    },  
    methods: {
        changeLanguage(language) {
            this.languageStore.changeLanguage(language);
            this.$router.push('/page-guide');
        }
    
    }
}

</script>

<template>
    <main>
        <div class="background">
            <img src="@/assets/image/language-icon.svg" class="icon">
            <img src="/src/assets/image/language/Bahasa-Inggris-01.svg" @click="changeLanguage('english')">
            <img src="/src/assets/image/language/Bahasa-Indo-01.svg" @click="changeLanguage('indo')">
            <img src="/src/assets/image/language/Bahasa-Malay-01.svg" @click="changeLanguage('malay')">
        </div>
    </main>
</template>

<style scoped>

.icon {
    position: absolute;

    top: 10em;
}

@media only screen and (max-height: 575.98px) and (orientation: landscape) {
    .icon {
        top: 5em;
    }
}

.background {
    background-color: #EFD940;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: 3em;
}

.background img {
    width: 10%;
}

</style>