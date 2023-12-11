import { ref } from 'vue'
import { defineStore } from 'pinia'

//there's english, indo, and malay
export const useLinkBaseStore = defineStore('linkBase', () => {
    // const linkBase = ref('/');
    /**
     * the following is if we were to deploy to base that's not just /
     */
    const linkBase = ref('/symphony-wb-deploy/');
    return { linkBase }
})