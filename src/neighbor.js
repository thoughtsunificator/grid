/**
 * @global
 */
class Neighbor {

	/**
	 * @readonly
	 * @type {String}
	 */
	static AXE_VERTICAL = "AXE_VERTICAL"
	/**
	 * @readonly
	 * @type {String}
	 */
	static AXE_HORIZONTAL = "AXE_HORIZONTAL"

	/**
	 * @readonly
	 * @type {String}
	 */
	static AXE_DIAGONAL_LEFT = "AXE_DIAGONAL_LEFT"

	/**
	 * @readonly
	 * @type {String}
	 */
	static AXE_DIAGONAL_RIGHT = "AXE_DIAGONAL_RIGHT"

	/**
	 * @readonly
	 * @type {String}
	 */
	static DIRECTION_FORWARD = "DIRECTION_FORWARD"

		/**
	 * @readonly
	 * @type {String}
	 */
	static DIRECTION_BACKWARD = "DIRECTION_BACKWARD"


	/**
	 * @param {Cell} cell
	 * @param {string} axe
	 * @param {string} direction
	 */
	constructor(cell, axe, direction) {
		this._cell = cell
		this._axe = axe
		this._direction = direction
	}

	/**
	 * @readonly
	 * @type {Cell}
	 */
	get cell() {
		return this._cell
	}

	/**
	 * @readonly
	 * @type {string}
	 */
	get axe() {
		return this._axe
	}

	/**
	 * @readonly
	 * @type {string}
	 */
	get direction() {
		return this._direction
	}

}

export default Neighbor
