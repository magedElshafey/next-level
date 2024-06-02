import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";

const SocialMedia = ({ data }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <a href={data.facebook} target="_blank" rel="noreferrer">
        <FaFacebook size={20} />
      </a>
      <a href={data.instagram} target="_blank" rel="noreferrer">
        <FaInstagram size={20} />
      </a>
      <a href={data.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin size={20} />
      </a>
      <a href={data.snapchat} target="_blank" rel="noreferrer">
        <FaSnapchatGhost size={20} />
      </a>
      <a href={data.twitter} target="_blank" rel="noreferrer">
        <FaTwitter size={20} />
      </a>
    </div>
  );
};

export default SocialMedia;
