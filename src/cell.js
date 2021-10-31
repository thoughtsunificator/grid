import RelativePosition from "./relative-position.js"

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
	 * @param {Cell}
	 * @returns {RelativePosition}
	 */
	getRelativePosition(cell) {
		if (this.x === cell.x && this.y - 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXE.VERTICAL, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x === cell.x && this.y + 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXE.VERTICAL, RelativePosition.DIRECTION.FORWARD)
		}
		if (this.x - 1 === cell.x && this.y === cell.y ) {
			return new RelativePosition(RelativePosition.AXE.HORIZONTAL, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x + 1 === cell.x && this.y === cell.y ) {
			return new RelativePosition(RelativePosition.AXE.HORIZONTAL, RelativePosition.DIRECTION.FORWARD)
		}
		if (this.x - 1 === cell.x && this.y - 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXE.DIAGONAL_RIGHT, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x + 1 === cell.x && this.y + 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXE.DIAGONAL_RIGHT, RelativePosition.DIRECTION.FORWARD)
		}
		if (this.x - 1 === cell.x && this.y + 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXE.DIAGONAL_LEFT, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x + 1 === cell.x && this.y - 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXE.DIAGONAL_LEFT, RelativePosition.DIRECTION.FORWARD)
		}
		return null
	}

	/**
	 * @param {Axe}    axe
	 * @param {string} [path]
	 * @param {string} [axeCells=[]]
	 * @returns {array}
	 * @example getAxeCells(RelativePosition.AXE.VERTICAL)
	 */
	getAxeCells(axe, path = [], axeCells = []) {
		if(axeCells.length === 0) {
			axeCells.push(this)
		}
		path.push(this)
		this.neighbors.filter(neighbor => neighbor.relativePosition.axe === axe && path.includes(neighbor.cell) === false).forEach(neighbor => {
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
	getNeighborByCell(cell) {
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
