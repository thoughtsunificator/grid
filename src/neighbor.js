/**
 * @global
 */
class Neighbor {

	/**
	 * @param {Cell}             cell
	 * @param {RelativePosition} axe
	 */
	constructor(cell, relativePosition) {
		this._cell = cell
		this._relativePosition = relativePosition
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
	 * @type {RelativePosition}
	 */
	get relativePosition() {
		return this._relativePosition
	}

}

export default Neighbor
