import http from '@fetch/http'
import { AxiosResponse } from 'axios'

export type GetUsersParams = undefined

type GetUsersRes = { [key: string]: string | number }[]

interface GetUsersFetch {
	(params?: GetUsersParams): Promise<AxiosResponse<GetUsersRes>>
}

export const getUsers: GetUsersFetch = async (params?: GetUsersParams) => {
	return await http.get<GetUsersRes>('/api/userList')
}
