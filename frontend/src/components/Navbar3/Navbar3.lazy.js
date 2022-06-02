import React, { lazy, Suspense } from 'react';

const LazyNavbar3 = lazy(() => import('./Navbar3'));

const Navbar3 = props => (
  <Suspense fallback={null}>
    <LazyNavbar3 {...props} />
  </Suspense>
);

export default Navbar3;
