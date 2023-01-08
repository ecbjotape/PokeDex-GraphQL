export const formatKgToLbs = (weigth: number) => {
  if (weigth <= -0) return "0lbs / 0Kg";
  const weightFormated = weigth / 10;

  return `${(Number(weightFormated) / 0.453592).toFixed(
    1
  )}lbs. / ${weightFormated}kg`;
};

export const formatMetersToFeet = (height: number) => {
  if (height <= 0) return `0'00" / 0 m`;
  const heightFormated = height / 10;
  const converted = (Number(heightFormated) * 3.216).toFixed(2).split(".");
  return `${converted[0]}'${converted[1]}" / ${heightFormated} m`;
};
