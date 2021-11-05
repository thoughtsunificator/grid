/**
 * @global
 */
class RelativePosition {

	/**
	 * @property AXIS {Axe}
	 * @property AXIS.VERTICAL       {string}
	 * @property AXIS.HORIZONTAL     {string}
	 * @property AXIS.DIAGONAL_LEFT  {string}
	 * @property AXIS.DIAGONAL_RIGHT {string}
	 */
	static AXIS = {
		VERTICAL: "AXIS_VERTICAL",
		HORIZONTAL: "AXIS_HORIZONTAL",
		DIAGONAL_LEFT: "AXIS_DIAGONAL_LEFT",
		DIAGONAL_RIGHT: "AXIS_DIAGONAL_RIGHT",
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
	 * @param {Axe}       axis
	 * @param {Direction} direction
	 */
	constructor(axis, direction) {
		this._axis = axis
		this._direction = direction
	}

	/**
	 * @readonly
	 * @type {Axe}
	 */
	get axis() {
		return this._axis
	}

	/**
	 * @readonly
	 * @type {Direction}
	 */
	get direction() {
		return this._direction
	}

}

export default RelativePosition
