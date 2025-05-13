const { FormMappers } = require('./constants')

const formatApplicantProfile = (rawProfile) => {
    let profile = {
        id: rawProfile.ID,
        name: rawProfile.Name,
        email: rawProfile.Email,
        phone: rawProfile.Phone,
        isTalent: rawProfile.IsTalent,
        isHired: rawProfile.IsHired,
        attributes: {}
    }

    for (let key in FormMappers) {
        let formKey = FormMappers[key];
        // console.log('extracting values', key, formKey, rawProfile.FormInfo)
        let value = extractField(rawProfile.FormInfo, formKey);
        if (!!value) {
            profile.attributes[key] = value;
        }
        // if (value != null) in case we wish to accept non null but empty values as valid in this CA response
    }

    return profile;
}

function extractField(array, field) {
    for (let item of array) {
        if (item.question === field)
            return item.answers;
    }
    return null
}

module.exports = { formatApplicantProfile };