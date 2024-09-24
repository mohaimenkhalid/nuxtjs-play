import {helpers, minLength, required, numeric, email} from "@vuelidate/validators";
import { useVuelidate } from '@vuelidate/core'


const authValidator = (loginForm: any) => {
    const rules = {
        email: {
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("Email must be valid address", email),
        },
        password: {
            required: helpers.withMessage("Password is required", required),
        }
    }
    const v$ = useVuelidate(rules, loginForm)
    return {v$}
}

export default authValidator;



