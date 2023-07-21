/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #object-keys

  ### Question

  Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

  For example

  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```

  > View on GitHub: https://tsch.js.org/527
*/

/* _____________ Your Code Here _____________ */

// SELF DONE
// why can't use intersection
// https://github.com/type-challenges/type-challenges/issues/9115#issuecomment-1109465605
type AppendToObject<T, U extends string, V> = { 
  [K in keyof T | U] : K extends keyof T ? T[K] : V
} 

type AppendToObjectIntersection<T, U extends string, V> = { 
  [K in U]: V
} & T

type fn1 = (arg: AppendToObject<{key: 'cat', value: 'green'}, 'home', boolean>) => void
type fn2 = (arg: AppendToObjectIntersection<{key: 'cat', value: 'green'}, 'home', boolean>) => void
type fn3 = (arg: {key: 'cat', value: 'green', home: boolean}) => void

type Equall<X, Y> = X extends Y ? true : never

type re = [Equall<fn1, fn2>, Equall<fn1, fn3>, Equall<fn2, fn3>]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  moon: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'moon', false | undefined>, testExpect3>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/527/answer
  > View solutions: https://tsch.js.org/527/solutions
  > More Challenges: https://tsch.js.org
*/
