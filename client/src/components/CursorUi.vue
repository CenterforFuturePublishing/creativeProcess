<template>
    <div class="v-cursor-ui">
        <h4>{{name}}</h4>
        <p>{{$value}}</p>
        <input type="range" v-model="$value" :min="$min" :max="$max">
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class CursorUi extends Vue {
    @Prop({required: true, type: String}) name!: string
    @Prop({required: true, type: Object}) control!: IControl

    get $value() {
      return this.control.value
    }
    set $value(value)   {
      this.control.value = value
    }

    get $min() { return this.control.min}

    get $max() { return this.control.max}

    // valueToInt(value: any): number {
    //   const valueToInt = parseInt(value)
    //
    //   return isNaN(valueToInt) ? 0 : valueToInt
    // }
  }
</script>

<style scoped lang="scss">
</style>
