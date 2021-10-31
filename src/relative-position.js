/**
 * @global
 */
class RelativePosition {

	/**
	 * @property AXE {Axe}
	 * @property AXE.VERTICAL       {string}
	 * @property AXE.HORIZONTAL     {string}
	 * @property AXE.DIAGONAL_LEFT  {string}
	 * @property AXE.DIAGONAL_RIGHT {string}
	 */
	static AXE = {
		VERTICAL: "AXE_VERTICAL",
		HORIZONTAL: "AXE_HORIZONTAL",
		DIAGONAL_LEFT: "AXE_DIAGONAL_LEFT",
		DIAGONAL_RIGHT: "AXE_DIAGONAL_RIGHT",
	}

	/**
	 * @property Direction {Direction}
	 * @property Direction.FORWARD  {string}
	 * @property Direction.BACKWARD {string}
	 */
	static DIRECTION = {
		FORWARD: "DIRECTION_FORWARD",
		BACKWARD: "DIRECTION_BACKWARD",
	}

	/**
	 * @param {Axe}       axe
	 * @param {Direction} direction
	 */
	constructor(axe, direction) {
		this._axe = axe
		this._direction = direction
	}

	/**
	 * @readonly
	 * @type {Axe}
	 */
	get axe() {
		return this._axe
	}

	/**
	 * @readonly
	 * @type {Direction}}
	 */
	get direction() {
		return this._direction
	}

}

export default RelativePosition
