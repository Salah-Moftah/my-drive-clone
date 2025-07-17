export const formattedDate = (file, addYear) => {
  const createdAt = new Date(file.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: addYear ? "numeric" : undefined,
  });
  return formattedDate;
};

export default formattedDate;
