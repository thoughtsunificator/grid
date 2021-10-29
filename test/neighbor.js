import assert from "assert"

import { Cell } from "../index.js"
import Neighbor from "../src/neighbor.js"

describe("Neighbor", () => {

	it("instance", () => {
		assert.strictEqual(Neighbor.AXE_VERTICAL, "AXE_VERTICAL")
		assert.strictEqual(Neighbor.AXE_HORIZONTAL, "AXE_HORIZONTAL")
		assert.strictEqual(Neighbor.AXE_DIAGONAL_LEFT, "AXE_DIAGONAL_LEFT")
		assert.strictEqual(Neighbor.AXE_DIAGONAL_RIGHT, "AXE_DIAGONAL_RIGHT")
		assert.strictEqual(Neighbor.DIRECTION_FORWARD, "DIRECTION_FORWARD")
		assert.strictEqual(Neighbor.DIRECTION_BACKWARD, "DIRECTION_BACKWARD")
		const cell = new Cell(0, 0)
		const neighbor = new Neighbor(cell, Neighbor.AXE_DIAGONAL_LEFT, Neighbor.DIRECTION_FORWARD)
		assert.deepEqual(neighbor.cell, cell)
		assert.strictEqual(neighbor.axe, "AXE_DIAGONAL_LEFT")
		assert.strictEqual(neighbor.direction, "DIRECTION_FORWARD")
		assert.throws(() => {
			neighbor.cell = ""
		})
		assert.throws(() => {
			neighbor.axe = ""
		})
		assert.throws(() => {
			neighbor.direction = ""
		})
	})

})
