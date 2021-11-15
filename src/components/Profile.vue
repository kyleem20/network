<template>
  <Modal id="ProfileForm">
    <template #modal-title> Create or Edit your profile </template>

    <template #modal-body> <ProfileForm /> </template>
  </Modal>
  <div class="text-end" v-if="account.id === profile.id">
    <center>
      <button
        class="mdi mdi-plus bg-success m-3"
        data-bs-toggle="modal"
        data-bs-target="#ProfileForm"
      ></button>
    </center>
  </div>
  <center>
    <div class="text center">
      <h2>Welcome to {{ profile.name }}'s profile</h2>
    </div>
  </center>

  <div class="d-flex justify-content-between">
    <div class="col-md-4 card elevation-2 rounded m-1">
      <img class="rounded mt-2" :src="profile.coverImg" />
      <hr />
      <div class="text-center">
        <p>{{ profile.class }}</p>
      </div>
      <div>
        <img class="mt-1 pic ms-2" :src="profile.picture" />

        <h5 v-if="profile.graduated" class="mdi mdi-school ms-2"></h5>
      </div>
      <span>
        <h6 class="ms-2">{{ profile.name }}</h6>
      </span>
      <p class="ms-2">Bio: {{ profile.bio }}</p>
    </div>

    <div class="col-md-3">
      <div v-for="a in aPoster" :key="a.title">
        <APoster :aPoster="a" />
      </div>
    </div>
  </div>
  <div class="row container-fluid">
    <div v-for="p in profilePosts.posts" :key="p.id" class="col-md-9">
      <Post :post="p" />
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
    profilePosts: {
      type: Object,
    },
  },

  setup() {
    return {
      aPoster: computed(() => AppState.aPoster),
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
// .pic {
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   object-fit: cover;
// }
// .fit {
//   display: inline;
// }
</style>