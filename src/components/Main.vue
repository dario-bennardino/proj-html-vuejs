<script>
import { store } from '../data/store'
import CardGallery from './CardGallery.vue';
import CardEvents from './CardEvents.vue';
    export default {
        components:{
            CardGallery,
            CardEvents,
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

        <!-- SECTION MAIN -->
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

            <!-- ICONE -->
            <div class="arrow d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-arrow-up"></i>
            </div>

            <div class="arrow-btn-top d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-arrow-up"></i>
            </div>

            <div class="btn-shop d-flex justify-content-center align-items-center">
                <img src="/public/assets/svg/svg-6.svg" alt="shop icon">
            </div>
            <div class="btn-balloon d-flex justify-content-center align-items-center">
                <img src="/public/assets/svg/svg-7.svg" alt="balloon icon">
            </div>
        </section>
    </section>

    <!-- SECTION PROCESS -->
    <section class="working-process">
        <div class="arrow d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-arrow-up"></i>
        </div>
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

    <!-- SECTION WORK WITH US -->
    <section class="work-with-us d-flex align-items-center justify-content-center ">
        <div class="container">
            Wanto to work with us?
        </div>
    </section>

    <!-- SECTION EVENTS -->
    <section class="events d-flex align-items-center ">
        <div class="container d-flex justify-content-center ">

            <CardEvents />
          

            <!-- <div class="card" style="width: 18rem;">
                <img src="/public/assets/img/h-2-blog-img-1.jpg" class="card-img-top" alt="img-1">
                <div class="card-body">
                    <h6 class="card-text">This way, loves: a detailed guide through new design</h6>
                    <h6>By Emily Fields</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="/public/assets/img/h-2-blog-img-2.jpg" class="card-img-top" alt="img-2">
                <div class="card-body">
                    <h6 class="card-text">I try to give people a different way of looking art</h6>
                    <h6>By Emily Fields</h6>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="/public/assets/img/h-2-blog-img-3.jpg" class="card-img-top" alt="img-3">
                <div class="card-body">
                    <h6 class="card-text">Introduce Richard Laperrière of those amazing features</h6>
                    <h6>By Emily Fields</h6>
                </div>
            </div> -->
        </div>
        <div class="arrow d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-arrow-up"></i>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

    // SECTION MAIN
    .main{
        width: 100vw;
        height: 1550px;
        position: relative;

        .arrow{
                background-color: $bg-color-8;
                width: 45px;
                height: 45px;
                position: absolute;
                right: 18px;
                bottom: 40px;

                i{
                    color: $text-color-1;   
                }
                
            }

            .arrow-btn-top{
                background-color: $bg-color-8;
                width: 45px;
                height: 45px;
                position: absolute;
                right: 0;
                top: 775px; 

                i{
                    color: $text-color-1;
                   
                }
            }

            .btn-shop{
                width: 40px;
                height: 40px;
                background-color: $bg-color-1;
                position: absolute;
                right: 0;
                top: 180px;

                img{
                    width: 40%;
                }
            }

            .btn-balloon{
                width: 40px;
                height: 40px;
                background-color: $bg-color-1;
                position: absolute;
                right: 0;
                top: 130px;
            
                    img{
                      width: 40px;
                      height: 40px;
                      color: white;
                    }     
            }

        //SECTION MAIN GALLERY    
        .main-gallery{
            height: 100%;
            width: 100%;

            .row{
                height: 100%;

            }
               
        }
    }

    //SECTION WORKING PROCESS
    .working-process{
            width: 100%;
            height: 710px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-items: center;
            position: relative;

            .arrow{
                background-color: $bg-color-8;
                width: 45px;
                height: 45px;
                position: absolute;
                right: 20px;
                bottom: 60px;

                i{
                    color: $text-color-1;  
                } 
            }
            
            .container{
                width: 1300px;
                height: 80%;
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


                        .col-3{
                            height: 100%;
                            
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
    //SECTION WORK WITH US
    .work-with-us{
        width: 100vw;
        height: 525px;
        background-color: $bg-color-6;

        .container{
            width: 1300px;
            border: 1px solid black;
        }
    }   
    
    //SECTION EVEN
    .events{
        width: 100vw;
        height: 725px;
        position: relative;

        // .card{
        //     border: white;
        // }

        .arrow{
                background-color: $bg-color-8;
                width: 45px;
                height: 45px;
                position: absolute;
                right: 20px;
                top: 55px;

                i{
                    color: $text-color-1;   
                }
            }

        .container{
            width: 1300px;
        }
    }

</style>