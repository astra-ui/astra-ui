import React from 'react';
import { DangerButtonWrapper, DefaultButtonWrapper, EmailButtonWrapper, PhoneButtonWrapper, PrimaryDiagonalSwipeWrapper, PrimaryButtonWrapper,
		PrimarySwipeWrapper, PrimarySliceWrapper, ReadMoreButtonWrapper, SearchButtonWrapper } from './ButtonWrappers';
import { Icon } from '../../../src';

// Components are functions, and they must start with a capital letter
function Button (props) {
	const { type, animation, onClick, styles, label } = props;
	if(type){
		if(type === 'primary'){
			if(animation){
				if(animation === 'swipe'){
					return (<PrimarySwipeWrapper style = {styles} onClick={onClick}>{label}</PrimarySwipeWrapper>);
				}else if(animation === 'diagonal-swipe'){
					return (<PrimaryDiagonalSwipeWrapper style = {styles} onClick={onClick}>{label}</PrimaryDiagonalSwipeWrapper>);
				}else if(animation === 'slice'){
					return (<PrimarySliceWrapper style = {styles} onClick={onClick}>{label}</PrimarySliceWrapper>);
				}else{
					return (<PrimaryButtonWrapper style = {styles} onClick={onClick}>{label}</PrimaryButtonWrapper>);
				}
			}else{
				return (<PrimaryButtonWrapper style = {styles} onClick={onClick}>{label}</PrimaryButtonWrapper>);
			}
		}else if(type === 'danger'){
			return (<DangerButtonWrapper style = {styles} onClick={onClick}>{label}</DangerButtonWrapper>);
		}else if(type === 'search'){
			return (<SearchButtonWrapper onClick={onClick}>
				Search&nbsp;&nbsp;<Icon name="search"/>
			</SearchButtonWrapper>);
		}else if(type === 'read-more'){
			return (<ReadMoreButtonWrapper onClick={onClick}>
				Read more&nbsp;&nbsp;<Icon name="arrow-right"/>
			</ReadMoreButtonWrapper>);
		}else if(type === 'email'){
			return (<EmailButtonWrapper onClick={onClick}>
				me@email.com&nbsp;&nbsp;<Icon name="mail"/>
			</EmailButtonWrapper>);
		}else if(type === 'phone'){
			return (<PhoneButtonWrapper onClick={onClick}>
				tel: 1234 567 890&nbsp;&nbsp;<Icon name="phone-fill"/>
			</PhoneButtonWrapper>);
		}else{
			return (<DefaultButtonWrapper style = {styles} onClick={onClick}>{label}</DefaultButtonWrapper>);
		}
	}else{
		return (<DefaultButtonWrapper style = {styles} onClick={onClick}>{label}</DefaultButtonWrapper>);
	}
}

// This export will be picked up in ./index.js
export default Button;