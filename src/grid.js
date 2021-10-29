import Cell from "./cell.js"
import Neighbor from "./neighbor.js"
import Column from "./column.js"

/**
 * @global
 */
class Grid {

	constructor() {
		this._cells = {}
	}

	/**
	 * @param {Cell} cell
	 */
	addCell(cell) {
		for(const cell_ of this.getCells()) {
			const adjacent = cell.isAdjacentTo(cell_)
			if (adjacent) {
				const neighbor = new Neighbor(cell_, adjacent.axe, adjacent.direction)
				cell.neighbors.push(neighbor)
				const adjacent_ = cell_.isAdjacentTo(cell)
				const neighbor_ = new Neighbor(cell, adjacent_.axe, adjacent_.direction)
				cell_.neighbors.push(neighbor_)
			}
		}
		if(!this.cells[cell.x]) {
			this.cells[cell.x] = new Column(cell.x)
		}
		cell._column = this.cells[cell.x]
		this.cells[cell.x].cells[cell.y] = cell
	}

	/**
	 * @param {number} size
	 */
	build(size) {
		for(let x = 0; x < size; x++) {
			for(let y = 0; y < size; y++) {
				const cell = new Cell(x, y)
				this.addCell(cell)
			}
		}
	}

	/**
	 * @param   {number} x
	 * @param   {number} y
	 * @returns {Cell}
	 */
	getCell(x, y) {
		return this.cells[x].cells[y]
	}

	getCells() {
		return Object.values(this.cells).map(column => Object.values(column.cells)).flat()
	}

	/**
	 * @readonly
	 * @type {column[]}
	 */
	get cells() {
		return this._cells
	}

}

export default Grid
