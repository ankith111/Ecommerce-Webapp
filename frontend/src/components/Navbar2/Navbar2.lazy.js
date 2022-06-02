import React, { lazy, Suspense } from 'react';

const LazyNavbar2 = lazy(() => import('./Navbar2'));

const Navbar2 = props => (
  <Suspense fallback={null}>
    <LazyNavbar2 {...props} />
  </Suspense>
);

export default Navbar2;
