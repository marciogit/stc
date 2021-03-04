import { AppHeader } from '../styles/header';

function Header () {
	return(
		<AppHeader>
			<div className='display-options'></div>
			<div className='fps'></div>
			<div className='shutter'></div>
			<div className='iris'></div>
			<div className='timecode'></div>
			<div className='gain'></div>
			<div className='wb'></div>
			<div className='tint'></div>
			<div className='ac'></div>
			<div className='settings'></div>
		</AppHeader>
	)
}

export default Header;