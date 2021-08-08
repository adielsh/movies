<template>
          
              <v-card
              v-if="moviesListData && moviesListData.length > 0"
                  class="mx-auto"
                  max-width="300"
                  tile
                >
                  <v-list dense>
                    <v-subheader>Movies</v-subheader>
                    <v-list-item-group
                      color="primary"
                    >
                      <v-list-item
                      v-for="(spescificMovieId,index) in moviesListData"
                        :key="index"
                      >
                        <v-list-item-icon>
                          <v-icon @click="removeMovie(spescificMovieId)">X</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="getMovieDetails(spescificMovieId)"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: 'MoviesList',
    props:["moviesListData","genereName","yearData"],
    data: () => ({

    }),
    methods:{
      getMovieDetails(id){
        console.log(id, this.$store.getters.movies.filter(it=>it.id == id))
        return this.$store.getters.movies.filter(it=>it.id == id)[0].title
      },

      removeMovie(movieId){
          console.log(movieId,this.genereName,this.yearData)
          this.$store.commit("removeMovie",{movieId,genereName: this.genereName,yearData: this.yearData})
      }
    },

   
  }
</script>
