
import styled from 'styled-components';

import DisplayOpt	from '../images/header/display-options.png';
import Fps			from '../images/header/fps.png';
import Shutter		from '../images/header/shutter.png';
import Iris			from '../images/header/iris.png';
import TimeCode		from '../images/header/timecode.png';
import Gain			from '../images/header/gain.png';
import Wb			from '../images/header/wb.png';
import Tint			from '../images/header/tint.png';
import Ac			from '../images/header/ac.png';
import Settings		from '../images/header/settings.png';

export const AppHeader = styled.div `
	display: flex;
	align-items: center;
	width: 100%;
	height: 120px;
	background-color: #000;

	.display-options, .effects, .fps, .shutter, .iris, .timecode, .gain , .wb, .tint, .ac, .settings {
		background-size: 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	.display-options {
		width: 72px;
		height: 58px;
		margin-left: 40px;
		background-image: url(${DisplayOpt});
	}

	.fps {
		width: 92px;
		height: 73px;
		margin-left: 41px;
		background-image: url(${Fps});
	}

	.shutter {
		width: 145px;
		height: 73px;
		margin-left: 125px;
		background-image: url(${Shutter});
	}

	.iris {
		width: 75px;
		height: 73px;
		margin-left: 94px;
		background-image: url(${Iris});
	}

	.timecode {
		width: 385px;
		height: 78px;
		margin-left: 94px;
		background-image: url(${TimeCode});
	}

	.gain {
		width: 82px;
		height: 73px;
		margin-left: 86px;
		background-image: url(${Gain});
	}

	.wb {
		width: 112px;
		height: 73px;
		margin-left: 59px;
		background-image: url(${Wb});
	}

	.tint {
		width: 76px;
		height: 73px;
		margin-left: 54px;
		background-image: url(${Tint});
	}

	.ac {
		width: 72px;
		height: 44px;
		margin-left: 53px;
		background-image: url(${Ac});
	}

	.settings {
		width: 58px;
		height: 52px;
		margin-left: 58px;
		background-image: url(${Settings});
	}
`
