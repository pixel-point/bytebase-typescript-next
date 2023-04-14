import { PostGrid, Tabs } from './components';

const Posts = () => {
  return (
    <section className="container mt-20">
      <h2 className="font-title text-72 leading-none">Bytebase blog</h2>
      <Tabs className="mt-10" />
      <PostGrid />
    </section>
  );
};

export default Posts;
