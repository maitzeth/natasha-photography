const useGetModelName = (pathName) => {
  const { length, [length - 1]: modelName } = pathName.split("/");

  return modelName;
};

export default useGetModelName;
