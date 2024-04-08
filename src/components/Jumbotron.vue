<script>
import { store } from '../data/store'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="jumbotron d-flex "> 
        <div class="container_ d-flex ">
            <div class="box-text-jumbotron">
                <h1>Devotion that never never ends</h1>
                <p>Neque porro quisquam est, qui dolorem ipsum quia doloris sit amet consectetur, adipisci velit, sed quia non numquam eius modi</p>
            </div>
            <div class="box-img-jumbotron">
                img
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
            background-color: red;
            

            .box-text-jumbotron{
                width: 50%;
                height: 100%;
                background-color: white;
                
            }

            .box-img-jumbotron{
                width: 50%;
                height: 100%;
                background-color: coral;
                
            }
            
        }
    }

</style>