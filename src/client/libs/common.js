export function truncateText(text,length) {
    if (text.length <= length??100) {
        return text;
    }
    return text.slice(0, length??100) + '...';
}

export const serializeFilter = (filter) => {
    const params = new URLSearchParams();

    // Loop through filter object and append each property to params
    Object.entries(filter).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            params.append(key, value);
        }
    });

    return params.toString(); // Return the query string
};




/**
 * Formats a JavaScript Date object into a string of the format YYYY-MM-DD.
 * 
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string in YYYY-MM-DD format.
 * @throws {TypeError} Throws an error if the provided argument is not a Date object.
 */
export function formatDateShort(date) {
    if (!(date instanceof Date)) {
        throw new TypeError('Expected a Date object');
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}