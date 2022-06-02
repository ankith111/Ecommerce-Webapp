import React, { lazy, Suspense } from 'react';

const LazyNavbar1 = lazy(() => import('./Navbar1'));

const Navbar1 = props => (
  <Suspense fallback={null}>
    <LazyNavbar1 {...props} />
  </Suspense>
);

export default Navbar1;
