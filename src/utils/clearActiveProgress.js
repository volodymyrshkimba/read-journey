export const clearActiveProgress = (arr) => {
  return arr.filter((item) => item.status !== "active");
};
