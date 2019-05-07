export const setToLocalStore = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const getFromLocalStore = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

export const popFromLocalStore = (key) => {
  localStorage.removeItem(key);
}
