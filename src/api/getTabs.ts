const API_URL = 'https://andreas-just.github.io/react_tabs-with-router/src/api';

export const getData = async (url: string) => {
  const response = await fetch(url);

  // console.log(response);
  return response.json();
};

export const getTabs = async (): Promise<TabIF[]> => {
  const [tabs, posts] = await Promise.all([
    getData(`${API_URL}/tabs.json`),
    getData(`${API_URL}/posts.json`),
  ]);

  // console.log(tabs, posts);
  return tabs.map((tab: TabFromServer) => ({
    ...tab,
    post: posts.find((post: PostIF) => post.id === tab.content),
  }));
};
