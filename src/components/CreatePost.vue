<template>
<div class="row bg-grey justify-content-center elevation-3 p-1 m-2">
      <form
    @submit.prevent="create">
    
    <div class="col-md-12 m-1">
      <label for="" class="form-label"></label>
      <textarea
        v-model="state.editable.body"
        required
        type="text"
        class="form-control"
        placeholder="Share what's happening..."
        aria-describedby="helpId"
      />
    </div>

     <div class="col-md-12 m-1">
      <label for="" class="form-label"></label>
      <input
        v-model="state.editable.imgUrl"
        type="text"
        class="form-control"
        placeholder="Image URL"
        aria-describedby="helpId"
      />
    </div>

    <div class="col-12 d-flex justify-content-end">
      <button class="mt-2 btn btn-dark text-success selectable">Post</button>
    </div>
  </form>
  </div>
</template>


<script>
import { computed, reactive, ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { Modal } from "bootstrap";
import { AppState } from "../AppState";
import { onMounted } from '@vue/runtime-core';


export default {
    setup(){
    const post = ref({});
    const state = reactive({
      editable: {},
    })
    // onMounted(async () => {
    //   try {
    //     await postsService.getAll()
    //   } catch (error) {
    //     logger.error(error)
    //     Pop.toast("error")
    //   }
    // });
    return {
      post,
      state,
      post: computed(()=> AppState.posts),
      // account: computed(()=> AppState.account),

      async create() {
        try {
          await postsService.create(state.editable);
          Modal.getOrCreateInstance(document.getElementById("CreatePost")).hide();
          state.editable = {}
        } catch (error) {
          logger.log(error)
          Pop.toast("Create is not working", "error");
        }
      },


    }
  }}
</script>

<style lang="scss" scoped>

</style>
