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

    <div v-for="(card, index) in this.store.imageCardEvents" :key="index" class="card" style="width: 19rem;">
        <img :src="getPathImage(card.image)" class="card-img-top" :alt="'Immage events'">
         <div class="card-body">
            <h6 class="card-text">{{ card.title }}</h6>
            <h6>{{ card.author }}</h6>
        </div>
    </div>
        
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables';
    .card{
        border: white;
        margin: 10px;
        
        
    }
</style>