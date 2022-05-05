/* eslint-disable react-hooks/exhaustive-deps */
import React, { EffectCallback, DependencyList } from 'react'

type Destructor = ReturnType<EffectCallback>

type useAsyncEffectHook = {
  (
    effect: () => Promise<void>,
    destructor?: Destructor,
    deps?: DependencyList
  ): void
  (effect: () => Promise<void>, deps?: DependencyList): void
}

/** This hook will allow use 'async/await' syntax inside a useEffect hook */
export const useAsyncEffect: useAsyncEffectHook = (
  effect: () => Promise<void>,
  destructor?: Destructor | DependencyList,
  deps?: DependencyList
) => {
  const willDestroy = typeof destructor === 'function'

  const dependencyList = willDestroy ? deps : (destructor as DependencyList)

  const handlerRef = React.useRef(effect)

  //* FUNCTIONS
  React.useLayoutEffect(() => {
    handlerRef.current = effect
  })

  React.useEffect(() => {
    handlerRef.current()

    return () => {
      if (willDestroy) destructor()
    }
  }, dependencyList)
}
