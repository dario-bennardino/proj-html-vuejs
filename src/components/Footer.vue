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
        Footer
    </div>
    
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables';

    .footer{
        height: 135px;
        width: 100vw;
        background-color: $bg-color-8;
        border: 1px solid black;
    }
</style>