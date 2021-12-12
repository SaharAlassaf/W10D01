import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((item) => (
        <Link href={`/posts/${item.id}`} key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;
