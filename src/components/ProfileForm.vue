<template>
  <div class="profile form component">
    <form @submit.prevent="edit(account)">
      <label for="">Profile Picture</label>
      <input
        type="url"
        placeholder="Profile Image Url..."
        name="picture"
        id="picture"
        class="form-control mb-2"
        required
        v-model="account.picture"
      />
      <label for="">Name</label>
      <input
        type="text"
        placeholder="Name Here..."
        name="name"
        id="name"
        class="form-control mb-2"
        required
        v-model="account.name"
      />
      <label for="">Bio</label>
      <input
        type="text"
        placeholder="Bio..."
        name="bio"
        id="bio"
        class="form-control mb-2"
        required
        v-model="account.bio"
      />
      <label for="">Cover Image</label>
      <input
        type="url"
        placeholder="Cover Image Url..."
        name="coverImg"
        id="coverImg"
        class="form-control mb-2"
        required
        v-model="account.coverImg"
      />
      <div class="d-flex align-items-center">
        <p class="mb-0 me-5">Have you graduated?</p>
        <input
          type="checkbox"
          name="graduated"
          id="graduated"
          v-model="account.graduated"
        />
      </div>
      <label for="">GitHub</label>
      <input
        type="text"
        placeholder="GitHub..."
        name="github"
        id="github"
        class="form-control mb-2"
        required
        v-model="account.github"
      />
      <label for="">LinkedIn</label>
      <input
        type="text"
        placeholder="LinkedIn..."
        name="linkedin"
        id="linkedin"
        class="form-control mb-2"
        required
        v-model="account.linkedin"
      />
      <label for="">Class Year</label>
      <input
        type="text"
        placeholder="Class Of..."
        name="class"
        id="class"
        class="form-control mb-2"
        required
        v-model="account.class"
      />
      <button type="submit" class="btn btn-secondary">Update</button>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { accountService } from "../services/AccountService";
import { Modal } from "bootstrap";

export default {
  setup() {
    // const account = ref({});
    return {
      // account,
      async edit(account) {
        try {
          await accountService.edit(account);
          Modal.getOrCreateInstance(document.getElementById("ProfileForm")).hide();
        } catch (error) {
          logger.error(error);
          Pop.toast("error");
        }
      },
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>