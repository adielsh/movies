<template>
    <v-expansion-panel>
      <v-expansion-panel-header>
        {{genereData[0]}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
       <v-expansion-panels>
        <Year
          v-for="(y,index) in genereData[1].children"
          :key="index"
          :yearData="y"
          :genereName="genereData[0]"
        ></Year>
      </v-expansion-panels>
    </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
  import { mapGetters } from "vuex";
    import Year from './Year';

  export default {
    name: 'Genere',
    props:["genereData"],
    components:{Year},
    data: () => ({ }),
  }
</script>
