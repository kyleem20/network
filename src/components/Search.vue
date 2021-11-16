<template>
    <div class="search row px-5">
    <div class="col-12 m-2">
      <!-- <form @submit.prevent="searchPosts" class="input-group"> -->
        <input
          @keypress="searchPosts"
          v-model="query"
          class="form-control"
          placeholder="Search Posts"
          type="text"
          name="search"
          id=""
        />
        <!-- <button class="btn btn-outline-primary">Search</button> -->
      <!-- </form> -->
    </div>
  </div>
</template>


<script>
import { computed, reactive, ref } from '@vue/reactivity';
import { AppState } from '../AppState';
import {postsService} from '../services/PostsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
  setup(){
        const query = ref("");
    return {
        query,
        posts: computed(() => AppState.posts),
      async searchPosts(){
        try {
          await postsService.getAll("?query=" + query.value);
        } catch (error) {
          logger.error(error);
          Pop.toast("search error", "error")
        }
      }
    }
}}
</script>


<style lang="scss" scoped>

</style>