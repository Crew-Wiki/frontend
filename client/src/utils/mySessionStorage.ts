const SPLITTER = '/';

const mySessionStorage = {
  get(keys: string[]) {
    return window.sessionStorage.getItem(keys.join(SPLITTER));
  },
  set(keys: string[], item: string) {
    window.sessionStorage.setItem(keys.join(SPLITTER), item);
  },

  getJSON(keys: string[]) {
    return JSON.parse(this.get(keys) ?? '{}');
  },
  setJSON(keys: string[], item: Object) {
    this.set(keys, JSON.stringify(item));
  },

  has(keys: string[]) {
    return this.get(keys) !== null;
  },
};

export default mySessionStorage;
