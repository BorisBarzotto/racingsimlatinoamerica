import { NextPage, GetStaticProps } from 'next'
import { ITable } from '@/interfaces/dtm';
import { HistoricalTable } from '@/components/HistoricalTable';
import { getDtmHistorical } from '@/database/dtm';
import { createSummary } from "@/helpers/createSummary";

import styles from '@/styles/Home.module.css'

interface HomePageProps {
  summary: ITable[]
}

const HomePage:NextPage<HomePageProps> = ({summary}) => {

  return (
    <>
      <HistoricalTable dtm={summary}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const dtm = await getDtmHistorical();
  
  const summary = createSummary(dtm!)

  return {
    props: {
      summary
    }
  }
}

export default HomePage;


