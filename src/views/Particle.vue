<template>
  <div class="container">
    <magic-image/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MagicImage from '@/components/MagicImage.vue'

@Component({
  components: {
    MagicImage
  }
})

export default class Particle extends Vue {}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
}
</style>
