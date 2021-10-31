import assert from "assert"

import { Cell } from "../index.js"
import Neighbor from "../src/neighbor.js"

describe("Neighbor", () => {

	it("instance", () => {
		assert.strictEqual(Neighbor.AXE.VERTICAL, "AXE_VERTICAL")
		assert.strictEqual(Neighbor.AXE.HORIZONTAL, "AXE_HORIZONTAL")
		assert.strictEqual(Neighbor.AXE.DIAGONAL_LEFT, "AXE_DIAGONAL_LEFT")
		assert.strictEqual(Neighbor.AXE.DIAGONAL_RIGHT, "AXE_DIAGONAL_RIGHT")
		assert.strictEqual(Neighbor.DIRECTION.FORWARD, "DIRECTION_FORWARD")
		assert.strictEqual(Neighbor.DIRECTION.BACKWARD, "DIRECTION_BACKWARD")
		const cell = new Cell(0, 0)
		const neighbor = new Neighbor(cell, Neighbor.AXE.DIAGONAL_LEFT, Neighbor.DIRECTION.FORWARD)
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
