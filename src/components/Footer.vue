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

    <div class="footer">
        <div class="container">
            <div class="row row-cols-4 h-100">
                <div class="col-3 d-flex justify-content-center align-items-center ">col</div>
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
            width: 1300px;
            height: 100%;
            border: 1px solid black;

            .col-3{
                border: 1px solid black;
                height: 100%;
            }
        }
    }
</style>