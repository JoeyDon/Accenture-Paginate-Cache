/* Filter out the right amount of cards to display in component Cards.jsx

Parameter explanation:
items: the array holding all cached data.
currentPage: the current page index.
pageSize: How many card to display in a page (Load from PAGE_SIZE in ../settings/setting)

Algorithm:
1. Calculate the right *card* start index in the array.
e.g. if current page is 2, page size is 3 x 4 =12. The start index will be 13 and the first card is data[13].

2. Calculate the right *card* last index in the array.
e.g. if current page is 2, page size is 3 x 4 =12. The start index will be 24 and the first card is data[24].

3. Extract this part of array from the whole cached data array and return a new array
e.g [data[13],data[14],data[15],data[16], ...data[24]] for the page 2
*/
export const paginatify = (items, currentPage, pageSize) => {
  let startIndex = (currentPage - 1) * pageSize;
  let lastIndex = currentPage * pageSize;
  return items.slice(startIndex, lastIndex);
};
