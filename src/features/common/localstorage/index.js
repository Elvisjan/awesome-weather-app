import {createDomain}  from "effector";

const root = createDomain("root");

root.onCreateStore(store => {
  const snapshot = localStorage.getItem(store.shortName);
  if (snapshot !== null) store.setState(JSON.parse(snapshot));

  let isFirstSkiped = false;
  store.watch(newState => {
    if (isFirstSkiped) {
      localStorage.setItem(store.shortName, JSON.stringify(newState));
    }
    isFirstSkiped = true;
  });
  return store;
});

export const createEvent = root.event;
export const createEffect = root.effect;
export const createStore = root.store;