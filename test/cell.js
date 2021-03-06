import assert from "assert"

import RelativePosition from "../src/relative-position.js"
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

	it("getRelativePosition", () => {
		const grid = new Grid()
		grid.build(8)
		assert.strictEqual(grid.getCell(0, 0).getRelativePosition(grid.getCell(0, 0)), null)
		assert.deepEqual(grid.getCell(0, 0).getRelativePosition(grid.getCell(0, 1)), new RelativePosition(RelativePosition.AXIS.VERTICAL, RelativePosition.DIRECTION.FORWARD))
		assert.deepEqual(grid.getCell(0, 1).getRelativePosition(grid.getCell(0, 0)), new RelativePosition(RelativePosition.AXIS.VERTICAL, RelativePosition.DIRECTION.BACKWARD))
		assert.deepEqual(grid.getCell(0, 0).getRelativePosition(grid.getCell(1, 0)), new RelativePosition(RelativePosition.AXIS.HORIZONTAL, RelativePosition.DIRECTION.FORWARD))
		assert.deepEqual(grid.getCell(1, 0).getRelativePosition(grid.getCell(0, 0)), new RelativePosition(RelativePosition.AXIS.HORIZONTAL, RelativePosition.DIRECTION.BACKWARD))
		assert.deepEqual(grid.getCell(0, 0).getRelativePosition(grid.getCell(1, 1)), new RelativePosition(RelativePosition.AXIS.DIAGONAL_RIGHT, RelativePosition.DIRECTION.FORWARD))
		assert.deepEqual(grid.getCell(1, 1).getRelativePosition(grid.getCell(0, 0)), new RelativePosition(RelativePosition.AXIS.DIAGONAL_RIGHT, RelativePosition.DIRECTION.BACKWARD))
	})

	it("getAxisCells", () => {
		const grid = new Grid()
		grid.build(4)
		const axisCells = grid.getCell(0, 0).getAxisCells(RelativePosition.AXIS.VERTICAL)
		assert.strictEqual(axisCells[0].x, 0)
		assert.strictEqual(axisCells[0].y, 0)
		assert.strictEqual(axisCells[1].x, 0)
		assert.strictEqual(axisCells[1].y, 1)
		assert.strictEqual(axisCells[2].x, 0)
		assert.strictEqual(axisCells[2].y, 2)
		assert.strictEqual(axisCells[3].x, 0)
		assert.strictEqual(axisCells[3].y, 3)
	})

	it("getNeighborByCell", () => {
		const grid = new Grid()
		grid.build(4)
		const neighbor = grid.rows[0].cells[0].getNeighborByCell(grid.rows[0].cells[1])
		assert.strictEqual(neighbor.relativePosition.axis, RelativePosition.AXIS.VERTICAL)
		assert.strictEqual(neighbor.relativePosition.direction, RelativePosition.DIRECTION.FORWARD)
		assert.strictEqual(neighbor.cell.x, 0)
		assert.strictEqual(neighbor.cell.y, 1)
		const neighbor_ = grid.rows[2].cells[2].getNeighborByCell(grid.rows[3].cells[3])
		assert.strictEqual(neighbor_.relativePosition.axis, RelativePosition.AXIS.DIAGONAL_RIGHT)
		assert.strictEqual(neighbor_.relativePosition.direction, RelativePosition.DIRECTION.FORWARD)
		assert.strictEqual(neighbor_.cell.x, 3)
		assert.strictEqual(neighbor_.cell.y, 3)
	})

})
