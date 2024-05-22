import { LS } from '../consts';

export const setStorage = (list) => {
  localStorage.setItem(LS, JSON.stringify(list));
};

export const getStorage = (item = LS) => {
  const list = localStorage.getItem(item);
  if (!list) return null;

  return JSON.parse(list);
};

export const removeStorage = (item = LS) => {
  localStorage.removeItem(item);
};
