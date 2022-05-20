/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import React, { Suspense } from 'react';

type Size = 'small' | 'large'

type ButtonProps = {
  /**
   * message description
   */
  message?: string
  backgroundColor?: string
  size?: Size
}

type ButtonPresets = { [P in Size]: {
  height: string
  width: string
} }

const buttonPresets: ButtonPresets = {
  large: {
    width: '200px',
    height: '125px'
  },
  small: {
    width: '125px',
    height: '65px'
  }
}

const Button = ({ message = 'Doguette la coquette', backgroundColor = 'blue', size = 'large', ...props }: ButtonProps) => <Suspense><input type='text' {...props}/><button {...props} style={{ backgroundColor, ...buttonPresets[size] }} >CHALKUT</button></Suspense>

export default Button;
