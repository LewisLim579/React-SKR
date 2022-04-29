import { Helmet } from 'react-helmet-async'

const NotFoundPage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Not Found Page</title>
			</Helmet>
			<h1>404: 존재하지 않는 페이지입니다!</h1>
		</>
	)
}

export default NotFoundPage
