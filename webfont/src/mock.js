import Mock from 'mockjs'

const Random = Mock.Random
const imgBanner = function(){
    var banner = []
    for(let i = 0 ; i< 5; i++){
		banner[i] = {
			'bannerImg':Random.image('400x200',Random.color()),  // Random.image 方法：可选参数见官网 
			'bannerId':Random.id()
		  }                                       // https://github.com/nuysoft/Mock/wiki
    }

   return banner
}

const userList = function(){
    var user = []
    for(let i = 0; i < 5;i++){
        user[i] = {
        'uname':Random.name(),      // 规则： '属性名｜规则'：属性值
        'uid':Random.integer(1,20)
        }
    }
    return user    
}

const productList = {
		"product|5-10":[{    // 规则： product 数组 5-10个元素
			'ptitle':'@ctitle',      
			'pid|+1':1,               // 规则： id 从1 开始 依次 +1 
			'pinfo':'@csentence',
			'pimg':Random.image('200x200')
		}]
}

Mock.mock('/api/bannerList','get',imgBanner)    // 地址、请求方式 自定
Mock.mock('/api/userList','get',userList)
Mock.mock('/api/productList','get',productList)

