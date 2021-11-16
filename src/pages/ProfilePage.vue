<template>
  <div class="row container-fluid">
      <Modal id="ProfileForm">
    <template #modal-title> Edit your profile </template>

    <template #modal-body> <ProfileForm /> </template>
  </Modal>
  <div class="text-end" v-if="account.id === profile.id">
    <div>
      <button
        class="mdi mdi-plus bg-success m-3"
        data-bs-toggle="modal"
        data-bs-target="#ProfileForm"
      ></button>
    </div>
  </div>
  <div>
    <div class="text-center">
      <h2>Welcome to {{ profile.name }}'s profile</h2>
    </div>
  </div>

  <div class="d-flex justify-content-between">
    <div class="col-md-12 card elevation-2 rounded m-1">
      <img class="rounded m-2" :src="profile.coverImg" />
      <div class="d-flex flex-row align-items-center">
        <img class="mt-1 pic ms-2 rounded-pill" :src="profile.picture" />
        <h3 class="ms-3">{{ profile.name }}</h3>
      </div>
      <span class="d-flex flex-row ms-3">
        <h4>
        <a class="mx-1 mt-1 text-secondary selectable mdi mdi-github" v-if="profile.github" v-bind:href="profile.github">
        </a>
         <a class="mx-1 mt-1 text-secondary selectable mdi mdi-linkedin" v-if="profile.linkedin" v-bind:href="profile.linkedin">
        </a>
        </h4>
      </span>  
      
      <p class="m-3">{{ profile.bio }}</p>
      <div class="d-flex flex-row">
      <p class="ms-3">Class of {{ profile.class }}</p>
      <h5 v-if="profile.graduated" class="mdi mdi-school ms-2"></h5>
      </div>
    </div>
  </div>
<div class="d-flex flex-row">
  <div class="col-md-9">
    <div v-for="p in profilePosts" :key="p.id" >
      <Post :post="p" />
    </div>
  </div>
      <div class="col-md-3">
        <div v-for="a in aPoster" :key="a.id" :aPoster="a">
            <APoster :aPoster="a"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
import { useRoute } from "vue-router";


export default {
  name: "Profile",
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        await profileService.getProfile(route.params.id);
        await profileService.getProfilePostId(route.params.id);
        // await aPosterService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message);
      }
    });
  
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      aPoster: computed(()=> AppState.aPoster),
      profilePosts: computed(()=> AppState.profilePosts),
    };
  },
};
</script>

<style scoped>

</style>