export const getAppSettings = (): Promise<{
  language: string;
  theme: string;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: 'Dark',
        language: 'en',
      });
    });
  });
};
