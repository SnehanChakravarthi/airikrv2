// components/LinkedInPost.tsx
const LinkedInPost = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl pb-[56.25%]">
      {/* Aspect ratio container */}
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:6816023833431076864"
        height="867"
        width="504"
        frameBorder="0"
        allowFullScreen
        title="Embedded post"
      ></iframe>
    </div>
  );
};

export default LinkedInPost;
