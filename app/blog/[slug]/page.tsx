import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
//   return { title: post.title };
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    description: post.description,
  };
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const Content = getMDXComponent(post.body.code);

  return (
    <div className="flex justify-center">
      <article className="mx-6 max-w-3xl py-8 pt-40">
        <div className="mb-8">
          <div className="mb-2">
            <time
              dateTime={post.publishAt}
              className="mb-1 text-base text-gray-600"
            >
              {format(parseISO(post.publishAt), "LLLL d, yyyy")}
            </time>
          </div>
          <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-2">
            <div>
              <img
                src="/photos/JohanGE_fotoCharlotteCarlbergBarg_8747.jpg"
                alt="Snehan"
                width={30}
                height={30}
                className="h-30 w-30 rounded-full"
              />
            </div>
            <div className="ml-2 text-xs">
              <h3>Johan Grundstörm Eriksson</h3>
            </div>
          </div>
        </div>
        <Content />
      </article>
    </div>
  );
};

export default PostLayout;
