<script>
// import '../assets/scss/partials/_variables.scss'; 


import { store } from '../data/store';



    export default {
        data(){
            return{
                store
            }
        }
        
    }
</script>

<template>
    <div class="navbar">
        <div class="logo-navbar">logo</div>
        <div class="link-navbar">

            <a v-for="(link, index) in store.links" :key="index" :href="link.url">{{ link.text }}</a>
            <i class="fa-solid fa-list-ul"></i>

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

        .logo-navbar{
            
        }

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
    }
</style>