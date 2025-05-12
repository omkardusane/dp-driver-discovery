/**
 * Validates if a field is present in the query object and if its value is among the valid options.
 * @param {object} query - The query object (e.g., req.query).
 * @param {string} field - The name of the field to validate.
 * @param {string[]} [validOptions] - An array of valid string options for the field.
 * @returns {{value: string|undefined, isPresent: boolean, isValid: boolean, field: string}} Validation result.
 */
function validateAndGet(query, field, validOptions) {
    if (!Object.prototype.hasOwnProperty.call(query, field)) {
        return { value: undefined, isPresent: false, isValid: false, field };
    }
    const rawValue = query[field];
    const value = String(rawValue).trim();
    let isValid = false;
    if (Array.isArray(validOptions) && validOptions.includes(value)) {
        isValid = true;
    }
    return { value, isPresent: true, isValid, field };
}

module.exports = { validateAndGet };