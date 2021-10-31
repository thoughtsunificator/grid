import Cell from "./cell.js"
import Neighbor from "./neighbor.js"
import Column from "./column.js"

/**
 * @global
 */
class Grid {

	constructor() {
		this._columns = {}
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
		if(!this.columns[cell.x]) {
			this.columns[cell.x] = new Column(cell.x)
		}
		cell._column = this.columns[cell.x]
		this.columns[cell.x].cells[cell.y] = cell
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
		return this.columns[x].cells[y]
	}

	getCells() {
		return Object.values(this.columns).map(column => Object.values(column.cells)).flat()
	}

	/**
	 * @readonly
	 * @type {column[]}
	 */
	get columns() {
		return this._columns
	}

}

export default Grid
