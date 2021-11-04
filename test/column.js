import assert from "assert"

import Neighbor from "../src/neighbor.js"
import Row from "../src/row.js"
import { Grid } from "../index.js"

describe("Row", () => {

	it("instance", () => {
		const row = new Row(1)
		assert.strictEqual(row.x, 1)
		assert.throws(() => {
			row.cells = ""
		})
		assert.throws(() => {
			row.x = ""
		})
	})

})
