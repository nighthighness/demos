<template>
    <div class="page-buttons">
        <div>
            <a href="javascript:;" @click="prevPage">prev</a>
            <a  href="javascript:;" v-for="(index,k) in totalPage" :key="k" @click="currentPages(index)" :class="{'isactive': active === index}">{{index}}</a>
            <a href="javascript:;" @click="nextPage">next</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:1
        }
    },
    props:['total','totalPage','pno'],
    methods:{
        // 当前页
        currentPages(i){
            this.active = i
            this.$emit('passPno',i)
        },
        // 上页
        prevPage(){
            if(this.pno>1){
                this.active = this.pno-1
                this.$emit('setPage',this.pno-1)
            }
        },
        // 下页
        nextPage(){
            if(this.pno < this.totalPage){
                this.active = this.pno+1
                this.$emit('setPage',this.pno+1)
            }
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
    .isactive{
        color: blue
    }
</style>
