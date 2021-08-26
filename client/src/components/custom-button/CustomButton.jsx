import React from 'react'
import './custumButton.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...othersProps}) => (

    <button {...othersProps} className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`}>
        {children}
    </button>
)

export default CustomButton
