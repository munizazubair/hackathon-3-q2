"use client"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton , InstapaperShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon , InstapaperIcon } from "react-share";

const SocialShare = () => {
  const shareUrl = "http://localhost:3000";
  const title = "Check out this amazing website!";

  return (
    <div className="flex gap-2">
      
      {/* Facebook Button */}
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon className="lg:size-8 xl:size-11" size={24} round />
      </FacebookShareButton>

      {/* Twitter Button */}
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon className="lg:size-8 xl:size-11" size={24} round />
      </TwitterShareButton>

      {/* WhatsApp Button */}
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon className="lg:size-8 xl:size-11" size={24} round />
      </WhatsappShareButton>

    </div>
  );
};

export default SocialShare;
