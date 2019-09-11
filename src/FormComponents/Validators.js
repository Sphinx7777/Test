
export const required = value => (value ? undefined : 'Обязательное поле');


export const maxLength = max => value =>
	value && value.length > max ? `Максимум ${max} символов` : undefined;

//const maxLength15 = maxLength(15);


export const minLength = min => value =>
	value && value.length < min ? `Минимум ${min} символ` : undefined;

//export const minLength2 = minLength(2);



export const minValue = min => value =>
	value && value < min ? `Must be at least ${min}` : undefined;

//const minValue13 = minValue(13);