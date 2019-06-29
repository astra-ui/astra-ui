import React from 'react';
import { DangerButtonWrapper, DefaultButtonWrapper, FindButtonWrapper, PrimaryDiagonalSwipeWrapper, PrimaryButtonWrapper,
		PrimarySwipeWrapper, PrimarySliceWrapper } from './ButtonWrappers';
import { Icon } from '../../../src';

// Components are functions, and they must start with a capital letter
function Button (props) {
	const { type, animation, styles, label } = props;
	if(type){
		if(type === 'primary'){
			if(animation){
				if(animation === 'swipe'){
					return (<PrimarySwipeWrapper style = {styles}>{label}</PrimarySwipeWrapper>);
				}else if(animation === 'diagonal-swipe'){
					return (<PrimaryDiagonalSwipeWrapper style = {styles}>{label}</PrimaryDiagonalSwipeWrapper>);
				}else if(animation === 'slice'){
					return (<PrimarySliceWrapper style = {styles}>{label}</PrimarySliceWrapper>);
				}else{
					return (<PrimaryButtonWrapper style = {styles}>{label}</PrimaryButtonWrapper>);
				}
			}else{
				return (<PrimaryButtonWrapper style = {styles}>{label}</PrimaryButtonWrapper>);
			}
		}else if(type === 'danger'){
			return (<DangerButtonWrapper style = {styles}>{label}</DangerButtonWrapper>);
		}else if(type === 'search'){
			return (<FindButtonWrapper>
				Search&nbsp;&nbsp;<Icon name="search"/>
			</FindButtonWrapper>);
		}else{
			return (<DefaultButtonWrapper style = {styles}>{label}</DefaultButtonWrapper>);
		}
	}else{
		return (<DefaultButtonWrapper style = {styles}>{label}</DefaultButtonWrapper>);
	}
}

// This export will be picked up in ./index.js
export default Button;