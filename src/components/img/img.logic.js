// @flow

export function loadImage(src: string): Promise<Image> {
  const img = new Image();

  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
