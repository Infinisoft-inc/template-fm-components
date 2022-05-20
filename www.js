/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

type Size = 'small' | 'large'

type ButtonProps = {
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
