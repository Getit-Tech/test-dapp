import React from "react";
import GamingBanner from "../gaming_banner.svg";
import DevBanner from "../dev_banner.svg";
import DefaultBanner from "../default_banner.svg";

function Ad(props) {
  const { address } = props;

  function getBanner(address) {
    if (address === "0xf8A68F3d2C3737c26D5B33B203BD8A7FA9866EDF") {
      return GamingBanner;
    } else if (address === "0x5480625Eabcf74Cc96a917D8Fb10b3565D59e2Ed") {
      return DevBanner;
    } else {
      return DefaultBanner;
    }
  }

  const banner = getBanner(address);

  return (
    <div className="adContainer">
      {banner && <img src={banner} alt="banner" className="banner" />}
    </div>
  );
}

export default Ad;
