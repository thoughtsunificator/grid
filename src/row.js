/**
 * @global
 */
class Row {

	constructor(x) {
		this._x = x
		this._cells = {}
	}

	/**
	 * @readonly
	 * @type {type}
	 */
	get x() {
		return this._x
	}

	/**
	 * @readonly
	 * @type {object}
	 */
	get cells() {
		return this._cells
	}

}

export default Row
