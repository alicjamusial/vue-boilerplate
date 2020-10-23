<template>
  <v-card class="map-container elevation-0">
    <l-map class="map" ref="map" :maxBoundsViscosity="1" :minZoom="1"
           :zoom="zoom" :maxBounds="maxBounds" :worldCopyJump="true">
      <l-marker :lat-lng="marker"></l-marker>
      <l-control-scale position="bottomleft" :imperial="false"></l-control-scale>
      <l-tile-layer :url="url" :attribution="attribution" :noWrap="false"></l-tile-layer>
      <slot></slot>
    </l-map>
  </v-card>
</template>

<script>
import L from 'leaflet';

//temp fix for https://github.com/KoRiGaN/Vue2Leaflet/issues/28
delete L.Icon.Default.prototype._getIconUrl;
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
// end of temp fix

import {
  LMap,
  LMarker,
  LTileLayer,
  LControlScale
} from 'vue2-leaflet';

export default {
  name: 'MapElement',
  components: {
    LMap,
    LTileLayer,
    LControlScale,
    LMarker
  },
  data() {
    return {
      controlLayersOptions: {
        position: 'bottomright'
      },
      zoom: 2,
      maxBounds: [[-90, -180], [90, 180]],
      attribution: '&copy; app 2020',
      marker: L.latLng(47.413220, -1.219482),
      showMarker: false,
    };
  },
  computed: {
    url() {
      return 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
    },
  },
  methods: {
    lmap() {
      return this.$refs.map ? this.$refs.map.mapObject : null;
    },
  },
  async mounted() {
    L.DomEvent.on(this.lmap(), this.$listeners);
  },
  beforeDestroy() {
    this.lmap().off("mousedown");
  },
  watch: {},
}
</script>

<style scoped lang="scss" type="text/scss">
@import '../../node_modules/leaflet/dist/leaflet.css';

</style>
<style lang="scss" type="text/scss">
.map-container {
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>