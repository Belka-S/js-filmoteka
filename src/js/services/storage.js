export function addMovieToLocalStorage(keyLibriary, movieId) {
  try {
    const storageData = [];
    const isLocalStorageData = localStorage.getItem(keyLibriary);

    isLocalStorageData && storageData.push(...JSON.parse(isLocalStorageData));
    if (!storageData.includes(movieId)) {
      storageData.push(movieId);
      localStorage.setItem(keyLibriary, JSON.stringify(storageData));
    }
  } catch (error) {
    console.log(error);
  }
}

export function removeMovieFromLocalStorage(keyLibriary, movieId) {
  try {
    const storageData = JSON.parse(localStorage.getItem(keyLibriary));

    const index = storageData.indexOf(movieId);
    storageData.splice(index, 1);
    localStorage.setItem(keyLibriary, JSON.stringify(storageData));
  } catch (error) {
    console.log(error);
  }
}
