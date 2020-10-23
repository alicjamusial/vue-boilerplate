<template>
  <v-row class="ma-0">
    <v-col cols="12" class="d-flex fill-height column align-center">
      <div class="text-center flex-grow-1 mt-12">
        <div>~ vue & vuetify boilerplate with map and some other nice stuff ~</div>
        <v-btn outlined small class="mt-4">
          this button does nothing
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" class="map-wrapper">
      <map-element></map-element>
    </v-col>
  </v-row>
</template>

<script>
import MapElement from "@/map/MapElement";

export default {
  name: 'Dashboard',
  components: {
    MapElement
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss" type="text/scss">
  .map-wrapper {
    height: 500px;
  }
</style>