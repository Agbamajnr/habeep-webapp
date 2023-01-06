export function validator(password, confirmPassword) {
    if (password === confirmPassword) {
        return true
    } else {
        return false
    }
}

const validateEmail = (userEmail) => {
    return userEmail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



export function loginValidate(email, password) {
    let verif = validateEmail(email);
    if (!verif) {
        return {
            success: false,
            message: 'Please enter a valid email address',
        }
    } else {
        const noWhitespace = password.toString().replace(/\s/g, '');
        if (noWhitespace.length < 6) {
            return {
                success: false,
                message: 'Password length must be at least 6 characters',
            }
        } else {
            return {
                success: true,
                message: 'Login validated',
            }
        }
    }
}

export function formValidator(field, data) {
    if (field === 'email') {
        if (data.length > 0) {
            let verif = validateEmail(data);
            return {
                success: verif,
                message: 'Please enter a valid email address',
                field: 'email',
            }
        } else return {
            success: true
        }
    }

    if(field === 'phone') {
        if(data.length >= 10) {
            return {
                success: true,
                message: 'Please enter a valid phone number',
                field: null,
            }
        } else {
            return {
                success: false,
                message: 'Please enter a valid phone number',
                field: 'phone',
            }

        }
    }

    if(field === 'pin') {
        if(data.length === 4) {
            return {
                success: true,
                message: 'Please enter a valid pin',
                field: null,
            }
        } else {
            return {
                success: false,
                message: 'Please enter a valid pin',
                field: 'pin',
            }

        }
    }
}

export function registerValidate(data) {
    let verif = validateEmail(data.email);
    if (!verif) {
        return {
            success: false,
            message: 'Please enter a valid email address',
            field: 'email',
        }
    } else if (data.phoneNumber.length < 10) {
        return {
            success: false,
            message: 'Invalid phone number',
            field: 'phone',
        }
    } else {
        const noWhitespace = data.pin.toString().replace(/\s/g, '');
        if (noWhitespace.length < 4) {
            return {
                success: false,
                message: 'Pin length must be 4 characters',
                field: 'pin',
            }
        } else {
            return {
                success: true,
                message: 'Registration data validated',
            }
        }
    }
}