<script>
// import '../assets/scss/partials/_variables.scss'; 

import { store } from '../data/store';

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
    <div class="navbar">
        <div class="logo-navbar">
            <img :src="getPathImage('logo-sidearea-1-1.png')" :alt="logo">
        </div>
        <div class="link-navbar d-flex ">

            <a v-for="(link, index) in store.links" :key="index" :href="link.url">{{ link.text }}</a>
            <!-- <i class="fa-solid fa-list-ul"></i> -->
            <img :src="getPathSVG('svg-1.svg')" :alt="iconaMenu">

        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

    .navbar{
        height: 90px;
        width: 100vw;
        background-color: bg-color-1;
        border: 1px solid black;

            a{
                padding: 20px;
                text-decoration: none;
                color: black;
                font-size: 0.7rem;
                font-weight: bold;
                color: $text-color-9;
            }

            i{
                color: $text-color-9;
                padding: 20px;
            }

            .link-navbar{
                margin-right: 20px;
            }
    }
    
</style>