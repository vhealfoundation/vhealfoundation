import React from "react";

const StoryDetailCard = ({ coverImage, title, description, content }) => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Cover Section */}
      <div className="relative">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-[350px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
          <h1 className="text-4xl font-bold text-center">{title}</h1>
          <p className="mt-4 text-lg text-center px-4">{description}</p>
        </div>
      </div>

      {/* Story Content */}
      <div className="space-y-12">
        {content?.map((section, index) => (
          <div
            key={section._id}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg w-full h-[250px] object-cover"
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                {section.title}
              </h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryDetailCard;
