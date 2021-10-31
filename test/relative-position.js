import assert from "assert"

import { Cell } from "../index.js"
import RelativePosition from "../src/relative-position.js"

describe("RelativePosition", () => {

	it("instance", () => {
		const relativePosition = new RelativePosition(RelativePosition.AXE.DIAGONAL_LEFT, RelativePosition.DIRECTION.FORWARD)
		assert.strictEqual(relativePosition.axe, "AXE_DIAGONAL_LEFT")
		assert.strictEqual(relativePosition.direction, "DIRECTION_FORWARD")
		assert.throws(() => {
			relativePosition.axe = ""
		})
		assert.throws(() => {
			relativePosition.direction = ""
		})
	})

})
