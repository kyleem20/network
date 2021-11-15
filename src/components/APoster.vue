<template>
    <div class=" m-3">
      <div class="col-md-3 ">

          <div class="p-3 rounded text-center" v-for="a in aPoster" :key="a.tall">
            <img class="img-fluid m-3" :src="a.tall" alt="poster" >
            {{ads.tall}}
          </div>
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