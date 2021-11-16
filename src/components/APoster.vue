<template>
      <div class="col-md-12 ">

          <div class="p-3 rounded text-center" >
            <img class="img-fluid m-3" :src="aPoster.tall" alt="poster" >
          </div>
      </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import {aPosterService} from "../services/APosterService"

export default {
  props: { aPoster: {type: Object, required: true}},
  setup(){
    // onMounted(async () => {
    //   try {
    //     await aPosterService.getAll()
    //   } catch (error) {
    //     logger.error(error)
    //     Pop.toast(error.message)
    //   }
    // });
    return {
      // aPoster: computed(()=> AppState.aPoster),

    }
  }}
</script>


<style lang="scss" scoped>

</style>