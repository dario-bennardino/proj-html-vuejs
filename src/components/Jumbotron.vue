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
        <div class="container_ d-flex ">

            <div class="box-text-jumbotron">
                <h1 class="text-start">Devotion that never never <span class="fw-bold">ends</span></h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia doloris sit amet consectetur, adipisci velit, sed quia non numquam eius modi</p>
                <button type="button" class="btn btn-outline-warning">READ MORE</button>
            </div>

            <div class="box-img-jumbotron d-flex">
                <div class="box-img-jumbotron-sx d-flex justify-content-center align-items-center">
                    <img :src="getPathImage('h-2-slider-img-15.png')" :alt="imgJumbotronSx">
                </div>
                <div class="box-img-jumbotron-dx d-flex justify-content-center align-items-center">
                    <img :src="getPathImage('h-2-slider-img-16.png')" :alt="imgJumbotronDx">
                </div>


                
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

    .jumbotron{
        height: 730px;
        width: 100vw;
        border: 1px solid black;
        background-color: $bg-color-7;
        justify-content: center;
        align-items: center;

        .container_{
            
            // text-align: center;
            width: 1600px;
            height: 500px;
            // background-color: red;
            

            .box-text-jumbotron{
                width: 50%;
                height: 100%;
                background-color: white;
                padding: 50px;

                h1{
                    font-size: 4.5rem;
                    
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
                }
                
            }

            .box-img-jumbotron{
                width: 50%;
                height: 100%;
                

                .box-img-jumbotron-sx{
                    width: 50%;
                    height: 100%;
                    border: 1px solid black;
                }

                .box-img-jumbotron-dx{
                    width: 50%;
                    height: 100%;
                    border: 1px solid black;
                }
            }
            
        }
    }

</style>