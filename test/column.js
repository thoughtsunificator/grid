import assert from "assert"

import Neighbor from "../src/neighbor.js"
import Column from "../src/column.js"
import { Grid } from "../index.js"

describe("Column", () => {

	it("instance", () => {
		const column = new Column(1)
		assert.strictEqual(column.x, 1)
		assert.throws(() => {
			column.cells = ""
		})
		assert.throws(() => {
			column.x = ""
		})
	})

})
