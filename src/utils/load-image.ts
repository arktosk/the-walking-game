export const loadImage = (sourceUrl: string): Promise<HTMLImageElement> =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.addEventListener("load", () => {
      resolve(image);
    });
    image.addEventListener("error", (event: ErrorEvent) => {
      reject(event.error);
    });

    image.src = sourceUrl;
  });
