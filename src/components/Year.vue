<template>
        <v-expansion-panel>
          <v-expansion-panel-header>
            {{yearData[0]}}
          </v-expansion-panel-header>
          <v-expansion-panel-content>            
            <MoviesList :moviesListData="yearData[1]" :genereName="genereName" :yearData="yearData[0]"></MoviesList>
        </v-expansion-panel-content>
        </v-expansion-panel>
</template>

<script>
  import { mapGetters } from "vuex";
    import MoviesList from './MoviesList';

  export default {
    name: 'YEAR',
    components:{MoviesList},
    props:["yearData","genereName"],
    data: () => ({ }),
   
  }
</script>
