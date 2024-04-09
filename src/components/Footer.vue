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
            }
        }
        
    }
</script>

<template>

    <div class="footer">
        <div class="container">
            <div class="row row-cols-4 h-100">
                <div class="col-3 d-flex justify-content-center align-items-center flex-column ">
                    <div class="logo-footer">
                        <img :src="getPathImage('logo-sidearea-1.png')" :alt="'logo footer'">
                    </div>
                    <div class="slogan-footer">{{ store.footerColumns.slogan }}</div>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">col</div>
                <div class="col-3 d-flex justify-content-center align-items-center">col</div>
                <div class="col-3 d-flex justify-content-center align-items-center">col</div>
            </div>
        </div>
        
    </div>

</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

    .footer{
        height: 135px;
        width: 100vw;
        background-color: $bg-color-8;
        border: 1px solid black;

        .container{
            width: 1150px;
            height: 100%;
            border: 1px solid black;

            .col-3{
                border: 1px solid black;
                height: 100%;
            }
        }
    }
</style>