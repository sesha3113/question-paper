export const setSession = (key: string, value: any) => {
  key && value && sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSession = (key: string) => {
  let result = sessionStorage.getItem(key);
  return result ? JSON.parse(result) : result;
};
