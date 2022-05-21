/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Size } from '../types'


export type SizePresets = { [P in Size]: {
  height: string
  width: string
} }

export const sizePresets: SizePresets = {
  large: {
    width: '200px',
    height: '125px'
  },
  small: {
    width: '125px',
    height: '65px'
  }
}
