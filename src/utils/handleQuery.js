/**
 * Devuelve un string formateado  con el nombre de las columnas de la tabla
 * para la sentencia INSERT INTO
 * @param {rows} array
 * @returns string
 */
const colsCreate = (rows = []) => {
	return `${rows.join(', ')}`;
};

/**
 * Devuelve un string de: ? dependiendo del numero de columnas de la tabla
 * para el apartado de VALUES()
 * @param {rows} array
 * @returns string
 */
const colsValue = (rows = []) => {
	return rows.map(row => '?').join(', ');
};

/**
 * Devuelve un string formateado con el nombre de las columnas de la tabla
 * para la sentencia UPDATE
 * @param {rows} array
 * @returns string
 */
const colsUpdate = (rows = []) => {
	return `${rows.join(' = ?, ')} = ? `;
};

/**
 * Devuelve un array con los valores correspondientes a las
 * propiedades enumerables de un objeto.
 * @param {values} object
 * @returns array
 */
const getValues = values => {
	return Object.values(values);
};

/**
 * Devuelve un array con los valores correspondientes a las
 * propiedades enumerables de un objeto y le añade un ultimo valor
 * @param {values} object
 * @param {id} string
 * @returns array
 */
const getValuesAndId = (values, id) => {
	let array = Object.values(values);
	array.push(id);
	return array;
};

module.exports = {
	colsCreate,
	colsValue,
	colsUpdate,
	getValues,
	getValuesAndId,
};
