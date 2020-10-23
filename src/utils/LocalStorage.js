class LocalStorage {

  getItem(key) {
    try {
      return this.getLocalStorage().getItem(key);
    } catch (e) {
      console.error(`Error while getting local storage item: ${key}`);
      return null;
    }
  }

  setItem(key, value) {
    try {
      this.getLocalStorage().setItem(key, value);
    } catch (e) {
      console.error(`Error while setting local storage item: ${key}`);
    }
  }

  removeItem(key) {
    try {
      this.getLocalStorage().removeItem(key);
    } catch (e) {
      console.error(`Error while removing local storage item: ${key}`);
    }
  }

  getLocalStorage() {
    return window.localStorage;
  }
}

export const localStorage = new LocalStorage();