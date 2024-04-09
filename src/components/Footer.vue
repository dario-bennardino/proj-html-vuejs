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
                    <div class="logo-footer p-2 ">
                        <img :src="getPathImage('logo-sidearea-1.png')" :alt="'logo footer'">
                    </div>
                    <div class="slogan-footer">
                        <h6>{{ this.store.footerColumns[4].slogan }}</h6>
                    </div>
                </div>

                <div class="col-3 d-flex justify-content-center align-items-center">
                    <div class="contact d-flex flex-column align-items-center justify-content-center">
                       
                        <div class="email-contact">
                            <h6>{{ this.store.footerColumns[0].email }}</h6>
                        </div>
                        
                        <div class="phone-contact d-flex align-items-center">
                            <h6>{{ this.store.footerColumns[1].phone }}</h6>
                        </div>
                    </div>
                    
                </div>

                <div class="col-3 d-flex justify-content-center align-items-center text-center ">
                    <h6>{{ this.store.footerColumns[2].address }}</h6>
                    
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <div class="social-contact">
                        <h6>Stay in contact with us</h6>
                        <div class="social-media-icons">
                            icone
                        </div>
                    </div>
                </div>
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

                h6{
                    font-size: 0.7rem;
                    color: $text-color-9;
                }
            }
        }
    }
</style>