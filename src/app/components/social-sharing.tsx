"use client"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton , InstapaperShareButton , } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon , InstapaperIcon } from "react-share";

const SocialShare = () => {
  const shareUrl = "http://localhost:3000";
  const title = "Check out this amazing website!";

  return (
    <div className="flex gap-4">
      {/* Facebook Button */}
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      {/* Twitter Button */}
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      {/* WhatsApp Button */}
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      {/* Instagram Button */}
      <InstapaperShareButton url={shareUrl} title={title}>
        <InstapaperIcon size={40} round />
      </InstapaperShareButton>
    </div>
  );
};

export default SocialShare;
