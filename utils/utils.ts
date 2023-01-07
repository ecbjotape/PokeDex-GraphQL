export const formatKgToLbs = (weigth: number) => {
  if (weigth <= -0) return "0lbs / 0Kg";
  const weightFormated = weigth / 10;

  return `${(Number(weightFormated) / 0.453592).toFixed(
    1
  )}lbs. / ${weightFormated}kg`;
};
