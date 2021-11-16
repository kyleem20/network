<template>
    <div class="card m-3 col-md-12 d-flex" >
      <div class="row">
        <div class="col-md-12 flex-row">
          <h2><img :src="post.creator?.picture" alt="creator picture" class="selectable rounded-pill w-25 m-2" @click="linkProfile(post.creatorId)">
           {{post.creator?.name}} 
        <span v-if="post.creator.graduated">
        <span class="mdi mdi-school"></span>
        </span>
        </h2>
        </div>
        <div class="col-md-12 p-0">
          <div class="text-secondary ps-5"> {{post.createdAt}}</div>
          <img v-if="post.imgUrl" :src="post.imgUrl" alt="" class="d-flex flex-row w-75 justify-content-center m-5">
          <h4 class="m-3 p-3">
          {{post.body}}
          </h4>
            <div class=" d-flex m-2 p-2 align-items-center">
            <p class="m-2">{{post.likeIds?.length}}</p>
            <button class="btn btn-outline-primary mdi mdi-heart selectable" @click="like(post.id)" v-if="!post.likeIds.includes(account.id)"></button>
            <button class="btn btn-success mdi mdi-heart selectable" @click="like(post.id)" v-if="post.likeIds.includes(account.id)"></button>
            <button class="ms-2 btn btn-outline-primary mdi mdi-trash-can selectable" v-if="post.creatorId == account.id" @click="deletePost(post.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
import { computed, onMounted, reactive } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import {postsService } from "../services/PostsService"
import { AppState } from "../AppState"
import { profileService } from "../services/ProfileService"
import {useRouter} from "vue-router"
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(){
    
    const router = useRouter()
    // onMounted(async () => {
    //   try {
    //     await postsService.getAll()
    //   } catch (error) {
    //     logger.error(error)
    //     Pop.toast("error")
    //   }
    // });
    return {
      // posts: computed(()=> AppState.posts),
      account: computed(()=> AppState.account),
      // profilePosts: computed(()=> AppState.profilePosts),

      async create() {
        try {
          await postsService.create(state.editable)
        } catch (error) {
          logger.log(error)
          Pop.toast("error")
        }
      },
      async deletePost(id) {
        try {
          await postsService.deletePost(id)
        } catch (error) {
          logger.log(error)
          Pop.toast("error")
        }
        return postsService.getAll()},
        
      async like(id){
        try {
          await postsService.like(id)
        } catch (error) {
          logger.log(error)
          Pop.toast("error")
        }
      },
      async linkProfile(id){
        try {
          if(id){
          await profileService.getProfile(id)
          router.push({path: '/profile/' + id})
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("error")
        }
      },
    }
  }}
</script>


<style lang="scss" scoped>

</style>