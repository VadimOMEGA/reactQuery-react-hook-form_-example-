import { Metadata, NextPage } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Auth from './Auth'

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

interface Props {}

const AuthPage: NextPage<Props> = ({}) => {
	return <Auth />
}

export default AuthPage
