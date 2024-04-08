<script>
import '../assets/scss/partials/_variables.scss'; 

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
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Shop</a>
            <a href="#">Elements</a>



        </div>
    </div>
</template>



<style lang="scss" scoped>
    .navbar{
        height: 90px;
        width: 100vw;
        background-color: lightgrey;

        a{
            padding: 5px;
            // color: $bg-color-3;
            color: black;
        }
    }
</style>