import Button from '../ThemeButton';

function FeaturedPostCard({
  image,
  title,
  excerpt,
  author,
  date,
  onReadMore,
  postUrl
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl max-w-md mx-auto">
      {/* Post Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 line-clamp-2">{title}</h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

        {/* Author and CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {author?.avatar && (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-9 h-9 rounded-full border border-gray-200"
              />
            )}
            <div>
              <div className="text-sm font-semibold">{author?.name}</div>
              <div className="text-xs text-gray-400">{date}</div>
            </div>
          </div>
          <Button text="Read More" to={postUrl} onClick={onReadMore} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPostCard;
