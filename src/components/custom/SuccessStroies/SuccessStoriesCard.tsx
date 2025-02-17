interface SuccessStoriesCardProps {
  name: string;
  image?: string;
  profilePic: string;
  text: string;
}

export default function SuccessStoriesCard({
  name,
  image,
  profilePic,
  text,
}: SuccessStoriesCardProps) {
  return (
    <div className="bg-[#222629] rounded-xl md:rounded-3xl p-3 md:p-4 text-white md:shadow-lg">
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <img
          alt={name}
          className="w-8 md:w-12 h-8 md:h-12 rounded-full object-cover"
          src={profilePic}
        />
        <h3 className="text-sm md:text-lg font-semibold text-cyan-400">
          {name}
        </h3>
      </div>

      {/* Conditional Rendering for Image */}
      {image && (
        <div className="mt-3">
          <img
            alt="testimonial"
            className="w-full h-20 md:h-40 object-cover rounded-xl"
            src={image}
          />
        </div>
      )}

      {/* Text Section */}
      <p className="mt-2 md:mt-3 text-xs md:text-sm text-gray-300">{text}</p>
    </div>
  );
}
