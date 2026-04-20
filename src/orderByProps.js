export const orderByProps = (obj, sort) => {
    const sortInArr = sort.map(key => ({key: key, value: obj[key]}))

    const sortObj = Object.keys(obj)
        .filter(item => !sort.includes(item))
        .sort((a, b) => a.localeCompare(b))
        .map(key => ({key: key, value: obj[key]}));

    return [...sortInArr, ...sortObj] ;
};
