<template>
  <div class="profile-header">
    <div class="left-content">
      <img class="avatar" src="/avatar.png" />
    </div>
    <div class="right-content">
      <div class="profile-information">
        <h2 class="prfile-name">Игорь</h2>
        <span
          v-if="!isChangeProfileStatus"
          class="profile-status"
          v-on:click="changeProfileStatus"
        >
          <button>
            <i class="bi bi-pencil-fill"></i>
          </button>
          {{ profileStatus }}
        </span>
        <span v-else>
          <input class="changeStatus" v-model="profileStatus" />
          <button v-on:click="saveProfileStatus()">
            <i class="bi bi-check"></i>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useStore } from "vuex";

export default class ProfileComponent extends Vue {
  store = useStore();
  profileStatus = "я не я когда я";
  isChangeProfileStatus = false;

  changeProfileStatus() {
    this.isChangeProfileStatus = !this.isChangeProfileStatus;
  }

  saveProfileStatus() {
    this.isChangeProfileStatus = !this.isChangeProfileStatus;
    this.store.dispatch("addToast", {
      type: "success",
      title: "Уведомление",
      message: "Статус успешно обновлён",
    });
  }
}
</script>

<style lang="scss">
button:hover {
  background-color: var(--black);
  color: var(--white);
  cursor: pointer;
}
.changeStatus {
  font-size: 1rem;
  padding: 0;
  background-color: transparent;
  border: none;
}
.profile-header {
  display: flex;
  .left-content {
    .avatar {
      width: 10vh;
      height: 10vh;
      max-height: 200px;
      max-width: 200px;
    }
  }
  .right-content {
    flex: 1;
    text-align: left;
    margin-left: 1rem;
    .profile-information {
      .prfile-name {
        margin: 0;
        font-size: 1.5rem;
      }
      .profile-status {
        font-size: 1rem;
      }
      .profile-status:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
