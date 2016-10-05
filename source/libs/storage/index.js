import forage from 'localforage/dist/localforage';

const store = forage.createInstance({
  name: 'co.seamless.dashboard',
});

export function set(key, value) {
  return store.setItem(key, value);
}

export function get(key, value) {
  return store.getItem(key, value);
}

export function remove(key, value) {
  return store.removeItem(key, value);
}
