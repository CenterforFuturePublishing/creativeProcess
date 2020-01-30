<template>
    <main id="app">
        <header>
            <h1>font variable parameters interface</h1>

            <label>
                <input type="text" v-model="$store.state.textContent">
            </label>
        </header>

        <section class="box-viewer">
            <variable-font-viewer/>
        </section>

        <section class="box-form">
            <DataForm/>
        </section>

        <section class="box-controls">
            <cursor-ui v-for="(control, keyName) in $listOfControl" :control="control" :name="keyName"/>
        </section>
    </main>
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
        display: grid;
        grid-template-rows: 25vh 45vh 5vh 25vh;
        margin: 0;
        box-sizing: border-box;
        height: 100vh;
        width: 100%;
        overflow: hidden;

        > * {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

    }

    .box-controls {
        display: grid;
        grid-template-columns: auto auto auto;
    }
</style>
