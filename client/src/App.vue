<template>
    <div id="app">
        <h1>font variable parameters interface</h1>
        <label>
            <input type="text" v-model="$store.state.textContent">
        </label>

        <cursor-ui v-for="(control, keyName) in $listOfControl" :control="control" :name="keyName"/>

        <variable-font-viewer/>
        <DataForm/>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CursorUi from "@/components/CursorUi.vue"
  import VariableFontViewer from "@/components/VariableFontViewer.vue"
  import DataForm from "@/components/DataForm.vue"

  @Component({
    components: {
      VariableFontViewer,
      CursorUi,
      DataForm,
    },
  })
  export default class App extends Vue {
    get $listOfControl() {
      return this.$store.state.listOfControl
    }
  }
</script>

<style lang="scss">
    #app {
        font-family: "Poppins Latin", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
