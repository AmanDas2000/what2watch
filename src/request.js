const API_KEY = "d4189401315ecb8346169aaef9f8398e";

const requests = {
    normal: `movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&vote_average.gte=7.5&include_adult=false&include_video=false`,
    
}

export default requests;