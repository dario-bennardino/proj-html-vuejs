<script>
import { store } from '../data/store'
    export default {
        data(){
            return{
                store
            }
        },
        methods:{
            getPathImage(imageName){
                return new URL (`/public/assets/img/${imageName}`, import.meta.url).href;
            },

            getPathSVG(svgName){
                return new URL (`/public/assets/svg/${svgName}`, import.meta.url).href;
            }
        }
    }
</script>

<template>

    <div v-for="(image, index) in this.store.imageCardEvents" :key="index" class="card" style="width: 18rem;">
        <img :src="getPathImage(image)" class="card-img-top" :alt="'Immage events'">
         <div class="card-body">
            <h6 class="card-text">This way, loves: a detailed guide through new design</h6>
            <h6>By Emily Fields</h6>
        </div>
    </div>
        
</template>


<style lang="scss" scoped>

</style>