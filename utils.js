export const resizeFox = (size) => {
  if (size < 900) {
    return size * 0.004;
  } else {
    return size * 0.002;
  }
};
