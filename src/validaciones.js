const REGEX_TELEFONO = /^([0-9])?[0-9]{8,}$/;

export const tel = (value) => {
    return REGEX_TELEFONO.test(value) || `El número telefonico ingresado debe poseer almenos 8 digitos`;
};


