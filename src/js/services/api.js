import axios from 'axios';

const API_KEY = '84bfc56af25e689bdf95e218c09c46c3';
const ia = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

async function getMovies() {
  try {
    const response = await ia.get(`/trending/movie/week?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieDetails(movieId) {
  try {
    const response = await ia.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getRelatedVideos(movieId) {
  try {
    const response = await ia.get(
      `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const API = { getMovies, getMovieDetails, getRelatedVideos };

export default API;
