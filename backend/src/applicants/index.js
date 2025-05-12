const express = require('express');
const router = express.Router();
const fetchDataAndFilterSvc = require('./fetchDataAndFilterSvc');
const { validationsDe, FormMappers } = require('./constants');

/* 
    route 'applicants/' : get all applicants with filters
    filters available: 
        dl: drivers license  'Führerschein' 
        deu: knowledge fo german  : Deutsch
        eng: knowledge fo english : Englisch
        exp: experienc in years : Erfahrung
*/
router.get('/', (req, res) => {
    let filters = {}
    let filterErrors = [];
    for (let field in validationsDe) {
        let validation = validateAndGet(req.query, field, validationsDe[field])
        if (!validation.isPresent) {
            continue;
        }
        if (!validation.isValid) {
            filterErrors.push(validation)
        } else {
            filters[field] = validation.value;
        }
    }
    if (filterErrors.length) {
        return res.status(400).json({
            ok: false,
            message: 'invalid values in the filters',
            errors: filterErrors
        })
    }
    const offset = parseInt(req.query.offset, 10) || 0;
    const limit = parseInt(req.query.limit, 10) || 10;
    const pagination = { offset, limit };
    let data = fetchDataAndFilterSvc(filters, pagination);
    // res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data)
});

/* 
    route: applicants/:id/contact
    expects applicant ID in the route param and invokes contact with the applicant
    // partially implimented, actual contact logic is yet to be implemented
*/
router.post('/:id/contact', (req, res) => {
    const applicantId = req.params.id;
    // logic to find applicant by ID. If not found, return 404.
    // logic to process the contact
    // Assuming contact action is successful for now:
    console.log(`Contact initiated for applicant ${applicantId}`)
    res.status(200).json({
        ok: true,
        applicantId,
        message: `Contact initiated for applicant ${applicantId}`,
        timestamp: new Date()
    });
});

module.exports = router;

function validateAndGet(query, field, validOptions) {
    if (!query[field]) {
        return { isPresent: false, isValid: false };
    }
    const rawValue = query[field];
    const value = typeof rawValue === 'string' ? rawValue.trim() : '';
    let isValid = false;
    if (validOptions && validOptions.includes(value)) {
        isValid = true;
    }
    // todo: handle case where valid options arent defined
    return { value, isPresent: true, isValid, validOptions };
}

