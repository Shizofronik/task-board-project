//Валидация "входа" уже зарегистрированного пользователя
function singInValidation(loginValue, passwordValue) {
    console.log('singInValidation', loginValue, passwordValue)
    return true
}

function singUpValidation(loginValue, passwordValue) {
    console.log('singUpValidation', loginValue, passwordValue)
    return true
}

export default singInValidation 
export {singUpValidation}