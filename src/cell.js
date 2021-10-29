import Neighbor from "./neighbor.js"

/**
 * @global
 */
class Cell {

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	constructor(x, y) {
		this._x = x
		this._y = y
		this._column = null
		this._neighbors = []
		this._data = null
	}

	/**
	 * @returns {object}
	 */
	isAdjacentTo(cell) {
		if (this.x === cell.x && this.y - 1 === cell.y) {
			return { axe: Neighbor.AXE_VERTICAL, direction: Neighbor.DIRECTION_BACKWARD }
		}
		if (this.x === cell.x && this.y + 1 === cell.y) {
			return { axe: Neighbor.AXE_VERTICAL, direction: Neighbor.DIRECTION_FORWARD }
		}
		if (this.x - 1 === cell.x && this.y === cell.y ) {
			return { axe: Neighbor.AXE_HORIZONTAL, direction: Neighbor.DIRECTION_BACKWARD }
		}
		if (this.x + 1 === cell.x && this.y === cell.y ) {
			return { axe: Neighbor.AXE_HORIZONTAL, direction: Neighbor.DIRECTION_FORWARD }
		}
		if (this.x - 1 === cell.x && this.y - 1 === cell.y) {
			return { axe: Neighbor.AXE_DIAGONAL_RIGHT, direction: Neighbor.DIRECTION_BACKWARD }
		}
		if (this.x + 1 === cell.x && this.y + 1 === cell.y) {
			return { axe: Neighbor.AXE_DIAGONAL_RIGHT, direction: Neighbor.DIRECTION_FORWARD }
		}
		if (this.x - 1 === cell.x && this.y + 1 === cell.y) {
			return { axe: Neighbor.AXE_DIAGONAL_LEFT, direction: Neighbor.DIRECTION_BACKWARD }
		}
		if (this.x + 1 === cell.x && this.y - 1 === cell.y) {
			return { axe: Neighbor.AXE_DIAGONAL_LEFT, direction: Neighbor.DIRECTION_FORWARD }
		}
		return null
	}

	/**
	 * @returns {array}
	 */
	getAxeCells(axe, path = [], axeCells = []) {
		if(axeCells.length === 0) {
			axeCells.push(this)
		}
		path.push(this)
		this.neighbors.filter(neighbor => neighbor.axe === axe && path.includes(neighbor.cell) === false).forEach(neighbor => {
			axeCells.push(neighbor.cell)
			axeCells.concat(neighbor.cell.getAxeCells(axe, path, axeCells))
		})
		axeCells.sort((a, b) => {
			if (a.y < b.y) {
				return -1
			}
			if (a.y > b.y) {
				return 1
			}
			if (a.x < b.x) {
				return -1
			}
			if (a.x > b.x) {
				return 1
			}
			return 0
		})
		return axeCells
	}

	/**
	 * @param   {Cell} cell
	 * @returns {Neighbor}
	 */
	getNeighbor(cell) {
		return this.neighbors.find(neighbor => neighbor.cell === cell)
	}

	/**
	 * @readonly
	 * @type {number}
	 */
	get x() {
		return this._x
	}

	/**
	 * @readonly
	 * @type {number}
	 */
	get y() {
		return this._y
	}

	/**
	 * @readonly
	 * @type {Neighbor[]}
	 */
	get neighbors() {
		return this._neighbors
	}

	/**
	 * @readonly
	 * @type {Column}
	 */
	get column() {
		return this._column
	}

	/**
	 * @readonly
	 * @type {*}
	 */
	get data() {
		return this._data
	}

	set data(data) {
		this._data = data
	}

}

export default Cell