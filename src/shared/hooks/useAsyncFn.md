# `useAsyncFn`

상태를 반환하는 react hooks와 `async` 함수 또는 `Promise`를 반환하는 함수에 대한 callback입니다. 상태는 `useAsync`와 같은 형태입니다.

## Usage

```jsx
import { useAsyncFn } from 'react-use'

const Demo = ({ url }) => {
	const [state, doFetch] = useAsyncFn(async () => {
		const response = await fetch(url)
		const result = await response.text()
		return result
	}, [url])

	return (
		<div>
			{state.loading ? (
				<div>Loading...</div>
			) : state.error ? (
				<div>Error: {state.error.message}</div>
			) : (
				<div>Value: {state.value}</div>
			)}
			<button onClick={() => doFetch()}>Start loading</button>
		</div>
	)
}
```

## Reference

```ts
/**
 * @type {Result} Promise에서 resolve되는 자료형태
 * @type
*/
useAsyncFn<Result, Args>(fn, deps?: any[], initialState?: AsyncState<Result>);
```
