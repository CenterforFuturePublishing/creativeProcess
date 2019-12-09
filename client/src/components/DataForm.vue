<template>
    <section class="v-data-form">
        <button @click="sendData()">send data</button>
    </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class DataForm extends Vue {
      sendData() {
        console.log(`${this.$store.state.variableStringValue} is sending to socket`)
        this.$store.commit("sendDataToSocket")
      }
    }
</script>

<style lang="scss" scoped>
    .v-data-form {

    }
</style>
