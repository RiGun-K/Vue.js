<template>
    <div id="app">
        <h1>Welcome  {{ userId }}</h1>
        <v-text-field v-model="newId" type="text" placeholder="수정할 내용을 입력하세요."></v-text-field>
        <v-btn rounded color="primary" dark @click="saveUserId">수정하기</v-btn>
        <br>
            <!-- <v-text-field>
                <v-icon
                    slot="append"
                    color="red"
                >
                mdi-plus
                </v-icon>
                <v-icon
                    slot="prepend"
                    color="green"
                >
                mdi-minus
                </v-icon>
            </v-text-field>

        <div class="text-center">
            <v-btn
                rounded
                color="primary"
                dark
            >
                Button
            </v-btn>
        </div> -->
        <br>

        <br>
        <h1>API로 받아온 데이터 배열의 수 는 {{ reviewCount }} 개 입니다.</h1>
        <br>
        <v-btn rounded color="primary" dark @click="updateReviews">데이터 불러오기</v-btn>
        <br>
        <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{ r.body }}</p>
            </li>
        </ul>

        <!-- div id="app" 이후로 v를 사용하기 위해 사이트에서 링크를 복사해서 붙여 넣기만 한다 --> 

        <v-app id="inspire">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Comment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in reviews"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default{
    data(){
        return { newId:''}
    },
    computed:{
        // namespaced 가 설정되지 않은 경우
        ...mapState({
            userId:state=>state.user.userId
            // state 안에 변수가 많을 경우 용이함
        }),
        // namespaced 가 설정 된 경우 모듈명을 적는다.
        ...mapState('reviews', {
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods:{
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        saveUserId(){
            // this.$store.commit('updateUserId', this.newId)
            this.updateUserId(this.newId)
        },
        updateReviews(){
            // this.$store.dispatch('reviews/requestReviews')
            this.getReviews()
        }
    }
}
</script>