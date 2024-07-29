import React from "react";

interface IconProps {
  name: string;
  className?: string;
  fill?: string;
}
interface Icon {
  [key: string]: React.ReactElement;
}

const Icon: React.FC<IconProps> = ({ name, className, fill, ...props }) => {
  const icons: Icon = {};
  if (!icons[name]) return null;
  return React.cloneElement(icons[name], { className, ...props });
};
export default Icon;
