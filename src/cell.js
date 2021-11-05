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
		this._row = null
		this._neighbors = []
		this._data = null
	}

	/**
	 * @param {Cell}
	 * @returns {RelativePosition}
	 */
	getRelativePosition(cell) {
		if (this.x === cell.x && this.y - 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXIS.VERTICAL, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x === cell.x && this.y + 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXIS.VERTICAL, RelativePosition.DIRECTION.FORWARD)
		}
		if (this.x - 1 === cell.x && this.y === cell.y ) {
			return new RelativePosition(RelativePosition.AXIS.HORIZONTAL, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x + 1 === cell.x && this.y === cell.y ) {
			return new RelativePosition(RelativePosition.AXIS.HORIZONTAL, RelativePosition.DIRECTION.FORWARD)
		}
		if (this.x - 1 === cell.x && this.y - 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXIS.DIAGONAL_RIGHT, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x + 1 === cell.x && this.y + 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXIS.DIAGONAL_RIGHT, RelativePosition.DIRECTION.FORWARD)
		}
		if (this.x - 1 === cell.x && this.y + 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXIS.DIAGONAL_LEFT, RelativePosition.DIRECTION.BACKWARD)
		}
		if (this.x + 1 === cell.x && this.y - 1 === cell.y) {
			return new RelativePosition(RelativePosition.AXIS.DIAGONAL_LEFT, RelativePosition.DIRECTION.FORWARD)
		}
		return null
	}

	/**
	 * @param {Axe}    axis
	 * @param {string} [path]
	 * @param {string} [axisCells=[]]
	 * @returns {Cell[]}
	 * @example getAxeCells(RelativePosition.AXIS.VERTICAL)
	 */
	getAxeCells(axis, path = [], axisCells = []) {
		if(axisCells.length === 0) {
			axisCells.push(this)
		}
		path.push(this)
		this.neighbors.filter(neighbor => neighbor.relativePosition.axis === axis && path.includes(neighbor.cell) === false).forEach(neighbor => {
			axisCells.push(neighbor.cell)
			axisCells.concat(neighbor.cell.getAxeCells(axis, path, axisCells))
		})
		axisCells.sort((a, b) => {
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
		return axisCells
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
	 * @type {Row}
	 */
	get row() {
		return this._row
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
