import Lottie from "react-lottie";
import pikachu from "./pikachu-loading.json";
import dugtrio from "./dugtrio.json";
import pokeball from "./pokeball-loading.json";

const animation: any = {
  pikachu,
  dugtrio,
  pokeball,
};

interface LoadingProps {
  option: string;
  height?: number | string;
  width?: number | string;
}

const Loading = ({ option, height, width }: LoadingProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation[option],
    rendererSettings: {
      preserveAspectRatio: "xMidYMin meet",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height || 250}
      width={width || 400}
    />
  );
};

export default Loading;
