import loadable from '@loadable/component'

/**
 * @description
 * `modal` 모달 컴포넌트
 */

const modal = {
	/** sample modal */
	Simple: loadable(() => import('@components/modal/SimpleModal')),

	/** useAlert */
	AlertModal: loadable(() => import('@components/modal/AlertModal')),
}

export default modal
