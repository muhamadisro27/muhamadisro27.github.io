const useImage = (image: string) => {
  return process.env.NEXT_PUBLIC_PUBLIC_URL + image;
};

export default useImage;
