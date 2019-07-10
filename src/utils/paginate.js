/* Filter out the right amount of cards to display in component Cards.jsx

Parameter explanation:
items: the array holding all cached data.
currentPage: the current page index.
pageSize: How many card to display in a page (Load from PAGE_SIZE in ../settings/setting)

Algorithm:
Extract
*/
export const paginatify = (items, currentPage, pageSize) => {
  let startIndex = (currentPage - 1) * pageSize;
  let lastIndex = currentPage * pageSize;
  return items.slice(startIndex, lastIndex);
};
