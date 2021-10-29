import assert from "assert"

import { Grid, Cell } from "../index.js"

describe("Grid", () => {

	it("instance", () => {
		const grid = new Grid()
		assert.deepEqual(grid.cells, {})
		assert.throws(() => {
			grid.cells = ""
		})
	})

	it("addCell", () => {
		const grid = new Grid()
		const cell = new Cell(0, 1)
		grid.addCell(cell)
		assert.deepEqual(grid.cells, { 0: cell.column })
		assert.deepEqual(cell.column.cells, { 1: cell })
		const cell_ = new Cell(0 ,2)
		grid.addCell(cell_)
		assert.deepEqual(grid.cells, { 0: cell_.column })
		assert.deepEqual(cell.column.cells, { 1: cell, 2: cell_ })
	})

	it("getCell", () => {
		const grid = new Grid()
		const cell = new Cell(3, 9)
		const cell_ = new Cell(1, 1)
		grid.addCell(cell)
		grid.addCell(cell_)
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
