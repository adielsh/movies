export default class MoviesService{

    async getMovies() {
        try {
            const response = await fetch('MOCK_DATA.json');
            const movies = await response.json();
            return movies;
        } catch (e) {
            console.log(e)
            throw e;
        }
      }


      groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
      }   
      
      groupByOnlyId(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item.id]);
            } else {
                collection.push(item.id);
            }
        });
        return map;
      }
}