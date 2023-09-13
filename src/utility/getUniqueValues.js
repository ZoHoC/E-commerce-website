export const getUniqueValues = (data, type) => {
  const uniqueValues = [
    ...new Set(
      data.flatMap(item => (type === "colors" ? item[type] : [item[type]]))
    ),
  ];
  return ["all", ...uniqueValues];
};
