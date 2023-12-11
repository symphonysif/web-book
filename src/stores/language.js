import { ref } from 'vue'
import { defineStore } from 'pinia'

//there's english, indo, and malay
export const useLanguageStore = defineStore('language', () => {
    const language = ref('malay');
    const changeLanguage = (lang) => {
        if(lang == 'english' || lang == 'indo' || lang == 'malay') {
            language.value = lang;
        } else {
            throw new Error('Language not supported');
        }
    }
    return { language, changeLanguage }
})