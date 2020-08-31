// takes an array of items
// we pick an index between 0 - last index in that array
//then return item at that index
export const choice = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

//loop through all of the items
export const remove = (items, item) => {
  //below we check if its the item were looking for
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      // once we find it then we return a new array that takes
      // two slices of the first array from the beggining (0, i)
      // up until the item we're removing
      // and then from one after the item we're removing (i + 1)
      // to the end of the array
      // and we combine them into one array
      // so we slice it up and then we return it
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};
