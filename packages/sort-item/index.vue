<template>
  <div class="sort-item" draggable="true" ref="sort-item">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'sort-item',

  data () {
    return {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0
    }
  },

  mounted () {
    let timer
    this.$refs['sort-item'].addEventListener('touchstart', (e) => {
      this.startX = e.targetTouches[0].pageX
      this.startY = e.targetTouches[0].pageY
      this.x = this.offsetLeft
      this.y = this.offsetTop
      console.log(e, this.startX, this.startY, this.x, this.y)
      // timer = setTimeout(() => {
      this.$refs['sort-item'].style.opacity = 0.5
      this.$refs['sort-item'].style.position = 'absolute'
      this.$refs['sort-item'].style.top = '0'
      this.$refs['sort-item'].style.width = '300px'
      console.log(this.$parent)
      // }, 500)
    })

    this.$refs['sort-item'].addEventListener('touchmove', (e) => {
      const currentY = e.targetTouches[0].pageY - this.startY
      this.$refs['sort-item'].style.top = currentY + this.y + 'px'
    })

    this.$refs['sort-item'].addEventListener('touchend', () => {
      clearTimeout(timer)
      this.$refs['sort-item'].style.opacity = 'unset'
      this.$refs['sort-item'].style.position = 'unset'
      this.$refs['sort-item'].style.top = 'unset'
      this.$refs['sort-item'].style.width = 'unset'
    })
  }
}
</script>
