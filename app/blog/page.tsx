import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { ChevronRight } from "lucide-react";
import LinkedInPost from "./LinkedInPost";

export const metadata = {
  title: "Blog",
  description: "All of my long-form thoughts collected in chronological order.",
};

function PostCard(post: Post) {
  return (
    <div className="flex w-full">
      <div className="hidden md:flex">
        <div className="flex w-32 items-start justify-end">
          <time dateTime={post.publishAt} className="text-sm text-neutral-600">
            {format(parseISO(post.publishAt), "LLLL d, yyyy")}
          </time>
        </div>
      </div>
      <div className="ml-8 hidden flex-col items-center sm:flex">
        <div className="absolute h-4 w-4 rounded-full border-2 border-neutral-800 bg-[#111010] "></div>
        <div className="h-full w-[1px] bg-neutral-800 "></div>
      </div>
      <Link href={post.url}>
        <div className="mb-3 -translate-y-2 rounded-md p-2 hover:border hover:border-neutral-800 hover:bg-neutral-900 sm:ml-6 md:-translate-y-3 md:p-4">
          <div className="mb-3 flex md:hidden">
            <time
              dateTime={post.publishAt}
              className="text-sm text-neutral-600"
            >
              {format(parseISO(post.publishAt), "LLLL d, yyyy")}
            </time>
          </div>
          <p className="text-md -mt-2">{post.title}</p>
          <p className="mt-2 text-neutral-400">{post.description}</p>
          <div className="mt-2 flex items-center">
            <p className="mr-2 text-neutral-700">Read more</p>
            <ChevronRight className="h-4 w-4 text-neutral-700" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishAt), new Date(b.publishAt)),
  );

  return (
    <div className="flex h-full w-full flex-col items-start">
      <h1 className="mb-8 mt-32 text-2xl font-medium tracking-tighter text-neutral-950">
        News and thoughts
      </h1>
      {/* <p className="prose text-neutral-700">
        All of my long-form thoughts on programming, leadership, product design,
        and more, collected in chronological order.
      </p> */}
      {/* 
      <div className="mx-6 flex flex-col">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div> */}
      <LinkedInPost />
    </div>
  );
}
