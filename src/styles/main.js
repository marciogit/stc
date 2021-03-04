
import styled, { css } from 'styled-components';

// GENERAL
import Model 		from '../images/general/model.png';
import IconsTimer 	from '../images/general/icons-list-timer.png';
import CurrentTimer from '../images/general/icons-list-current-timer.png';

// IMAGES - CAMERA (EFFECTS)
import Effects	from '../images/nav/effects.png';
import Back		from '../images/nav/back.png';
import Color 	from '../images/nav/color.png';
import Emoji 	from '../images/nav/emoji.png';
import Looks 	from '../images/nav/looks.png';
import Paint 	from '../images/nav/paint.png';
import Reset 	from '../images/nav/reset.png';

// COLOR - SLIDERS / WHEELS - ICONS
import ColorNavList 		from '../images/effects-color/nav-color.png';
import ColorWheelsList 		from '../images/effects-color/icons-list-color-wheels.png';
import ColorContrastList 	from '../images/effects-color/icons-list-color-contrast.png';
import ColorLightsList 		from '../images/effects-color/icons-list-color-lights.png';

// LOOKS - ICONS
import LooksNav 		from '../images/effects-looks/nav-looks.png';
import LooksIconsList	from '../images/effects-looks/icons-list-looks.png';

// EMOJI - ICONS
import EmojiNav 			from '../images/effects-emoji/nav-emoji.png'
import EmojiIconsList 		from '../images/effects-emoji/icons-list-emojis.png';
import EmojiCurrentSize 	from '../images/effects-emoji/icons-list-emojis-size.png';

// PAINT - ICONS
import PaintNav 				from '../images/effects-paint/nav-paint.png';
import PaintStrokeSizesList 	from '../images/effects-paint/icons-list-paint-size.png';
import PaintCurrentStrokeColor 	from '../images/effects-paint/icons-list-paint-color.png';
import PaintCurrentStroke 		from '../images/effects-paint/icons-list-current-stroke-size.png';

export const CameraWrapper = styled.div `
	position: relative;
	background-color: #fff;
`

export const MainCamera = styled.div `
	position: relative;
	width: 1920px;
	height: 1200px;
	transform-origin: top left;
`

// GENERAL
function globalCurrentTimer() {
	let currentTimer = '';

	for (let i = 0; i <= 1; i += 1) {
		currentTimer += `
			&.active-timer-${i} {
				background-image: url(${CurrentTimer});
				background-position: 0 -${(i * 120) - 0}px;
			}
		`
	}

	return css`${currentTimer}`;
}

// COLOR
function ColorNav() {
	let colorNav = '';

	for (let i = 0; i <= 10; i += 1) {
		colorNav += `
			&.color-nav-${i} {
				background-image: url(${ColorNavList});
				background-position: 0 -${(i * 120) - 120 }px;
			}
		`
	}

	return css`${colorNav}`;
}

function ColorWheels() {
	let colorWheels = '';

	for (let i = 0; i <= 10; i += 1) {
		colorWheels += `
			&.color-wheels-${i} {
				background-image: url(${ColorWheelsList});
				background-position: 0 -${(i * 120) - 120 }px;
			}
		`
	}

	return css`${colorWheels}`;
}

function ColorContrast() {
	let colorContrast = '';

	for (let i = 0; i <= 10; i += 1) {
		colorContrast += `
			&.color-contrast-${i} {
				background-image: url(${ColorContrastList});
				background-position: 0 -${(i * 120) - 120}px;
			}
		`
	}

	return css`${colorContrast}`;
}

function ColorLights() {
	let colorLights = '';

	for (let i = 0; i <= 10; i += 1) {
		colorLights += `
			&.color-lights-${i} {
				background-image: url(${ColorLightsList});
				background-position: 0 -${(i * 120) - 120}px;
			}
		`
	}

	return css`${colorLights}`;
}

// LOOKS
function LooksIconsLoop() {
	let looks = '';

	for (let i = 0; i <= 10; i += 1) {
		looks += `
			&.looks-list-${i} {
				background-image: url(${LooksIconsList});
				background-position: 0 -${(i * 120)}px;
			}
		`
	}

	return css`${looks}`;
}

// EMOJI
function EmojiIcons() {
	let emojisIcons = '';

	for (let i = 0; i <= 10; i += 1) {
		emojisIcons += `
			&.emoji-${i} {
				background-image: url(${EmojiIconsList});
				background-position: 0 -${(i * 120) - 120}px;
			}
		`
	}

	return css`${emojisIcons}`;
}

function EmojiIconsTimer() {
	let emojisTimer = '';

	for (let i = 0; i <= 10; i += 1) {
		emojisTimer += `
			&.timer-${i} {
				background-image: url(${IconsTimer});
				background-position: 0 -${(i * 120) - 120}px;
			}
		`
	}

	return css`${emojisTimer}`;
}

function EmojiCurrentEmoji() {
	let emojisCurrentEmoji = '';

	for (let i = 0; i <= 10; i += 1) {
		emojisCurrentEmoji += `
			&.active-emoji-${i} {
				background-image: url(${EmojiIconsList});
				background-position: 0 -${(i * 120) - 0}px;
			}
		`
	}

	return css`${emojisCurrentEmoji}`;
}

// PAINT
function PaintStrokeColor() {
	let strokeColor = '';

	for (let i = 0; i <= 2; i += 1) {
		strokeColor += `
			&.paint-color-${i} {
				background-image: url(${PaintCurrentStrokeColor});
				background-position: 0 -${(i * 120) - 120}px;
			}
		`
	}

	return css`${strokeColor}`;
}

function PaintStrokeSize() {
	let strokeSize = '';

	for (let i = 0; i <= 4; i += 1) {
		strokeSize += `
			&.active-stroke-size-${i} {
				background-image: url(${PaintCurrentStroke});
				background-position: 0 -${(i * 120) - 0}px;
			}
		`
	}

	return css`${strokeSize}`;
}

function PaintStrokeSizes() {
	let sizes = '';

	for (let i = 0; i <= 10; i += 1) {
		sizes += `
			&.size-${i} {
				background-image: url(${PaintStrokeSizesList});
				background-position: 0 -${(i * 120) - 120}px;
			}
		`
	}

	return css`${sizes}`;
}

export const Screen = styled.div `
	display: block;
	position: relative;
	width: 100%;
	height: 1080px;
	margin: 0;

	.model {
		width: 100%;
		height: 1080px;
		background-image: url(${Model});
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 100%;

		&.looks-0-1 { background-position: 0 0; }
		&.looks-00 	{ background-position: 0 -1080px; }
		&.looks-01 	{ background-position: 0 -2160px; }
		&.looks-02 	{ background-position: 0 -3240px; }
		&.looks-03 	{ background-position: 0 -4320px; }
		&.looks-04 	{ background-position: 0 -5400px; }
		&.looks-05 	{ background-position: 0 -6480px; }
		&.looks-06 	{ background-position: 0 -7560px; }
		&.looks-07 	{ background-position: 0 -8640px; }
		&.looks-08 	{ background-position: 0 -9720px; }

		.overlay {
			width: 100%;
			height: 1080px;
			background-color: #000;
			opacity: 0;
		}
	}

	.effects-trigger {
		position: absolute;
		top: 25px;
		right: 30px;
		width: 120px;
		height: 120px;
		background-image: url(${Effects});
		background-size: 120px;
		background-repeat: no-repeat;
		z-index: 2;

		&.active {
			background-position: 0 -240px!important;
		}
	}

	.back {
		position: absolute;
		top: 25px;
		right: 150px;
		width: 120px;
		height: 120px;
		background-color: rgba(0,0,0,0.4);
		background-image: url(${Back});
		background-size: 54px 50px;
		background-repeat: no-repeat;
		background-position: center;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		z-index: 2;
	}

	.effects {
		position: absolute;
		top: 164px;
		right: 30px;
		width: 120px;
		height: 703px;
		background-color: rgba(0,0,0,0.4);
		border-radius: 30px;
		z-index: 2;

		&.active {
			width: 242px;
			height: 703px;
		}

		div {
			width: 100%;
			height: 147px;
			background-position: center;
			background-repeat: no-repeat;

			&.color-wheel 	{ background-image: url(${Color}); background-size: 66px; }
			&.looks 		{ background-image: url(${Looks}); background-size: 71px 57px; }
			&.emoji  		{ background-image: url(${Emoji}); background-size: 65px 66px; }
			&.paint  		{ background-image: url(${Paint}); background-size: 66px 48px; }

			&.reset  		{
				height: 119px;
				margin-top: -1px;
				border-top: 2px solid #000;
				background-image: url(${Reset});
				background-size: 70px 70px;
				background-position: center 23px;
			}

			&.active {
				background-color: #3198FC;
			}
		}
	}

	.effects-options-panel {
		position: absolute;
		top: 164px;
		right: 30px;
		width: 242px;
		height: 703px;
		z-index: 2;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 242px;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
			border-radius: 30px;
		}

		.header {
			position: absolute;
			top: 0;
			right: 0;
			width: 242px;
			height: 120px;
			background-color: rgba(0,0,0,0.5);
			border-bottom: 2px solid #000;
			background-size: 71px 57px;
			background-position: center;
			background-repeat: no-repeat;
			border-top-left-radius: 30px;
			border-top-right-radius: 30px;

			&.color-wheel 	{ background-image: url(${Color}); background-size: 66px; }
			&.looks 		{ background-image: url(${Looks}); background-size: 71px 57px; }
			&.emoji  		{ background-image: url(${Emoji}); background-size: 65px 66px; }
			&.paint  		{ background-image: url(${Paint}); background-size: 66px 48px; }
		}

		.container-options {
			position: absolute;
			top: 122px;
			right: 0;
			display: grid;
			width: 242px;
			height: calc(100% - 122px);
			grid-template-columns: 50% 50%;

			.col-wrapper {
				height: 100%;
				border-right: 2px solid #000;
				border-bottom-left-radius: 30px;
				overflow: hidden;
			}

			div {
				&.col-left {
					height: 100%;

					.slider-container-large {
						position: absolute;
						top: 50px;
						left: 50px;
						width: 13px;
						height: 480px;
					}

					.slider-container-small {
						position: absolute;
						top: 282px;
						left: 50px;
						width: 13px;
						height: 249px;
					}

					.tooltip {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100px;
						height: 100px;
						border: 2px solid red;
						display: none;
					}

					.rs-slider-handle {
						&:active {
							.tooltip {
								display: block!important;
							}
						}
					}

					&.transparent-scroll {
						overflow:   scroll;

						::-webkit-scrollbar {
							width: 0;
							height: 0;
							background: transparent;
						}
					}

					.icons {
						height: calc(100% / 5);
						background-size: 120px;
						background-position: center;
						background-repeat: no-repeat;

						${ColorWheels()}
						${ColorContrast()}
						${ColorLights()}
						${LooksIconsLoop()};
						${EmojiIcons()};
						${EmojiIconsTimer()};
						${PaintStrokeColor()};
						${PaintStrokeSizes()};

						&.slider-05 {
							border-bottom-left-radius: 30px;
						}

						&.looks-list-9 {
							&.active-looks {
								box-shadow: inset 0px 0px 0px 8px rgba(49,152,252,1);
								border-bottom-left-radius: 30px;
							}
						}

						&.active {
							background-color: #3198FC;
						}

						&.active-looks {
							box-shadow: inset 0px 0px 0px 8px rgba(49,152,252,1);
						}
					}
				}

				&.col-right {
					height: 100%;

					div {
						display: flex;
						align-items: center;
						justify-content: center;
						height: calc(100% / 5);
						background-repeat: no-repeat;
						background-size: 120px;

						${ColorNav()};

						&.looks-nav-list {
							background-image: url(${LooksNav});

							&.active {
								box-shadow: inset 0px 0px 0px 8px rgba(49,152,252,1);
							}
						}

						&.looks-nav-intensity 	{
							background-image: url(${LooksNav});
							background-position: 0 0px;
						}

						&.emoji-nav-emoji 	{
							background-image: url(${EmojiNav});
							background-position: 0 0;
							${EmojiCurrentEmoji()}
						}

						&.emoji-nav-resize 	{
							background-image: url(${EmojiCurrentSize});
							background-position: 0 0;
						}

						&.emoji-nav-timer  {
							background-image: url(${EmojiNav});
							background-position: 0 -240px;

							${globalCurrentTimer()};
						}

						&.paint-nav-color {
							position: relative;

							span {
								position: absolute;
								top: 30px;
								left: 30px;
								width: 52px;
								height: 52px;
								border: 4px solid #fff;
								border-radius: 100%;

								&.black { background-color: #000; }
								&.white { background-color: #fff; }
							}
						}

						&.paint-nav-size,
						&.paint-nav-contrast,
						&.paint-nav-timer {
							background-image: url(${PaintNav});
						}

						&.paint-nav-size {
							background-position: 0 -120px;

							${PaintStrokeSize()}
						}

						&.paint-nav-contrast {
							background-position: 0 -240px;
						}

						&.paint-nav-timer {
							background-position: 0 -360px;

							${globalCurrentTimer()};
						}

						&.looks-nav-intensity,
						&.emoji-nav-resize,
						&.emoji-nav-timer,
						&.paint-nav-contrast,
						&.paint-nav-timer {
							position: relative;

							span {
								position: absolute;
								top: 64px;
								right: 16px;
								width: 46px;
								font-family: 'bmd-bold';
								font-size: 26px;
								text-align: center;
								color: #fff;
							}
						}

						&.item-disabled {
							user-select: none;
							pointer-events: none;
						}

						&.reset{
							border-top: 2px solid #000;
							background-image: url(${Reset});
							background-size: 70px;
							background-position: center;
						}

						&.active {
							background-color: #3198FC;
						}
					}
				}
			}
		}
	}
`
