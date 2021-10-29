import assert from "assert"

import Neighbor from "../src/neighbor.js"
import { Grid, Cell } from "../index.js"

describe("Cell", () => {

	it("instance", () => {
		const cell = new Cell(1, 5)
		assert.strictEqual(cell.x, 1)
		assert.strictEqual(cell.y, 5)
		assert.strictEqual(cell.data, null)
		assert.deepEqual(cell.neighbors, [])
		assert.throws(() => {
			cell.x = ""
		})
		assert.throws(() => {
			cell.y = ""
		})
		assert.throws(() => {
			cell.neighbors = ""
		})
	})

	it("isAdjacentTo", () => {
		const grid = new Grid()
		grid.build(8)
		assert.strictEqual(grid.getCell(0, 0).isAdjacentTo(grid.getCell(0, 0)), null)
		assert.deepEqual(grid.getCell(0, 0).isAdjacentTo(grid.getCell(0, 1)), { axe: Neighbor.AXE_VERTICAL, direction: Neighbor.DIRECTION_FORWARD })
		assert.deepEqual(grid.getCell(0, 1).isAdjacentTo(grid.getCell(0, 0)), { axe: Neighbor.AXE_VERTICAL, direction: Neighbor.DIRECTION_BACKWARD })
		assert.deepEqual(grid.getCell(0, 0).isAdjacentTo(grid.getCell(1, 0)), { axe: Neighbor.AXE_HORIZONTAL, direction: Neighbor.DIRECTION_FORWARD })
		assert.deepEqual(grid.getCell(1, 0).isAdjacentTo(grid.getCell(0, 0)), { axe: Neighbor.AXE_HORIZONTAL, direction: Neighbor.DIRECTION_BACKWARD })
		assert.deepEqual(grid.getCell(0, 0).isAdjacentTo(grid.getCell(1, 1)), { axe: Neighbor.AXE_DIAGONAL_RIGHT, direction: Neighbor.DIRECTION_FORWARD })
		assert.deepEqual(grid.getCell(1, 1).isAdjacentTo(grid.getCell(0, 0)), { axe: Neighbor.AXE_DIAGONAL_RIGHT, direction: Neighbor.DIRECTION_BACKWARD })
	})

	it("getAxeCells", () => {
		const grid = new Grid()
		grid.build(4)
		const axeCells = grid.getCell(0, 0).getAxeCells(Neighbor.AXE_VERTICAL)
		assert.strictEqual(axeCells[0].x, 0)
		assert.strictEqual(axeCells[0].y, 0)
		assert.strictEqual(axeCells[1].x, 0)
		assert.strictEqual(axeCells[1].y, 1)
		assert.strictEqual(axeCells[2].x, 0)
		assert.strictEqual(axeCells[2].y, 2)
		assert.strictEqual(axeCells[3].x, 0)
		assert.strictEqual(axeCells[3].y, 3)
	})

	it("getNeighbor", () => {
		const grid = new Grid()
		grid.build(4)
		const neighbor = grid.cells[0].cells[0].getNeighbor(grid.cells[0].cells[1])
		assert.strictEqual(neighbor.axe, Neighbor.AXE_VERTICAL)
		assert.strictEqual(neighbor.direction, Neighbor.DIRECTION_FORWARD)
		assert.strictEqual(neighbor.cell.x, 0)
		assert.strictEqual(neighbor.cell.y, 1)
		const neighbor_ = grid.cells[2].cells[2].getNeighbor(grid.cells[3].cells[3])
		assert.strictEqual(neighbor_.axe, Neighbor.AXE_DIAGONAL_RIGHT)
		assert.strictEqual(neighbor_.direction, Neighbor.DIRECTION_FORWARD)
		assert.strictEqual(neighbor_.cell.x, 3)
		assert.strictEqual(neighbor_.cell.y, 3)
	})

})
