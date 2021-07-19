let app = new Vue({
    el:'#app',
    data:{
        brand:"League of Legend",
        product:'Socks',
        selectedVariant:0,
        // 폴더의 경우 경로 지정 주의하기 ./과 /은 다르다 
        details:['80% cotton','20% polyester','Gender-neutral'],
        // 객체가 2개 이상일 경우, {}로 묶어서 따로 선언
        variants:[
            {
                variantId:2334,
                variantColor:'green',
                variantImage:'./images/socks_green.jpg',
                variantQuantity:10
            },
            {
                variantId:2235,
                variantColor:'blue',
                variantImage:'./images/socks_blue.jpg',
                // 재고가 0 이므로 false로 처리됨 , 기존 작성된 inStock을 지웠음.
                variantQuantity:0
            }
        ],

        // 버튼 이벤트 객체 생성
        // cart라는 정수형 변수 추가
        cart:0
    },
        // 버튼에 대한 메소드 추가(cart)
        // Add to Cart' 라는 버튼 누를때마다, cart 1씩 증가
    methods:{
        addToCart(){
            this.cart +=1
        },
        updateProduct(variantImage){
            this.image=variantImage
        },
        // 그림은 2개 이므로 index는 0 혹은 1
        updateProduct(index){
            this.selectedVariant = index
        }
    },
        // <h1> 부분에 product,brand에 해당하는 데이터를 title로 출력
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    },
});


