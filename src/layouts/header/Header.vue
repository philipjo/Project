<template>
  <v-app-bar app clipped-left dense clipped-right color="#FC4B4B" dark>
    <v-toolbar-title class="align-center d-flex">
      <span class="logo-icon">
        <v-layout>
          <v-flex md4>
            <h2 style="font-family: poppins">PIZZAMAX</h2>
          </v-flex>
        </v-layout>
      </span>
    </v-toolbar-title>
    <v-app-bar-nav-icon
      @click="
        $vuetify.breakpoint.smAndDown
          ? setSidebarDrawer(!Sidebar_drawer)
          : $emit('input', !value)
      "
      class="hidden-sm-and-down"
    ></v-app-bar-nav-icon>
    <v-app-bar-nav-icon
      class="d-block d-md-none"
      @click="
        $vuetify.breakpoint.smAndDown
          ? setSidebarDrawer(!Sidebar_drawer)
          : $emit('input', !value)
      "
    />
    <v-spacer />

    <v-toolbar-items class="nav_item hidden-sm-and-down">
      <v-row justify="center">
        <v-menu
          :close-on-content-click="true"
          :nudge-bottom="40"
          :nudge-right="50"
          transition="slide-y-transition"
          style="padding-top: 40px"
          bottom
          dark
        >
          <template v-slot:activator="{ on }">
            <v-list-item-avatar color="grey" v-on="on" style="cursor: pointer">
              <img src="../../assets/user.png" />
            </v-list-item-avatar>
          </template>
          <v-card max-width="800">
            <v-layout pa-3>
              <v-flex>
                <v-layout style="cursor: pointer">
                  <v-flex>
                    <span style="font-size: 12px; color: white"
                      >Account Settings</span
                    >
                  </v-flex>
                  <v-flex pl-3>
                    <v-icon>mdi-settings</v-icon>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout style="cursor: pointer">
                  <v-flex>
                    <span style="font-size: 12px; color: white"
                      >Change Password</span
                    >
                  </v-flex>
                  <v-flex pl-3>
                    <v-icon>mdi-settings</v-icon>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout @click="appLogout" style="cursor: pointer">
                  <v-flex text-left>
                    <span style="font-size: 12px">Sign Out</span>
                  </v-flex>
                  <v-flex text-right>
                    <v-icon style="font-size: 14px">mdi-logout</v-icon>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-menu>
        <v-spacer></v-spacer>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
// Utilities
import store from "../../store";
// import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userData: null,
    userprofile: [
      { title: "My Profile" },
      { title: "My Balance" },
      { title: "Inbox" },
      { title: "Account Setting" },
      { title: "Logout" },
    ],
    href() {
      return undefined;
    },
  }),

  computed: {
    ...mapState(["Sidebar_drawer"]),
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    }),

    appLogout() {
      if (store.state.isLoggedIn) {
        store.commit("logoutUser");
        this.$router.push({ path: "/Login" });
      }
    },
  },
};
</script>

<style >
.router-link {
  text-decoration: none;
}
</style>