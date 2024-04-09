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

    <section class="working-process">
        <div class="container">
            <h1>Working <span>process</span> </h1>
            <div class="working-process-gallery">
                <img src="/public/assets/svg/svg-3.svg" alt="">
                <div class="row">
                    <div class="col-3">
                        <div class="card-img">
                            <div class="card-img-fix d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-lightbulb first-icon"></i>
                            </div>
                        </div>
                        <div class="card-text text-center d-flex align-item-center flex-column justify-content-center">
                            <h5>First theres an idea</h5>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quas tempore sequi.</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card-img">
                            <div class="card-img-fix d-flex justify-content-center align-items-center ">
                                <i class="fa-regular fa-comment second-icon"></i>
                            </div>
                        </div>
                        <div class="card-text text-center d-flex align-item-center flex-column justify-content-center">
                            <h5>Then we talk about</h5>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quas tempore sequi.</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card-img">
                            <div class="card-img-fix d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-cloud third-icon"></i>
                            </div>
                        </div>
                        <div class="card-text text-center d-flex align-item-center flex-column justify-content-center">
                            <h5>And we thing about</h5>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quas tempore sequi.</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="card-img">
                            <div class="card-img-fix d-flex justify-content-center align-items-center ">
                                <i class="fa-solid fa-pen last-icon"></i>
                            </div>
                        </div>
                        <div class="card-text text-center d-flex align-item-center flex-column justify-content-center">
                            <h5>So we draw along</h5>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam quas tempore sequi.</h6>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>

    </section>

    <section class="work-with-us">
        <div class="container">
            Wanto to work with us?
        </div>
    </section>

    <section class="events">
        <div class="container">
            last section
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';
    .main{
        width: 100vw;
        height: 1550px;

        .main-gallery{
            height: 100%;
            width: 100%;

            .row{
                height: 100%;

            }
               
        }
    }

    .working-process{
            width: 100%;
            height: 710px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-items: center;
            

            .container{
                width: 1300px;
                height: 80%;
                // border: 1px solid black;
                margin-bottom: 50px;

                h1{
                    color: black;
                    text-align: center;
                    font-size: 4rem;

                    span{
                        font-style: italic;
                        font-weight: bold;
                        font-size: 4.3rem;
                    }
                }

                .working-process-gallery{
                    position: relative;
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 100px;
                    img{
                        width: 90%;
                        margin-bottom: 200px;
                    }

                    .row{
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        // top: 90px;


                        .col-3{
                            height: 100%;
                            // border: 1px solid black;
                            

                            .card-img{
                                height: 50%;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                

                                .card-img-fix{
                                    height: 140px;
                                    width: 140px;
                                    border-radius: 50%;
                                    background-color: $bg-color-6;

                                    i{
                                        // color: $bg-color-8;
                                        font-size: 2rem;
                                    }

                                    .first-icon{
                                        color: $bg-color-8;
                                    }

                                    .second-icon{
                                        color: $text-color-3;
                                    }

                                    .last-icon{
                                        color: $text-color-7;
                                    }

                                    .third-icon{
                                        color: $text-color-10;
                                    }
                                }
                            }

                            .card-text{
                                height: 50%;
                                width: 100%;

                                h5{
                                    color: $text-color-11;
                                }

                                h6{
                                    color: $text-color-5;
                                    padding-top: 5px;
                                }
                            }
                        }
                    }
                }
            }
        }

    .work-with-us{
        width: 100vw;
        height: 525px;
        background-color: $bg-color-6;

        .container{
            width: 1300px;
            border: 1px solid black;
        }
    }   
    
    .events{
        width: 100vw;
        height: 725px;
        background-color: lightcyan;

        .container{
            width: 1300px;
            border: 1px solid black;

        }
    }

</style>