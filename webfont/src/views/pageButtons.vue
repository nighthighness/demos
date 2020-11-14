<template>
    <div class="page-buttons">
        <div>
            <a href="javascript:;" @click="prevPage">prev</a>
            <a  href="javascript:;" v-for="index in totalPage" @click="currentPages(index)">{{index}}</a>
            <a href="javascript:;" @click="nextPage">next</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:'.active'
        }
    },
    props:['total','totalPage','pno'],
    methods:{
        currentPages(i){
            this.$emit('passPno',i)
        },
        prevPage(){
            this.$emit('setPage',this.pno-1)
        },
        nextPage(){
            this.$emit('setPage',this.pno+1)
        }
    }

}
</script>

<style scoped>
    .page-buttons{
        display: flex;
        align-items: center;
    }
    .page-buttons div{
        margin: 20px auto;
    }
    a{
        text-decoration: none;
        padding: 10px;
    }
</style>
