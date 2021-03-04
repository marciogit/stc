
import { createGlobalStyle} from 'styled-components';

// FONTS
import bmdLight 	from '../fonts/bmd-light.ttf';
import bmdRegular	from '../fonts/bmd-regular.ttf';
import bmdMedium 	from '../fonts/bmd-medium.ttf';
import bmdBold 		from '../fonts/bmd-bold.ttf';
import bmdHeavy 	from '../fonts/bmd-heavy.ttf';

import SliderToolTip 	from '../images/general/tooltip.png';
import PaintSliderColor from '../images/effects-paint/paint-stroke-color.png';

export default createGlobalStyle `
	@font-face {
		font-family: 'bmd-light';
		font-style: normal;
		font-weight: 200;
		src: url(${bmdLight});
	}

	@font-face {
		font-family: 'bmd-regular';
		font-style: normal;
		font-weight: 300;
		src: url(${bmdRegular});
	}

	@font-face {
		font-family: 'bmd-medium';
		font-style: normal;
		font-weight: 400;
		src: url(${bmdMedium});
	}

	@font-face {
		font-family: 'bmd-bold';
		font-style: normal;
		font-weight: 600;
		src: url(${bmdBold});
	}

	@font-face {
		font-family: 'bmd-heavy';
		font-style: normal;
		font-weight: 600;
		src: url(${bmdHeavy});
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border;
		user-select: none;
	}

	body {
		background-color: #a6adba;
		-webkit-font-smoothing: antialiased;
		font-family: 'bmd-regular';
		color: #fff;
		position: relative;
	}

	.app {
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.main-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 826px;
	}

	.none {
		display: none!important;
	}

	.canvas-container {
		position: absolute!important;
		top: 0;
		left: 0;
	}

	.canvas-wrapper {
		display: none;

		&.show { display: table; }
	}

	.rs-slider-handle {
		&:nth-child(3) {
			pointer-events: none!important;
			display: none;
		}
	}

	&.small-colored {
		background-image: url(${PaintSliderColor});
		background-size: 14px 250px;
		background-position: 0 0;

		.rs-slider-bar { background-color: rgba(0,0,0,0); }
		.rs-slider-progress-bar { background-color: rgba(0,0,0,0); }
	}

	.slider-tooltip {
		position: absolute;
		left: -317px;
		width: 265px;
		height: 100px;
		background-image: url(${SliderToolTip});
		background-repeat: no-repeat;
		background-size: 100%;
		z-index: 10;

		> div {
			width: 220px;
			height: auto;
			margin: 15px 0 0 0;
			font-family: 'bmd-medium';
			font-size: 54px;
			text-align: center;
		}
	}

	.level-02 { z-index: 2; }
	.level-03 { z-index: 2; }
`
