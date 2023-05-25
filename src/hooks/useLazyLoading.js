import React, { Suspense, lazy } from "react";

const useLazyLoading = (component) => {
  let isArray = Array.isArray(component);
  let componentToLoad = isArray ? component : [component];
  let LazyComponents = componentToLoad.map((component) => lazy(component));

  let LazyLoadedComponents = LazyComponents.map((LazyComponent, index) => {
    let Component = (props) => (
      <Suspense fallback={<p>Loading....</p>}>
        <LazyComponent {...props} />
      </Suspense>
    );
    Component.displayName = `LazyLoadedComponent${index}`;
    return Component;
  });
  return isArray ? LazyLoadedComponents : LazyLoadedComponents[0];
};

export default useLazyLoading;
