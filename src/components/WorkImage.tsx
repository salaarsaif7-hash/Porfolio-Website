import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);

  const handleMouseEnter = () => {
    if (video) setIsVideo(true);
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img src={image} alt={alt || "Work Image"} />

        {video && isVideo && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="work-video"
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;