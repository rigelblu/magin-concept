// Copyright rigélblu inc.
// All rights reserved.
import React from 'react';

import HTMLBody from '@/src/containers/HTMLElements/HTMLBody';
import Home from './home';

export default function PageRoot() {
  return (
    <HTMLBody showHeader={false} showFooter={false}>
      <main>
        <Home />
      </main>
    </HTMLBody>
  );
}
