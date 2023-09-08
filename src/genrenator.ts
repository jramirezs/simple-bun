/**
 * Gets random music genre from binaryjazz API
 */
export const getRandomGenre = async (): Promise<string> => {
  const response = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/');

  return response.text();
};
