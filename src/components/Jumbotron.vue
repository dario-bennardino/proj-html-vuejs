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
    <div class="jumbotron d-flex "> 
        <div class="container d-flex ">

            <div class="box-text-jumbotron">
                <h1 class="text-start">Devotion that never <span class="fw-bold">ends</span></h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia doloris sit amet consectetur, adipisci velit, sed quia non numquam eius modi</p>
                <button type="button" class="btn btn-outline-warning">READ MORE</button>
            </div>

            <div class="box-img-jumbotron d-flex">
                <div class="box-img-jumbotron-sx d-flex justify-content-center align-items-center">
                    <img :src="getPathImage('h-2-slider-img-15.png')" :alt="'imgJumbotronSx'">
                </div>
                <div class="box-img-jumbotron-dx d-flex justify-content-center align-items-center">
                    <img :src="getPathImage('h-2-slider-img-16.png')" :alt="'imgJumbotronDx'">
                </div>

            </div>
        </div>
        <div class="img-jumbo-first">
            <img src="/public/assets/img/short-slider-rev-1-img-2.png" alt="immagine foglia 1">
        </div>
        <div class="img-jumbo-second">
            <img src="/public/assets/img/short-slider-rev-1-img-6.png" alt="immagine foglia 2">
        </div>
        <div class="img-jumbo-third">
            <img src="/public/assets/img/h-2-slider-img-14.png" alt="immagine foglia 3">
        </div>
        <div class="img-jumbo-fourth">
            <img src="/public/assets/img/h-2-slider-img-17.png" alt="immagine foglia 4">
        </div>
        <div class="img-jumbo-fifth">
            <img src="/public/assets/img/h-2-slider-img-13.png" alt="immagine foglia 5">
        </div>
        <div class="img-jumbo-sixth">
            <img src="/public/assets/img/h-2-slider-img-12.png" alt="immagine foglia 6">
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

    .jumbotron{
        height: 730px;
        width: 100vw;
        justify-content: center;
        align-items: center;
        position: relative;

        .img-jumbo-first{
            position: absolute;
            top: 115px;
            right: 970px;
        }

        .img-jumbo-second{
            position: absolute;
            top: 210px;
            right: 295px;
        }

        .img-jumbo-third{
            position: absolute;
            top: 80px;
            right: 365px;
        }

        .img-jumbo-fourth{
            position: absolute;
            bottom: 150px;
            right: 180px;
        }

        .img-jumbo-fifth{
            position: absolute;
            bottom: 170px;
            right: 1020px;
        }

        .img-jumbo-sixth{
            position: absolute;
            bottom: 350px;
            right: 1050px;
        }

        .container{

            width: 1450px;
            height: 500px;            

            .box-text-jumbotron{
                width: 50%;
                height: 100%;
                padding-right: 140px;

                h1{
                    font-size: 4.5rem;
                    
                    span{
                        font-style: italic;
                    }
                }

                p{
                    color: $text-color-5;
                    margin-top: 25px;
                }

                .btn{
                    color: black;
                    font-size: 0.9rem;
                    padding: 20px 50px;
                    margin-top: 25px;
                    border: 3px solid $border-colors-2;
                    border-radius: 0;
                }

                .btn:hover{
                    background-color: $bg-color-9;
                    transition: background-color 1s;
                }
                
            }

            .box-img-jumbotron{
                width: 50%;
                height: 100%;                

                .box-img-jumbotron-sx{
                    width: 50%;
                    height: 100%;
                }

                .box-img-jumbotron-dx{
                    width: 50%;
                    height: 100%;
                }
            }
            
        }
    }

</style>