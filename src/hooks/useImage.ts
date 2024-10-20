const useImage = (image: string) => {
  return image ? process.env.NEXT_PUBLIC_PUBLIC_URL + image : "#";
};

export default useImage;
