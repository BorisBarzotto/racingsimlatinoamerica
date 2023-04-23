import { NextPage, GetStaticProps } from 'next'
import { ITable } from '@/interfaces/dtm';
import { HistoricalTable } from '@/components/HistoricalTable';
import { getDtmHistorical } from '@/database/dtm';
import { createSummary } from "@/helpers/createSummary";
import { getAllPilots } from '@/database/pilotos';
import Head from 'next/head';
import { pilotCircuitsWins } from '@/helpers/pilotCircuitsWins';
import { IPiloto, IPilotoWins } from '@/interfaces/piloto';

interface HomePageProps {
  summary: ITable[];
  pilotWins: IPilotoWins[];
  pilotos: IPiloto[];
}

const HomePage: NextPage<HomePageProps> = ({ summary, pilotWins, pilotos }) => {

  return (
    <>
      <Head>
        <title>Sim Racing Latinoamerica</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <HistoricalTable dtm={summary} pilotWins={pilotWins} pilotos={pilotos}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const dtm = await getDtmHistorical();
  const pilotos = await getAllPilots() || [];

  const summary = createSummary(dtm!, pilotos);
  const pilotWins = pilotCircuitsWins(dtm!, pilotos);

  return {
    props: {
      summary,
      pilotWins,
      pilotos
    }
  }
}

export default HomePage;


