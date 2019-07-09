export function paginatify(items, currentPage, pageSize){
    let startIndex = (currentPage - 1) * pageSize
    let lastIndex = currentPage * pageSize -1
    return items.slice(startIndex, lastIndex)
}