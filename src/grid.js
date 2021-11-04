import Cell from "./cell.js"
import Neighbor from "./neighbor.js"
import Row from "./row.js"

/**
 * @global
 */
class Grid {

	constructor() {
		this._rows = {}
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @returns {Cell}
	 */
	addCell(x, y) {
		const cell = new Cell(x, y)
		for(const cell_ of this.getCells()) {
			const relativePosition = cell.getRelativePosition(cell_)
			if (relativePosition) {
				const neighbor = new Neighbor(cell_, relativePosition)
				cell.neighbors.push(neighbor)
				const relativePosition_ = cell_.getRelativePosition(cell)
				const neighbor_ = new Neighbor(cell, relativePosition_)
				cell_.neighbors.push(neighbor_)
			}
		}
		if(!this.rows[cell.x]) {
			this.rows[cell.x] = new Row(cell.x)
		}
		cell._row = this.rows[cell.x]
		this.rows[cell.x].cells[cell.y] = cell
		return cell
	}

	/**
	 * @param {number} size
	 */
	build(size) {
		for(let x = 0; x < size; x++) {
			for(let y = 0; y < size; y++) {
				this.addCell(x, y)
			}
		}
	}

	/**
	 * @param   {number} x
	 * @param   {number} y
	 * @returns {Cell}
	 */
	getCell(x, y) {
		return this.rows[x].cells[y]
	}

	getCells() {
		return Object.values(this.rows).map(row => Object.values(row.cells)).flat()
	}

	/**
	 * @readonly
	 * @type {row[]}
	 */
	get rows() {
		return this._rows
	}

}

export default Grid
