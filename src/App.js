
import { useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { Slider, RangeSlider } from 'rsuite';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// STYLES
import GlobalStyle from './styles/global';
import { CameraWrapper, MainCamera, Screen  } from './styles/main';
import { PageZoomControl } from './styles/pagezoomcontrol';
import './styles/sliders.css';

// IMAGES
import emoji01 from './images/effects-emoji/emoji-01.png';
import emoji02 from './images/effects-emoji/emoji-02.png';
import emoji03 from './images/effects-emoji/emoji-03.png';
import emoji04 from './images/effects-emoji/emoji-04.png';
import emoji05 from './images/effects-emoji/emoji-05.png';
import emoji06 from './images/effects-emoji/emoji-06.png';
import emoji07 from './images/effects-emoji/emoji-07.png';
import emoji08 from './images/effects-emoji/emoji-08.png';
import emoji09 from './images/effects-emoji/emoji-09.png';
import emoji10 from './images/effects-emoji/emoji-10.png';
import wheelLift 	from './images/effects-color/wheel-lift.png';
import wheelGamma 	from './images/effects-color/wheel-gamma.png';
import wheelGain 	from './images/effects-color/wheel-gain.png';
import wheelAll 	from './images/effects-color/wheel-all.png';

App.defaultProps = {
    width: 1920,
    height: 1200,
}

function useInterval(callback, delay) {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

function App({ width, height }) {

	// SCREEN SCALE
	const [ main, setMain ] = useState({ scale: 50 });
	const scaleSize = [25, 50, 67, 100];
	const scaleHandler = (val) => {
		const index = scaleSize.indexOf(main.scale);

		if ( val === 'up') {
			if (index < scaleSize.length - 1) {
				setMain(prevMain => {
					return { prevMain, scale: scaleSize[index + 1]}
				});
			}
		}

		if ( val === 'down') {
			if ( index > 0 ) {
				setMain(prevMain => {
					return { ...prevMain, scale: scaleSize[index - 1]}
				});
			}
		}
	}

	// FABRIC JS
	const [ canvas, setCanvas ] = useState('');
	const initCanvas = () => {
		const newCanvas = new fabric.Canvas('canvas', {
			width: 1920,
			height: 1080,
			selection: false,
			selectable: false,
		});
		return newCanvas;
	};

	const [count, setCount] = useState('');
	const [isRunning, setIsRunning] = useState(false);

	useInterval(() => {
		setCount(count-1);
		console.log(count-1);
		if(count < 1) {
			setCount(0);
			setIsRunning(false)
		}
	}, isRunning ? 1000 : null);

	function toggleTimer() {
		setIsRunning(!isRunning);
	}

	useEffect(()=> {
		setCanvas(initCanvas());
	},[]);

	const [ level01, setLevel01 ] = useState(false);
	const [ level02, setLevel02 ] = useState(false);
	const [ level03, setLevel03 ] = useState(false);
	const [ effectIndex, setEffectIndex ] = useState(-1);
	const [ hideFooter, setHideFooter ] = useState(false);
	const [ hideTools, setHideTools ] = useState(false);

	const effectsIcons = [
		{ icon: 'color-wheel' },
		{ icon: 'looks' },
		{ icon: 'emoji' },
		{ icon: 'paint' },
	];

	// COLOR SECTION
	const [ colorNav, setColorNav ] = useState(0);
	const [ colorWheelIndex, setColorWheel ] = useState(-1);
	const [ colorContrastIndex, setColorContrast ] = useState(-1);
	const [ colorLightsIndex, setColorLights ] = useState(-1);

	// LOOKS - SECTION
	const [ looksNav, setLooksNav ] = useState(0);
	const [ looksIndex, setLooks ] = useState(-1);

	// EMOJIS SECTION
	const [ emojiNav, setEmojiNav ] = useState(0);
	const [ emojiIndex, setEmoji ] = useState(-1);
	const [ emojiTimer, setEmojiTimer ] = useState(0);

	// PAINT SECTION
	const [ paintNav, setPaintNav ] = useState(0);
	const [ paintColor, setPaintColor ] = useState(0);
	const [ paintSize, setPaintSize ] = useState(0);
	const [ paintTimer, setPaintTimer ] = useState(0);

	const effectsFunction = index => {
		setEffectIndex(index);
		setLevel01(false);
		setLevel02(true);

		switch (index) {
			case 2:
				canvas.isDrawingMode = false;
				canvas.selection = false;
				canvas.selectable = false;
				canvas.off('mouse:down');
			break;

			case 3:
				enableDraw();
				canvas.freeDrawingBrush.color = '#000';
				canvas.off('mouse:down');
			break;

			default:
			break;
		}
	}

	const goLevel01 = () => {
		setLevel01(!level01);
		setEffectIndex(-1);
	}

	const goLevel03 = (i) => {
		setColorWheel(i);
		setHideFooter(true);
		setLevel01(false);
		setLevel02(false);
		setLevel03(true);
	}

	const backLevel01 = () => {
		setLevel01(false);
		setLevel02(false);
		setLevel03(false);
		setEffectIndex(-1);
		setColorWheel(-1);
	}

	const backLevel02 = () => {
		setLevel01(true);
		setLevel02(false);
		setColorWheel(-1);
		canvas.isDrawingMode = false;
	}

	const backLevel03 = () => {
		setLevel02(true);
		setLevel03(false);
		setHideFooter(false);
		setColorWheel(-1);
	}

	const ColorNavFunc = (i) => {
		setColorNav(i);
		if (i !== 0) { setColorWheel(-1) };
	}

	const [ contrastValue, setContrast ] = useState([50, 50]);
	const [ looksContrastValue, setLooksContrast ] = useState([0, 100]);
	const [ paintContrastValue, setPaintContrast ] = useState([0, 100]);
	const [ saturationValue, setSaturation ] = useState([50, 50]);
	const [ highlightValue, setHighlight ] = useState([50, 50]);
	const [ sepiaValue, setSepia ] = useState(0);
	const [ invertValue, setInvert ] = useState(0);
	const [ emojiSize, setEmojiSize ] = useState([2, 2]);
	const [ emojiCurrentSize, setEmojiCurrentSize ] = useState(0.4);

	const updateEmojiCurrentSize = (i) => {
		i = emojiSize[0];

		switch (i) {
			case 0.4: setEmojiCurrentSize(2); break;
			case 0.8: setEmojiCurrentSize(1.6); break;
			case 1.2000000000000002: setEmojiCurrentSize(1.2); break;
			case 1.6: setEmojiCurrentSize(0.8); break;
			case 2: setEmojiCurrentSize(0.4); break;
			default: break;
		}
	}

	// CLEAR CANVAS
	const clearCanvas = () => {
		canvas.clear();
		canvas.isDrawingMode = false;
	}

	// DELETE SELECTED OBJECT
	const deleteSelected = () => {
		canvas.getActiveObjects().forEach(function(object) {
			return canvas.remove(object);
		});

		canvas.discardActiveObject().renderAll();
	};

	// ENABLE DRAWING
	const enableDraw = () => {
		setEmoji(10);
		canvas.off('mouse:down');
		canvas.freeDrawingBrush.width = 5;
		canvas.selection = false;
		canvas.selectable = false;
		canvas.isDrawingMode = true;

		const cursor = new fabric.StaticCanvas("cursor");
		const cursorOpacity = .5;
		const mousecursor = new fabric.Circle({
			left: -100,
			top: -100,
			radius: canvas.freeDrawingBrush.width / 2,
			fill: "rgba(255,0,0," + cursorOpacity + ")",
			stroke: "black",
			originX: 'center',
			originY: 'center'
		});

		cursor.add(mousecursor);

		canvas.on('mouse:down', function(obj) {
			setHideTools(true);
		})

		canvas.on('mouse:up', function(obj) {
			setHideTools(false);
		})
	}

	const paintColorNav = (i) => {
		setPaintColor(i);
		switch (i) {
			case 0:
				canvas.freeDrawingBrush.color = '#000';
			break;

			case 1:
				canvas.freeDrawingBrush.color = '#fff';
			break;

			default:
				break;
		}
	}

	const paintSizeNav = (i) => {
		setPaintSize(i);

		switch (i) {
			case 1: canvas.freeDrawingBrush.width = 10; break;
			case 2: canvas.freeDrawingBrush.width = 15; break;
			case 3: canvas.freeDrawingBrush.width = 20; break;
			case 4: canvas.freeDrawingBrush.width = 25; break;
			default: break;
		}
	}

	const setEmojiCanvas = (index) => {
		canvas.off('mouse:down');
		setEmoji(index);

		let currentEmoji;

		switch (index) {
			case 0: currentEmoji = `${emoji01}`; break;
			case 1: currentEmoji = `${emoji02}`; break;
			case 2: currentEmoji = `${emoji03}`; break;
			case 3: currentEmoji = `${emoji04}`; break;
			case 4: currentEmoji = `${emoji05}`; break;
			case 5: currentEmoji = `${emoji06}`; break;
			case 6: currentEmoji = `${emoji07}`; break;
			case 7: currentEmoji = `${emoji08}`; break;
			case 8: currentEmoji = `${emoji09}`; break;
			default: currentEmoji = `${emoji10}`; break;
		}

		canvas.on('mouse:down', (object) => {
			const pointer = canvas.getPointer(object.e);

			fabric.Image.fromURL(`${currentEmoji}`, (img) => {
				img.set({
					top: pointer.y,
					left: pointer.x,
					scaleX: emojiCurrentSize,
					scaleY: emojiCurrentSize,
					selectable: false,
					hasBorders: false,
					hasControls: false
				});

				canvas.selection = false;
				canvas.add(img).setActiveObject(img);
			});
		});

		canvas.on('mouse:up', (object) => {
			switch (emojiTimer) {
				case 1:
					setCount(1); toggleTimer();
					setTimeout(() => { deleteSelected() }, 1000);
				break;
				case 2:
					setCount(3); toggleTimer();
					setTimeout(() => { deleteSelected() }, 3000);
				break;
				case 3:
					setCount(5); toggleTimer();
					setTimeout(() => { deleteSelected() }, 5000);
				break;
				case 4:
					setCount(10); toggleTimer();
					setTimeout(() => { deleteSelected() }, 10000);
				break;
				default: break;
			}
		});
	}

	// RESETS
	const resetColorSection = () => {
		setContrast(100);
		setSaturation(100);
		setHighlight(100);
		setSepia(0);
		setInvert(0);
		setColorWheel(-1);
	}

	const resetLooksSection = () => {
		setLooksContrast([0,100]);
		setLooks(-1);
	}

	const resetEmojiSection = () => {
		canvas.clear();
		canvas.isDrawingMode = false;
		setEmoji(-1);
		setEmojiTimer(0);
		setEmojiSize([2, 2]);
		setEmojiCurrentSize(0.4);
	}

	const resetPaintSection = () => {
		setPaintColor(0);
		setPaintSize(0);
		setPaintContrast([0, 100]);
		setPaintTimer(-1);
		clearCanvas();
	}

	const resetApp = () => {
		resetColorSection();
		resetEmojiSection();
		resetPaintSection();
		resetLooksSection();
		setEffectIndex(-1)
		canvas.off('mouse:down');
	}

	const [ mouseEvent, setmouseEvent ] = useState(false);
	const handleEvent = (event) => {
		switch (event.type) {
			case "mousedown": setmouseEvent(true); break;
			case "mouseup": setmouseEvent(false); break;
			default: break;
		}
	}

	var sliderLooksRev = [];
	for (var indexSliderLooks = 0; indexSliderLooks < 101; indexSliderLooks++) {
		sliderLooksRev.push(indexSliderLooks);
	}

	var toolTipLooks = [];
	for (var indexToolTipLooks = 0; indexToolTipLooks < 101; indexToolTipLooks++) {
		toolTipLooks.push(indexToolTipLooks);
	}

	var sliderPaintContrast = [];
	for (var indexSliderPaintContrast = 0; indexSliderPaintContrast < 101; indexSliderPaintContrast++) {
		sliderPaintContrast.push(indexSliderPaintContrast);
	}

	var toolTipPaintContrast = [];
	for (var indexToolTipPaintContrast = 0; indexToolTipPaintContrast < 101; indexToolTipPaintContrast++) {
		toolTipPaintContrast.push(indexToolTipPaintContrast);
	}

	return (
		<div className="app">
			<GlobalStyle/>

			<div className="main-wrapper">
				<CameraWrapper style={{
					margin: '0 auto',
					position: 'relative',
					width: (width * main.scale / 100) + 'px',
					height: (height * main.scale / 100) + 'px' }}>

					{/* MAIN CAMERA */}
					<MainCamera style={{transform: 'scale(' + main.scale / 100 + ')'}}>

						{/* HEADER */}
						<Header/>

						{/* SCREEN */}
						<Screen>
							{/* MODEL */}
							<div className={`model looks-0${looksIndex}`}
								style={{'filter':`
									contrast(${contrastValue+'%'})
									contrast(${paintContrastValue+'%'})
									saturate(${saturationValue+'%'})
									brightness(${highlightValue+'%'})
									sepia(${sepiaValue+'%'})
									invert(${invertValue+'%'})`}}>
							</div>

							{/* LEVEL 01 */}
							<div className={"effects-trigger " + (level02 || level03 ? 'none' : '')} style={level01 ? {'backgroundPosition':'0px -120px'} : {}} onClick={goLevel01}></div>

							<div className={"level-01 " + (level01 ? '' : ' none')}>
								<div className={'effects'}>
									{effectsIcons.map((effect, i)=> (
										<div key={i} className={(effect.icon) + (effectIndex === i ? ' active' : '')}
											onClick={()=> effectsFunction(i)}></div>
									))}
									<div className="reset" onClick={()=> resetApp()}></div>
								</div>
							</div>

							{/* LEVEL 02 */}
							<div className={"level-02 " + (level02 ? '' : ' none')} style={hideTools ? {'opacity':'0','transition':'.3s'} : {}}>
								<div className={"effects-trigger "} style={{'backgroundPosition':'0px -240px'}} onClick={backLevel01}></div>
								<div className={'back '} onClick={()=> {backLevel02()}}></div>

								<div className={'effects-options-panel '}>
									<div className={"header " +
									(effectIndex === 0 ? ' color-wheel' : '' ||
									effectIndex === 1 ? ' looks' : '' ||
									effectIndex === 2 ? ' emoji' : '' ||
									effectIndex === 3 ? ' paint' : '')}></div>

									{/* COLOR */}
									<div className={"container-options " + (effectIndex !== 0 ? 'none' : '')}>
										<div className="col-wrapper">
											<div className={"col-left " + (colorNav !== 0 ? 'none' : '')}>
												{[...Array(4)].map((el, i)=>
													<div key={i} className={`icons color-wheels-${i+1}` + (colorWheelIndex === i ? ' active' : '')} onClick={()=> goLevel03(i)}></div>
												)}
											</div>

											<div className={"col-left " + (colorNav !== 1 ? 'none' : '')}>
												{[...Array(2)].map((el, i)=>
													<div key={i} className={`icons color-contrast-${i+1} ` + (colorContrastIndex === i ? 'active' : '')} onClick={()=> setColorContrast(i)}></div>
												)}
												<div className="slider-container-small">
														<div className={"slider-tooltip " + (!mouseEvent ? 'none' : '')}
														style={contrastValue[0] < 50 ? {'top':`calc(${contrastValue[0]}% - 50px)`} : {'top':`calc(${contrastValue[1]}% - 50px)`}}>
															<div className={(contrastValue[0] <= 49 ? '' : 'none')}>{contrastValue[0]}%</div>
															<div className={contrastValue[0] >= 50 ? '' : 'none'}>{contrastValue[1]}%</div>
														</div>
													<RangeSlider onMouseDown={handleEvent} onMouseUp={handleEvent} tooltip={false} vertical progress defaultValue={[contrastValue[0], contrastValue[1]]} onChange={value => {setContrast(value)}}/>
												</div>
											</div>

											<div className={"col-left " + (colorNav !== 2 ? 'none' : '')}>
												{[...Array(2)].map((el, i)=>
													<div key={i} className={`icons color-lights-${i+1} ` + (colorLightsIndex === i ? 'active' : '')} onClick={()=> setColorLights(i)}></div>
												)}
												<div className="slider-container-small">
													<div className={"slider-tooltip " + (!mouseEvent ? 'none' : '')}
														style={highlightValue[0] < 50 ? {'top':`calc(${highlightValue[0]}% - 50px)`} : {'top':`calc(${highlightValue[1]}% - 50px)`}}>
														<div className={(highlightValue[0] <= 49 ? '' : 'none')}>{highlightValue[0]}%</div>
														<div className={highlightValue[0] >= 50 ? '' : 'none'}>{highlightValue[1]}%</div>
													</div>
													<RangeSlider onMouseDown={handleEvent} onMouseUp={handleEvent} tooltip={false} vertical progress defaultValue={[highlightValue[0], highlightValue[1]]} onChange={value => {setHighlight(value)}}/>
												</div>
											</div>

											<div className={"col-left " + (colorNav !== 3 ? 'none' : '')}>
												<div className="slider-container-large">
													<div className={"slider-tooltip " + (!mouseEvent ? 'none' : '')}
														style={saturationValue[0] < 50 ? {'top':`calc(${saturationValue[0]}% - 50px)`} : {'top':`calc(${saturationValue[1]}% - 50px)`}}>
														<div className={(saturationValue[0] <= 49 ? '' : 'none')}>{saturationValue[0]}%</div>
														<div className={saturationValue[0] >= 50 ? '' : 'none'}>{saturationValue[1]}%</div>
													</div>
													<RangeSlider onMouseDown={handleEvent} onMouseUp={handleEvent} tooltip={false} vertical progress defaultValue={[saturationValue[0], saturationValue[1]]} onChange={value => {setSaturation(value)}}/>
												</div>
											</div>
										</div>

										<div className="col-right">
											{[...Array(4)].map((el, i)=>
												<div key={i} className={`icons color-nav-${i+1}` + (colorNav === i ? ' active' : '')} onClick={()=> ColorNavFunc(i)}></div>
											)}

											{/* RESET */}
											<div className={"reset"} onClick={resetColorSection}></div>
										</div>
									</div>

									{/* LOOKS */}
									<div className={"container-options " + (effectIndex !== 1 ? 'none' : '')}>
										<div className="col-wrapper">
											<div className={"col-left transparent-scroll " + (looksNav !== 0 ? 'none' : '')}>
												{[...Array(9)].map((el, i)=>
													<div key={i} className={`icons looks-list-${i+1}` + (looksIndex === i ? ' active-looks' : '')} onClick={()=> setLooks(i)}></div>
												)}
											</div>

											<div className={"col-left " + (looksNav !== 1 ? 'none' : '')}>
												<div className="slider-container-large">
													<div className={"slider-tooltip " + (!mouseEvent ? 'none' : '')}
														style={{'top':`calc(${looksContrastValue[0]}% - 50px)`}}>
															{toolTipLooks.reverse().map((val, i)=>(
																<div className={(looksContrastValue[0] === i ? '':'none')}>{val}</div>
															))}
													</div>
													<RangeSlider onMouseDown={handleEvent} onMouseUp={handleEvent} tooltip={false} vertical progress value={[looksContrastValue[0], looksContrastValue[1]]} onChange={value => {setLooksContrast(value)}}/>
												</div>
												<div className="tooltip"></div>
											</div>
										</div>

										<div className="col-right">
											<div className={"looks-nav-list " + (looksNav === 0 ? ' active' : '')}
												style={looksIndex > -1 ? {'backgroundPosition':`0 -${(looksIndex * 120) + 240}px`} : {'backgroundPosition':'0 -120px'}}
												onClick={()=> setLooksNav(0)}></div>

											<div className={"looks-nav-intensity " +  (looksNav === 1 ? ' active' : '')} onClick={()=> setLooksNav(1)}>
												{sliderLooksRev.reverse().map((val, i)=>(
													<span className={(looksContrastValue[0] === i ? '':'none')}>{val}</span>
												))}
											</div>
											<div className="disabled-item"></div>
											<div className="disabled-item"></div>

											{/* RESET */}
											<div className={"reset"} onClick={resetLooksSection}></div>
										</div>
									</div>

									{/* EMOJI */}
									<div className={"container-options " + (effectIndex !== 2 ? 'none' : '')}>
										<div className="col-wrapper">
											<div className={"col-left transparent-scroll " + (emojiNav !== 0 ? 'none' : '')}>
												{[...Array(10)].map((el, i) =>
													<div key={i} className={`icons emoji-${i+1}` + (emojiIndex === i ? ' active' : '')} onClick={()=> {setEmojiCanvas(i)}}></div>
												)}
											</div>

											<div className={"col-left " + (emojiNav !== 1 ? 'none' : '')}>
												<div className="slider-container-large">
													<RangeSlider
														tooltip={false} vertical progress
														min={0.4} max={2} step={0.4}
														value={[emojiSize[0], emojiSize[1]]}
														defaultValue={[emojiSize[0], emojiSize[1]]}
														onChange={value => {setEmojiSize(value); updateEmojiCurrentSize(value)}}/>
												</div>
											</div>

											<div className={"col-left " + (emojiNav !== 2 ? 'none' : '')}>
												{[...Array(5)].map((el, i)=>
													<div key={i} className={`icons timer-${i+1}` + (emojiTimer === i ? ' active' : '')} onClick={()=> setEmojiTimer(i)}></div>
												)}
											</div>
										</div>

										<div className="col-right">
											<div className={`emoji-nav-emoji active-emoji-${emojiIndex}` + (emojiNav === 0 ? ' active' : '')} onClick={()=> {setEmojiNav(0)}}></div>

											<div className={"emoji-nav-resize "
											+ (emojiNav === 1 ? ' active' : '')} onClick={()=> {setEmojiNav(1)}}>
												<span className={emojiSize[0] !== 2 ? 'none' : ''}>XS</span>
												<span className={emojiSize[0] !== 1.6 ? 'none' : ''}>S</span>
												<span className={emojiSize[0] !== 1.2000000000000002 ? 'none' : ''}>M</span>
												<span className={emojiSize[0] !== .8 ? 'none' : ''}>L</span>
												<span className={emojiSize[0] !== .4 ? 'none' : ''}>XL</span>
											</div>

											<div className={"emoji-nav-timer "
											+ (emojiNav === 2 ? ' active' : '')
											+ (emojiTimer === 0 ? ' active-timer-0' : '')
											+ (emojiTimer >= 1 ? ' active-timer-1' : '')} onClick={()=> setEmojiNav(2)}>
												<span className={emojiTimer !== 1 ? 'none' : ''}>{!isRunning ? '1s' : `${count}s`}</span>
												<span className={emojiTimer !== 2 ? 'none' : ''}>{!isRunning ? '3s' : `${count}s`}</span>
												<span className={emojiTimer !== 3 ? 'none' : ''}>{!isRunning ? '5s' : `${count}s`}</span>
												<span className={emojiTimer !== 4 ? 'none' : ''}>{!isRunning ? '10s' : `${count}s`}</span>
											</div>

											<div className="disabled-item"></div>

											{/* RESET */}
											<div className={"reset "} onClick={resetEmojiSection}></div>
										</div>
									</div>

									{/* PAINT */}
									<div className={"container-options " + (effectIndex !== 3 ? 'none' : '')}>
										<div className="col-wrapper">
											<div className={"col-left " + (paintNav !== 0 ? 'none' : '')}>
												{[...Array(2)].map((el, i)=>
													<div key={i} className={`icons paint-color-${i+1} ` + (paintColor === i ? 'active' : '')} onClick={()=> paintColorNav(i)}></div>
												)}
												<div className="slider-container-small">
													<Slider className="small-colored" tooltip={false} vertical progress value={contrastValue} onChange={value => {setContrast(value)}}/>
												</div>
											</div>

											<div className={"col-left " + (paintNav !== 1 ? 'none' : '')}>
												{[...Array(5)].map((el, i) =>
													<div key={i} className={`icons size-${i+1}` + (paintSize === i ? ' active' : '')} onClick={()=> paintSizeNav(i)}></div>
												)}
											</div>

											<div className={"col-left " + (paintNav !== 2 ? 'none' : '')}>
												<div className="slider-container-large">
													<div className={"slider-tooltip " + (!mouseEvent ? 'none' : '')}
														style={{'top':`calc(${paintContrastValue[0]}% - 50px)`}}>
														{toolTipPaintContrast.reverse().map((val, i)=>(
															<div className={(paintContrastValue[0] === i ? '':'none')}>{val}</div>
														))}
													</div>
													<RangeSlider onMouseDown={handleEvent} onMouseUp={handleEvent} tooltip={false} vertical progress value={[paintContrastValue[0], paintContrastValue[1]]} onChange={value => {setPaintContrast(value)}}/>
												</div>
											</div>

											<div className={"col-left " + (paintNav !== 3 ? 'none' : '')}>
												{[...Array(5)].map((el, i)=>
													<div key={i} className={`icons timer-${i+1}` + (paintTimer === i ? ' active' : '')} onClick={()=> setPaintTimer(i)}></div>
												)}
											</div>
										</div>

										<div className="col-right">
											<div className={"paint-nav-color " + (paintNav === 0 ? ' active ' : '')} onClick={()=> setPaintNav(0)}>
												<span className={"black "
													+ (paintColor === 0 ? 'black' : '')
													+ (paintColor === 1 ? 'white' : '')}></span>
											</div>

											<div className={"paint-nav-size "
											+ (paintNav === 1 ? ' active ' : '')
											+ (paintSize === 0 ? 'active-stroke-size-0' : '')
											+ (paintSize === 1 ? 'active-stroke-size-1' : '')
											+ (paintSize === 2 ? 'active-stroke-size-2' : '')
											+ (paintSize === 3 ? 'active-stroke-size-3' : '')
											+ (paintSize === 4 ? 'active-stroke-size-4' : '')} onClick={()=> setPaintNav(1)}></div>

											<div className={"paint-nav-contrast "+ (paintNav === 2 ? 'active ' : '')} onClick={()=> setPaintNav(2)}>
												{sliderPaintContrast.reverse().map((val, i)=>(
													<span className={(paintContrastValue[0] === i ? '':'none')}>{val}</span>
												))}
											</div>

											<div className={"paint-nav-timer "
											+ (paintNav === 3 ? ' active ' : '')
											+ (paintTimer === 0 ? 'active-timer-0' : '')
											+ (paintTimer >= 1 ? 'active-timer-1' : '')} onClick={()=> setPaintNav(3)}>
												<span className={paintTimer !== 1 ? 'none' : ''}>1s</span>
												<span className={paintTimer !== 2 ? 'none' : ''}>3s</span>
												<span className={paintTimer !== 3 ? 'none' : ''}>5s</span>
												<span className={paintTimer !== 4 ? 'none' : ''}>10s</span>
											</div>

											{/* RESET */}
											<div className={"reset "} onClick={resetPaintSection}></div>
										</div>
									</div>
								</div>
							</div>

							{/* LEVEL 03 */}
							<div className={"level-03 " + (level03 ? '' : ' none')}>
								<div className={"effects-trigger "} style={{'backgroundPosition':'0px -240px'}} onClick={backLevel01}></div>
								<div className={'back '} onClick={backLevel03}></div>

								<img src={`${wheelAll}`} className={(colorWheelIndex === 0 ? '' : 'none')} style={{'position':'absolute','width':'1620px','height':'730px','top':'180px','right':'30px'}} alt=""/>
								<img src={`${wheelLift}`} className={(colorWheelIndex === 1 ? '' : 'none')} style={{'position':'absolute','width':'540px','height':'730px','top':'180px','right':'30px'}} alt=""/>
								<img src={`${wheelGamma}`} className={(colorWheelIndex === 2 ? '' : 'none')} style={{'position':'absolute','width':'540px','height':'730px','top':'180px','right':'30px'}} alt=""/>
								<img src={`${wheelGain}`} className={(colorWheelIndex === 3 ? '' : 'none')} style={{'position':'absolute','width':'540px','height':'730px','top':'180px','right':'30px'}} alt=""/>
							</div>

							{/* CANVAS */}
							<div className={'canvas-wrapper  ' + (paintColor !== -1 || emojiIndex !== -1 ? 'show' : '')}>
								<canvas id='canvas' style={{'filter':`contrast(${paintContrastValue+'%'})`}}></canvas>
							</div>
						</Screen>

						{/* FOOTER */}
						<div className={hideFooter ? 'none' : ''} style={hideTools ? {'opacity':'0','transition':'.3s'} : {}}>
							<Footer/>
						</div>

					</MainCamera>
				</CameraWrapper>

				<PageZoomControl>
					<button className='down' onClick={() => { scaleHandler('down') }}>
						<span className="horizontal"></span>
					</button>

					<div className="value">{main.scale}%</div>

					<button className='up' onClick={() => { scaleHandler('up') }}>
						<span className="horizontal"></span>
						<span className="vertical"></span>
					</button>
				</PageZoomControl>
			</div>
		</div>
	);
}

export default App;
