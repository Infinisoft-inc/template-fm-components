/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

type Size = 'small' | 'large'

type {{{component}}}Props = {
  message?: string
  backgroundColor?: string
  size?: Size
}

type {{{component}}}Presets = { [P in Size]: {
  height: string
  width: string
} }

const buttonPresets: {{{component}}}Presets = {
  large: {
    width: '200px',
    height: '125px'
  },
  small: {
    width: '125px',
    height: '65px'
  }
}
