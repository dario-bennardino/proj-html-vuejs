<script>
import { store } from '../data/store'
import CardGallery from './CardGallery.vue';
    export default {
        components:{
            CardGallery,
        },

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
    <section class="main">
        <section class="main-gallery">
            <div class="row row-cols-3">
                <CardGallery/>


                <!-- <div class="col-4">col</div>
                <div class="col-4">col</div>
                <div class="col-4">col</div>
                <div class="col-4">col</div>
                <div class="col-4">col</div>
                <div class="col-4">col</div> -->
            </div>
            

        </section>
    </section>
</template>



<style lang="scss" scoped>
    .main{
        width: 100vw;
        height: 1550px;

        .main-gallery{
            height: 100%;
            width: 100%;

            .row{
                height: 100%;

            }

                // .col-4{
                //     border: 1px solid black;
                //     height: 50%;
                    
                // }
        }
    }

</style>