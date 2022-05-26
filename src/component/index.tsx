/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * {{{component}}} Federated Micro Component
 */
import React, { Suspense, forwardRef, ForwardedRef } from 'react';
import css from './index.module.css'
import { {{{component}}}Props } from './types';

const {{ component }} =  (props: {{{component}}}Props, ref: ForwardedRef<unknown>) => {


  return <Suspense>
    <div className={css.root}>
      <button style={props} >
        Hello there
      </button>
    </div>

  </Suspense>
}

export default forwardRef<unknown, {{{component}}}Props>({{{component}}});
