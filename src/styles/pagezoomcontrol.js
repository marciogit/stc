
import styled from 'styled-components';

export const PageZoomControl = styled.div`
    display: flex;
	margin: 30px auto;
    border: 1px solid #959BA7;
    border-radius: 7px;

    button {
        position: relative;
        width: 48px;
        height: 48px;
        padding: 0;
        background: none;
        border: none;

        &.disabled {
            opacity: .4;
        }
    }

    .horizontal {
        position: absolute;
        top: 23px;
        left: 13px;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        background-color: #52565C;
    }

    .vertical {
        position: absolute;
        top: 13px;
        left: 23px;
        width: 2px;
        height: 22px;
        border-radius: 1px;
        background-color: #52565C;
    }

    .value {
        padding: 0 10px;
        font-family: 'bmd-regular';
        font-size: 21px;
        line-height: 48px;
        letter-spacing: 1.5px;
        text-align: center;
        color: #848A94;
        user-select: none;
    }
`

