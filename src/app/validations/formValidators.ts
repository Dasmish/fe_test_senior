import { FormControl } from '@angular/forms'

export function ageValidate (ageValue: FormControl) {
    const ageRegEx = /^1[0-9]{2}\d$/
    return ageValue.value >= 18 ? null : {
        ageValidate: {
            valid: false
        }
    }
}
export function nameValidation (nameValue: FormControl) {
    const nameRegEx = /[a-zA-Z]{2,}/;
    return nameRegEx.test(nameValue.value) ? null : {
        nameValidation: {
            valid: false
        }
    }
}