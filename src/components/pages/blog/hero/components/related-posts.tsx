import Author from '@/components/shared/author';

interface RelatedPostsProps {
  className?: string;
  title: string;
  postClass: string;
  authorImage?: string;
}

const author = {
  image: '/images/author-blog.png',
};

const RelatedPosts = ({ className, title, postClass }: RelatedPostsProps) => {
  return (
    <div className={className}>
      <p>{postClass}</p>
      <div>
        <h2 className="text-18 leading-normal sm:leading-tight mt-3">{title}</h2>
        <Author image={author.image} className="mt-3 hidden md:flex" />
        <Author className="mt-3 md:hidden" />
      </div>
    </div>
  );
};

export default RelatedPosts;
