import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import Image from "next/image"



interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Image src="/StoneSwap.png" width="243px" height="63px" />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
