import assert from "assert"

import { Grid, Cell } from "../index.js"

describe("Grid", () => {

	it("instance", () => {
		const grid = new Grid()
		assert.deepEqual(grid.rows, {})
		assert.throws(() => {
			grid.rows = ""
		})
	})

	it("addCell", () => {
		const grid = new Grid()
		const cell = grid.addCell(0, 1)
		assert.deepEqual(grid.rows, { 0: cell.row })
		assert.deepEqual(cell.row.cells, { 1: cell })
		const cell_ = grid.addCell(0, 2)
		assert.deepEqual(grid.rows, { 0: cell_.row })
		assert.deepEqual(cell.row.cells, { 1: cell, 2: cell_ })
	})

	it("getCell", () => {
		const grid = new Grid()
		const cell = grid.addCell(3, 9)
		const cell_ = grid.addCell(1, 1)
		assert.deepEqual(grid.getCell(3, 9), cell)
		assert.deepEqual(grid.getCell(1, 1), cell_)
	})

	it("getCells", () => {
		const grid = new Grid()
		assert.deepEqual(grid.getCells(), [])
		grid.build(3)
		assert.deepEqual(grid.getCells(), [
			grid.getCell(0, 0),
			grid.getCell(0, 1),
			grid.getCell(0, 2),
			grid.getCell(1, 0),
			grid.getCell(1, 1),
			grid.getCell(1, 2),
			grid.getCell(2, 0),
			grid.getCell(2, 1),
			grid.getCell(2, 2),
		])
	})

})
