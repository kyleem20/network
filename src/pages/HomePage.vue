<template>
  <div class="home container-fluid">
     <Search />
      <div class="row text-center">
      <div class="col-md-12">
        <button class="btn btn-secondary selectable m-2" @click="prevPage" >Previous</button>
        <button class="btn btn-secondary selectable m-2" @click="nextPage" >Next</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
      <div class="text-end" v-if="account.id">
      <button
        class="mdi mdi-plus bg-success m-3"
        data-bs-toggle="modal"
        data-bs-target="#CreatePost"
      ></button>
    </div>
    </div>
    </div>
  <Modal id="CreatePost">
    <template #modal-title> Share what's happening with Everyone</template>
    <template #modal-body> <CreatePost /> </template>
  </Modal>
    
      <div class="row">
        <div class="col-md-8">
          <div v-for="p in posts" :key="p.id" :post="p">
            <Post :post="p" />
          </div>
        </div>
        <div class="col-md-4 img-fluid">
          <div v-for="a in aPoster" :key="a.id" :aPoster="a">
            <APoster :aPoster="a"/>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { postsService } from '../services/PostsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import { aPosterService } from '../services/APosterService';
export default {
  name: 'Home',
  setup(){
    let page = 1
    onMounted(async () => {
      try {
        await postsService.getAll();
        await aPosterService.getAll();
        // logger.log(AppState.account);
      } catch (error) {
        logger.error(error);
        Pop.toast("error with home page", "error");
      }
    });
    
    return{
      page,
      account: computed(()=> AppState.account),
      profile: computed(()=> AppState.profile), 
      posts: computed(()=> AppState.posts),
      aPoster: computed(()=> AppState.aPoster),

      async nextPage(){
        try {
          page++
          await postsService.getAll('?page=' + page)
        } catch (error) {
          logger.log(error)
          Pop.toast('Cannot go to next page', "error")
        } 
      },
      
      async prevPage(){
        try {
          page--
          await postsService.getAll('?page=' + page)
        } catch (error) {
          logger.log(error)
          Pop.toast('cannot get previous page', "error")
        }
      }

    };
  },
};

</script>

<style scoped lang="scss">

</style>
