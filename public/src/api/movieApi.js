import axiosClient from "./axiosClient";



const movieApi = {
    getListGenre(param){
        const url = "/genre/movie/list";
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getPopular(param){
        const url = "/movie/popular";
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getList(genreId , param){
        const url = `list/${genreId}`;
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getDetailMovie(movieId, param){
        const url = `/movie/${movieId}`;
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getCredits(movieId , param){
        const url = `/movie/${movieId}/credits`;
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getVideos(movieId , param){
        const url = `/movie/${movieId}/videos`;
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getSilmilar(movieId , param){
        const url = `/movie/${movieId}/similar`;
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
    getReviews(movieId , param){
        const url = `/movie/${movieId}/reviews`;
        return axiosClient.get(url,{params : {...param,api_key: 'caf7bbc7bc137836c4e61986eee99941'}})
    },
}


export default movieApi;