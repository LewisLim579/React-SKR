import http from '@fetch/http'

declare global {
	namespace SetLogin {
		/**
		 * @description
		 * setLogin의 요청 parameter
		 */
		interface Params {
			username: string
			password: string
		}

		/**
		 * @description
		 * getCount의 응답 결과
		 */
		interface Res {
			accessToken: string
			user: {
				email: string
				name: string
				gender: string
				created: string
			}
		}
	}
}

/**
 *
 * @param { SetLoginParmas } params
 * @return Promise<AxiosResponse<SetLogin.Res, any>>
 */
export function setLogin(params: SetLogin.Params) {
	// 로그인 API가 존재한다면 아래 처럼 하는 것이 맞지만...
	return http.post<SetLogin.Res>('/auth/login', params)
}
