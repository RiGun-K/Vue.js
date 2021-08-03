<template>
    <div id="app">
        <h1>Welcome {{ userId }}</h1>
        <!-- <input v-model="newId" type="text"><button @click="saveUserId">Save</button><br> -->
            <v-text-field>
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

        <!-- <button @click="updateReviews">Update</button> -->
        <div class="text-center">
            <v-btn
                rounded
                color="primary"
                dark
            >
                Button
            </v-btn>
        </div>

        <h1>{{ reviewCount }}</h1>
        <!-- <ul>
            <li v-for="r in reviews" :key="r.id">
                <p>{{ r.body }}</p>
            </li>
        </ul> -->

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
            this.updateUserId(this.newId)
        },
        updateReviews(){
            this.getReviews()
        }
    }
}
</script>