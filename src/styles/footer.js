
import styled from 'styled-components';

// IMAGES - FOOTER
import Histogram from '../images/footer/transport-bar.png';

export const AppFooter = styled.div `
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 168px;
	background-image: url(${Histogram});
	background-size: 100%;
`
