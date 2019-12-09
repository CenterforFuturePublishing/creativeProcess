<template>
    <section class="v-variable-font-viewer">
        {{$test}}
    </section>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";

  @Component
  export default class VariableFontViewer extends Vue {
    get $test() {
        return this.$store.state.textContent
    }
  }
</script>

<style lang="scss" scoped>
    .v-variable-font-viewer {

    }
</style>
