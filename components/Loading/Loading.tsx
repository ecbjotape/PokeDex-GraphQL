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
}

const Loading = ({ option }: LoadingProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation[option],
    rendererSettings: {
      preserveAspectRatio: "xMidYMin meet",
    },
  };

  return <Lottie options={defaultOptions} height={250} width={400} />;
};

export default Loading;
