// import { stat } from 'fs-extra'
import Vue from 'vue'
import Vuex from 'vuex'
import MoviesService from '../services/MoviesService'
Vue.use(Vuex)
let moviesService = new MoviesService()
export default new Vuex.Store({
  state: {
    moviesData:null,
    groupedMovies: null,
    groupedMoviesArr: null
  },
  mutations: {
    setMoviesData(state,movies){
      state.moviesData = movies;
    }, 
    removeMovie(state,data){

     let idx =  state.moviesData.findIndex(it=>it.id == data.movieId)
     console.log(idx)
     state.moviesData.splice(idx, 1);
     console.log( state.moviesData," state.moviesData")
     this.commit("buildGeners")

      // let found  = state.groupedMoviesArr.filter(it=>it[0] == data.genereName)[0][1]["children"]
      // let foundIndex = found.findIndex(it=>it[0] == data.yearData)
      // console.log(found)
      // console.log(foundIndex);
      // found.splice(foundIndex, 1);
    },
    buildGeners(state){
      state.groupedMovies = null;
      state.groupedMovies  = moviesService.groupBy( state.moviesData , movie => movie.genre);
      state.groupedMovies.forEach(it=>{
        it["children"] = Array.from( moviesService.groupByOnlyId(it , movie => movie.year))
      })
      state.groupedMoviesArr =   Array.from(state.groupedMovies);
      console.log(state.groupedMoviesArr,"%%%%%%%%%%%%%%%%%%%%%%%")
    }
  },
  actions: {
    async getMovies(context){
      let movies =  await moviesService.getMovies();
      context.commit("setMoviesData",movies)
      context.commit("buildGeners")
    }
  },
  getters:{
    movies : (state)=>state.moviesData,
    groupedMoviesArr : (state)=>state.groupedMoviesArr
  },
  modules: {
  }
})












