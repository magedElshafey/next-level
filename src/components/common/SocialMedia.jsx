import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { useGlobalContext } from "../../global/GlobalContext";
const SocialMedia = () => {
  const { data } = useGlobalContext();

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {data?.social?.facebook ? (
        <a href={data?.social?.facebook} target="_blank" rel="noreferrer">
          <FaFacebook size={20} />
        </a>
      ) : null}
      {data?.social?.instagram ? (
        <a href={data?.social?.instagram} target="_blank" rel="noreferrer">
          <FaInstagram size={20} />
        </a>
      ) : null}
      {data?.social?.twitter ? (
        <a href={data?.social?.twitter} target="_blank" rel="noreferrer">
          <FaTwitter size={20} />
        </a>
      ) : null}
      {data?.social?.tiktok ? (
        <a href={data?.social?.tiktok} target="_blank" rel="noreferrer">
          <FaTiktok size={20} />
        </a>
      ) : null}
      {data?.social?.youtube ? (
        <a href={data?.social?.youtube} target="_blank" rel="noreferrer">
          <FaLinkedin size={20} />
        </a>
      ) : null}
    </div>
  );
};

export default SocialMedia;
/**
 * linkedin => youtube
 *
 */
