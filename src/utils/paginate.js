/* 
Algorithm:
1. Calculate the right *card* start index in the array.
e.g. if current page is 2, page size is 3 x 4 =12. The start index will be 13 and the first card is data[13].

2. Calculate the right *card* last index in the array.
e.g. if current page is 2, page size is 3 x 4 =12. The start index will be 24 and the first card is data[24].

3. Extract this part of array from the whole cached data array and return a new array
e.g [data[13],data[14],data[15],data[16], ...data[24]] for the page 2
*/

/**
 * @function paginatify
 * @param {array} items - Array of whole cached cards.
 * @param {int} currentPage - Current page index.
 * @param {int} pageSize - How many cards to display *A CONST FROM SETTINGS*
 * @returns {array} - New partial array to display.
 */

export const paginatify = (items, currentPage, pageSize) => {
  let startIndex = (currentPage - 1) * pageSize;
  let lastIndex = currentPage * pageSize;
  return items.slice(startIndex, lastIndex);
};
