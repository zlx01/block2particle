<template>
  <div class="main">
    <div class="img-wrap">
      <img
        src="https://picsum.photos/536/354"
        alt="img"
        class="particles-img"
        @click="handleClick('.particles-img', 0)">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Particles } from '@/utils/particle'

@Component
export default class MagicImage extends Vue {
  arrOpts = [
    {
      color: '#e85577', // 粒子颜色
      particlesAmountCoefficient: 20, // 粒子密度
      duration: 2000, // 过渡时间
      size: 4, // 粒子大小
      easing: 'easeOutQuart', // 过渡方式
      direction: 'top', // 过渡方向
      type: 'triangle' // 粒子形状
    },
    {
      color: '#e85577',
      duration: 1500,
      particlesAmountCoefficient: 14
    },
    {
      type: 'triangle',
      easing: 'easeOutQuart',
      size: 4,
      color: '#ccc',
      particlesAmountCoefficient: 4,
      oscillationCoefficient: 2
    },
    {
      type: 'rectangle',
      duration: 1500,
      easing: 'easeOutQuad',
      color: '#091388',
      direction: 'top',
      size: 8
    }
  ]

  handleClick (className: string, optIndex: number): void {
    const elNode = document.querySelector(className)
    const particlesOpts = this.arrOpts[optIndex]
    const particles = new Particles(elNode, particlesOpts)
    let isVisible = true
    if (!particles.isAnimating() && isVisible) {
      particles.disintegrate(null)
      isVisible = !isVisible
    }
  }
}
</script>

<style scoped>

</style>
