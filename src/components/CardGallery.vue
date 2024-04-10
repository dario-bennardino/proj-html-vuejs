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
    <div class="col-4 p-0 " v-for="(image, index) in this.store.imageCardGallery" :key="index">
        <a href="#">
            <img :src="getPathImage(image)" :alt="'Immagine main gallery'">
        </a>
        
        
    </div>
</template>

<style lang="scss" scoped>
    .col-4{
        height: 50%;
      
        img{
            max-width: 100%;
            object-fit: cover;
            height: 100%;
        }              
    }
</style>