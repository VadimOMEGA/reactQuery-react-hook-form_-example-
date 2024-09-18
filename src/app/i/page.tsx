import { Metadata, NextPage } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Heading from '@/components/ui/Heading'
import Statistics from './Statistics'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE
}

const DashboardPage: NextPage = () => {
  return <div>
    <Heading title='Statistics'/>
    <Statistics />
  </div>
}

export default DashboardPage