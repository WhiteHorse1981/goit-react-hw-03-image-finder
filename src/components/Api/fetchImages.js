import axios from 'axios';

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '12264091-4cbd1db829d9f1cef61b91b7a',
  },
});

export const getImages = async (page, inputValue, amountItemPage) => {
  const { data } = await pixabayApi.get(
    `?q=${inputValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=${amountItemPage}`
  );
  return data;
};
