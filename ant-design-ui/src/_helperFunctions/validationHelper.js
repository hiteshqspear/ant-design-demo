export const isObject = (array, searchParameter) => {
    if (typeof array === 'object') {
        if (array && searchParameter) {
            let result = array?.find((obj) => obj[`${searchParameter}`]);
            return result ? true : false;
        } else {
            console('please pass array & searchParameter');
            return false;
        }
    }

    return false;
}