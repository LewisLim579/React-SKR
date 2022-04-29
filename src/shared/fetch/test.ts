import http from '@fetch/http'
import { AxiosResponse } from 'axios'

declare global {
	namespace SetTest {
		/**
		 * @description
		 * setTest의 요청 parameter
		 */
		interface Params {
			page: number
			size: number
		}

		/**
		 * @description
		 * setTest의 응답 결과
		 */
		type Res = AxiosResponse<{
			data: {
				airline: {
					country: string
					established: string
					head_quaters: string
					id: string
					logo: string
					name: string
					slogan: string
					website: string
				}[]
				name: string
				trips: number
				__v: number
				_id: string
			}[]
			totalPages: number
			totalPassengers: number
		}>
	}
}

/**
 *
 * @param { SetLoginParmas } params
 * @return {Promise<AxiosResponse<SetLogin.Res, any>>}
 */
export async function setTest(params: SetTest.Params) {
	// 로그인 API가 존재한다면 아래 처럼 하는 것이 맞지만...
	const res = await http.get<SetTest.Params, SetTest.Res>('/v1/passenger', { params })
	const data = res.data.data.map((item) => {
		item.airline[0].id = item._id
		return item.airline[0]
	})
	return {
		list: data,
		rowCount: res.data.totalPassengers,
	}
}
