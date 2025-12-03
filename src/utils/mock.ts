const DEFAULT_DELAY_MS = 1000;

export const generateMockAsyncRequest = async <T>(
  payload: T,
  delayInMilliseconds = DEFAULT_DELAY_MS,
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, delayInMilliseconds);
  });
};
