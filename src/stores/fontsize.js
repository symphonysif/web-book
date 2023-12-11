import { ref } from 'vue'
import { defineStore } from 'pinia'

//there's english, indo, and malay
export const useFontSizeStore = defineStore('font-size', () => {
    const fontSize = ref('normal');
    const changeFontSize = (param) => {
        if(param == 'normal' || param == 'big') {
            fontSize.value = param;
        } else {
            throw new Error('Font Size not supported');
        }
    }
    return { fontSize, changeFontSize }
})