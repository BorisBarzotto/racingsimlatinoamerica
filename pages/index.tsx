import { NextPage, GetStaticProps } from 'next'
import { ITable } from '@/interfaces/dtm';
import { HistoricalTable } from '@/components/HistoricalTable';
import { getDtmHistorical } from '@/database/dtm';
import { createSummary } from "@/helpers/createSummary";
import { getAllPilots } from '@/database/pilotos';

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
  const pilotos = await getAllPilots() || [];
  
  const summary = createSummary(dtm!, pilotos)

  return {
    props: {
      summary
    }
  }
}

export default HomePage;


