import tabs from './tabs';

const BASE_URL = 'https://andreas-just.github.io/library-json';
const API_URL = '/posts/posts.json';

export const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};

export const getTabs = async () => {
  const posts = await getData(`${BASE_URL}${API_URL}`);

  return tabs.map((tab: TabApi) => ({
    ...tab,
    post: posts.find((post: PostIF) => +post.id === tab.content),
  }));
};
