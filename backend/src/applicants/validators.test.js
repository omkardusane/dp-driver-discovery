const { validateAndGet } = require('./validators');

describe('validateAndGet', () => {
    const fieldName = 'testField';
    const validOptions = ['option1', 'option2', 'option3'];

    test('should return not present if field is missing in query', () => {
        const query = {};
        const result = validateAndGet(query, fieldName, validOptions);
        expect(result).toEqual({
            value: undefined,
            isPresent: false,
            isValid: false,
            field: fieldName,
        });
    });

    test('should return present and valid if field value is in validOptions', () => {
        const query = { [fieldName]: 'option1' };
        const result = validateAndGet(query, fieldName, validOptions);
        expect(result).toEqual({
            value: 'option1',
            isPresent: true,
            isValid: true,
            field: fieldName,
        });
    });

    test('should return present but invalid if field value is not in validOptions', () => {
        const query = { [fieldName]: 'invalidOption' };
        const result = validateAndGet(query, fieldName, validOptions);
        expect(result).toEqual({
            value: 'invalidOption',
            isPresent: true,
            isValid: false,
            field: fieldName,
        });
    });

    test('should return present but invalid if validOptions is undefined or empty', () => {
        const query = { [fieldName]: 'option1' };
        let result = validateAndGet(query, fieldName, undefined);
        expect(result).toEqual({ value: 'option1', isPresent: true, isValid: false, field: fieldName });

        result = validateAndGet(query, fieldName, []);
        expect(result).toEqual({ value: 'option1', isPresent: true, isValid: false, field: fieldName });
    });

    test('should accept non-string query values', () => {
        const query = { [fieldName]: 123 }; // Number instead of string
        const numericValidOptions = ['123', '456'];
        const result = validateAndGet(query, fieldName, numericValidOptions);
        expect(result.isValid).toBe(true);
    });

    test('should trim whitespace and return valid if trimmed value is in validOptions', () => {
        const query = { [fieldName]: '  option2  ' };
        const result = validateAndGet(query, fieldName, validOptions);
        expect(result.value).toEqual('option2');
        expect(result.isValid).toBe(true);
    });

});