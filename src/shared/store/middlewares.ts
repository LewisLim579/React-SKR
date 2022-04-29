import { Middleware } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
/**
 * @title custom middleware
 * @example
 *
 * const loggerMiddleware: Middleware = () => (next) => (action) => {
 *      return next(action)
 * }
 */

const loggerMiddleware: Middleware = () => (next) => (action) => {
	return next(action)
}

/**
 * @description
 * 배열에 middlware를 추가
 */
const middlewares = [reduxLogger, loggerMiddleware]

export default middlewares
