/**
 * @description
 * 이 곳에서 작성된 타입들은 전역 타입 이므로 import 하여 사용하지 말고 전역 변수 처럼 사용하시면 됩니다.
 * `declare global` 내에 선언된 타입 또는 인터페이스는 `export` 할 필요가 없습니다.
 *
 * @example
 *
 * declare global {
 *      // interface는 overriding이 가능, extends 없이 합쳐서 사용하는 것이 가능
 *      interface Window {
 *          foo: 'foo'
 *      }
 *
 * }
 */

// jspdf-autotable
// declare module 'jspdf-autotable' {
// 	const _default: any
// 	export default _default
// }

declare module 'faker' {
	const _default: any
	export default _default
}

/**
 * @description
 * form 관련 타입정의
 */
type FormItem = {
	label: string
	value: string
}
