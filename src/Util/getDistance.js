function getDistance(lat1, lon1, lat2, lon2) {
  let p = 0.017453292519943295;
  let a =
    0.5 -
    Math.cos((lat2 - lat1) * p) / 2 +
    (Math.cos(lat1 * p) *
      Math.cos(lat2 * p) *
      (1 - Math.cos((lon2 - lon1) * p))) /
      2;

  return (12742 * Math.asin(Math.sqrt(a))) / 1.609;
}

export default getDistance;
