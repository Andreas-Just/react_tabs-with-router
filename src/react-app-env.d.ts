// eslint-disable-next-line
/// <reference types="react-scripts" />
interface TabApi{
  content: number;
  title: string;
}

interface TabIF extends TabApi{
  post?: PostIF;
}

interface PostIF {
  id: number;
  title: string;
  body: string;
}

type Match = {
  params: TParams;
  isExact: boolean;
  path: string;
  url: string;
};

type TParams = { id: string };
