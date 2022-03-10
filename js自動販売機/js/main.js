/* フローチャート１
　効果紙幣を入れる
フローチャート２
　商品を選択
フローチャート３
　おつり返却ボタン投下
１０，５０，５００，１０００円硬貨導入ボタン
商品選択ボタン「好きな商品５種」
おつり返却ボタン
投入金額表示
商品名出力表示「●●がでてきました」 */
const price90 = 90
const price100 = 100
const price500 = 500
const price1000 = 1000
const price330 = 330
const water = '水'
const tea = 'お茶'
const milktea = 'ミルクティ'
const coffe = '最高級コーヒー'
const Vitamin = 'デカビタ'

const Main = new Vue({
el:'#app',
data:{
    disp:0,
    coinData:[
        {id:1,'name':'10円','kingaku':10},
        {id:2,'name':'50円','kingaku':50},
        {id:3,'name':'100円','kingaku':100},
        {id:4,'name':'500円','kingaku':500},
        {id:5,'name':'1000円','kingaku':1000}
    ],
    drinkData:[
        {id:1,'onamae':'tea','title':'お茶','okane':'100円','price':100},
        {id:2,'onamae':'water','title':'お水','okane':'90円','price':90},
        {id:3,'onamae':'coffe','title':'最高級コーヒー','okane':'1000円','price':1000},
        {id:4,'onamae':'milktea','title':'ミルクティ','okane':'500円','price':500},
        {id:5,'onamae':'vitamin','title':'デカビタ','okane':'330円','price':330},
        ]
},
methods:{/* :function()ファンクション省略できる！！ */
   calc(i) {    /* 金額反映と加算 */
       this.disp += i
    },
   clr(){/* 返金 */
       this.disp = 0
    },
    getWater(){
        this.getDrink(water,price90)
    },
    getTea(){
        this.getDrink(tea,price100)
    },
    getVitamin(){
        this.getDrink(Vitamin,price330)
    },
    getMilktea(){
        this.getDrink(milktea,price500)
    },
    getCoffe(){
        this.getDrink(coffe,price1000)
    },
    getDrink(onamae,price){/* 購入ものアラート表記，からの減算 */
        if (this.disp - price!= 0 ) {
            alert(`${onamae}を購入`)
            alert(`${this.disp -= price}円のおつり`)
        }else{
            alert(`${onamae}を購入`)
            this.disp = 0
        }
    },
},/* disabled解除にするメソッド↓ */
computed: {
    // required() {
    //     return this.disp == '';
    // },
    water() {/* 90円超えたらお水ボタン解除 */
        if (this.disp < 90) {
        return true;
    }},
    tea(){
        if (this.disp < 100) {
        return true;
    }},
    Vitamin(){
        if (this.disp < 330) {
        return true;
    }},
    milktea(){
        if (this.disp < 500) {
        return true;
    }},
    coffe(){
        if (this.disp < 1000) {
        return true;
    }},
}})