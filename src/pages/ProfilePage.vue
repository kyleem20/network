<template>
  <div class="row container-fluid">
    <Profile :profile="profile" :profilePosts="profilePosts" />
  </div>

  <!-- <div class="profile container-fluid">
    <div class="row mt-3 justify-content-center">
      <div class="col-md-4 elevation-2 ms-2 text-center">
        <Profile :profile="profile" :profilePost="profilePost" />
        <h1>{{ profile.name }}</h1>
        <img class="rounded mt-2" :src="profile.picture" alt="" />
        <p>{{ profile.email }}</p>
        <h3>{{profile.bio}}</h3>
      </div>
    </div>
    <div class="row ms-1 mt-3">
      <div class="col-md-8">
        <CreatePost v-if="account.id"/>
      </div>
      <div class="col-md-4">
        <APoster/>
      </div>
    </div>
  </div> -->
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { onMounted, watchEffect} from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
import { useRoute } from "vue-router";
import { aPosterService } from '../services/APosterService';
import { postsService } from '../services/PostsService';


export default {
  name: "Profile",
  setup() {
    const route = useRoute();
    // watchEffect(async () => {
    //   try {
    //     if (route.name == "Profile") {
    //       await profileService.getProfile(route.params.id);
    //       await postsService.getAll("?creatorId=" + route.params.id);
    //     }
    //   } catch (error) {
    //     logger.error(error);
    //     Pop.toast(error.message, "error");
    //   }
    // });
    // return {
    //   account: computed(() => AppState.account),
    //   profile: computed(() => AppState.profile),
    // };
    onMounted(async () => {
      try {
        await profileService.getProfile(route.params.id);
        await profileService.getProfilePostId(route.params.id);
        await aPosterService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message);
      }
    });
  
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      aPoster: computed(()=> AppState.aPoster),
      profilePosts: computed(()=> AppState.profilePosts)
    };
  },
};
</script>

<style scoped>

</style>