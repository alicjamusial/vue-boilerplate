<template>
  <v-app>
    <v-app-bar app dense class="primary">
      <v-toolbar-title class="fill-height">
        <router-link to="/"><img src="@/assets/logo.png" class="fill-height pa-3"></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon dark fab
                   :color="!darkTheme ? `white`: `grey darken-2`" @click="toggleTheme">
              <v-icon>mdi-brightness-6</v-icon>
            </v-btn>
          </template>
          <span class="caption">change theme</span>
        </v-tooltip>
      </div>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height class="align-start">
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <div>v. {{currentVersion}}</div>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import {currentVersion} from "@/utils/Constants";

export default {
  data() {
    return {
      currentVersion: currentVersion
    }
  },
  computed: {
    ...mapState([
      'darkTheme'
    ])
  },
  methods: {
    ...mapMutations([
      'changeTheme'
    ]),
    toggleTheme() {
      this.changeTheme(!this.darkTheme);
    }
  },
  watch: {}
}
</script>

<style lang="scss">
  /*@import "./styles/_scrollbars.scss";*/

</style>