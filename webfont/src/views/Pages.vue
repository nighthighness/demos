<template>
    <div>
        <h5>分页</h5>
        <div class="list-container">
            <div v-for="(item,k) in dataList" :key="k" class="list">
                <h5>{{item.lid}}</h5>
                {{item.title}}
            </div>
        </div>
        <page-buttons :total="total" :totalPage="totalPage" :pno="pno" @passPno="getPno" @setPage="setPage"></page-buttons>
        <div>总条数：{{total}}---当前页码：{{pno}}---每页大小：{{pageSize}}</div>
    </div>
</template>

<script>
import PageButtons from './pageButtons'
import {axiosGet, AxiosGet} from '../utils/request'

export default {
    components:{
        PageButtons
    },
    data(){
        return{
            dataList:[],
            curPage:1,//当前页
            total:0,//总条数
            totalPage:0, // 总页数
			pageSize:6,//每页条数	
            pno:0, // 当前页码
        }
    },
    methods:{
        getAll(){
            axiosGet('/product/pages')
            .then(res=>{
                this.total = res.data.msg.length
                this.totalPage = Math.ceil(this.total / this.pageSize) 
            })
        },
        getData(pno){
            this.pno = this.pno || 1
            console.log(this.pno)
            axiosGet('/product/pages',{
                params:{
                    pno:this.pno,
                    count:this.pageSize
                }
            })
            .then(res=>{
                console.log(res.data)
                this.dataList = res.data.msg
            })
        },
        // 拿到 buttons 传的 i
        getPno(curPage){
            this.pno = curPage
            this.getData(this.pno)
        },
        // 前后翻页
        setPage(i){
            // console.log(i)
            this.pno = i
            this.getData(this.pno)
        }

    },
    mounted(){
        this.getPno()
    },
    created(){
        this.getAll()
    }
}
</script>

<style scoped>
    .list-container{
        border:1px solid darkcyan;
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        width: 800px;
        margin: 0 auto;
    }
    .list{
        box-sizing: border-box;
        width:240px;
        height: 150px;
        padding: 20px;
        margin: 10px;
        border:1px solid bisque;
        background: gainsboro;
    }
</style>