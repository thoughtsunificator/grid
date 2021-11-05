import assert from "assert"

import { Cell } from "../index.js"
import RelativePosition from "../src/relative-position.js"
import Neighbor from "../src/neighbor.js"

describe("Neighbor", () => {

	it("instance", () => {
		assert.strictEqual(RelativePosition.AXIS.VERTICAL, "AXIS_VERTICAL")
		assert.strictEqual(RelativePosition.AXIS.HORIZONTAL, "AXIS_HORIZONTAL")
		assert.strictEqual(RelativePosition.AXIS.DIAGONAL_LEFT, "AXIS_DIAGONAL_LEFT")
		assert.strictEqual(RelativePosition.AXIS.DIAGONAL_RIGHT, "AXIS_DIAGONAL_RIGHT")
		assert.strictEqual(RelativePosition.DIRECTION.FORWARD, "DIRECTION_FORWARD")
		assert.strictEqual(RelativePosition.DIRECTION.BACKWARD, "DIRECTION_BACKWARD")
		const cell = new Cell(0, 0)
		const relativePosition = new RelativePosition(RelativePosition.AXIS.DIAGONAL_LEFT, RelativePosition.DIRECTION.FORWARD)
		const neighbor = new Neighbor(cell, relativePosition)
		assert.deepEqual(neighbor.cell, cell)
		assert.deepEqual(neighbor.relativePosition, relativePosition)
		assert.throws(() => {
			neighbor.cell = ""
		})
		assert.throws(() => {
			neighbor.relativePosition = ""
		})
	})

})
