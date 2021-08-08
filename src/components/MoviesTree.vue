<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >

    

  <v-expansion-panels>
    <Genere
      v-for="(g,index) in groupedMoviesArr"
      :key="index"
      :genereData="g"
    ></Genere>

  </v-expansion-panels>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from "vuex";
  import Genere from './Genere';
  export default {
    name: 'MoviesTree',
    created(){
      this.$store.dispatch("getMovies").then(()=>{
          this.buildGeners();
      })
    },
     computed:{
      ...mapGetters(["movies","groupedMoviesArr"]),
      
  
    },
    components: {Genere},
    data: () => ({


    }),
    methods:{

      // removeMovie(gener,year,id){
      //   console.log(gener,year,id);
      //   let found  = this.groupedMoviesArr.find(it=>it[0] == gener)
      //   console.log(found)
      // },



    }
  }
</script>
