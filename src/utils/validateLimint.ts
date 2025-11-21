const MAX_LIMIT = 100;

const validateLimint = (limit: number, maxLimit = MAX_LIMIT) => {
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error('The "limit" parameter must be a positive integer.');
  }
  if (limit > maxLimit) {
    throw new Error(`The "limit" parameter must not exceed ${maxLimit}.`);
  }
  return true;
};

export { validateLimint };
