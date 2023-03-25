import { FunctionComponent } from "react";
import Image from "next/image"
import { ITable } from "@/interfaces/dtm";
import { Divider, Table, Grid, Typography } from "antd";
import { ColumnsType } from 'antd/lib/table'
import localFont from "next/font/local"

const myFont = localFont({ src: '../public/Formula1-Regular.otf' })

interface HistoricalTableProps {
  dtm: ITable[];
}

export const HistoricalTable: FunctionComponent<HistoricalTableProps> = ({ dtm }) => {

  const screens = Grid.useBreakpoint()

  const columns: ColumnsType<ITable> = [
    {
      title: 'Piloto',
      dataIndex: 'piloto',
      key: 'piloto',
      align: "left",
      width: "35%",
      render: ((text) =>
        <Typography className={myFont.className} style={!screens.sm ? { fontSize:'0.7rem', fontWeight: 300 }:{ fontWeight: 300 }}>{text}</Typography>
      )
    },
    {
      title: 'Pais',
      dataIndex: 'pais',
      key: 'pais',
      align: "center",
      width: "6%",
      render: ((text) =>
        <Image src={`/flag/${text}.jpg`} width={34} height={20} alt={text} />
      )
    },
    {
      title: !screens.sm ? '🏆' : 'Primero',
      dataIndex: 'primero',
      key: 'primero',
      sorter: !screens.sm ? false : (a: { primero: number; }, b: { primero: number; }) => a.primero - b.primero,
      align: "center",
      width: !screens.sm ? "5%" : '11%',
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: !screens.sm ? '🥈' : 'Segundo',
      dataIndex: 'segundo',
      key: 'segundo',
      sorter: !screens.sm ? false : (a: { segundo: number; }, b: { segundo: number; }) => a.segundo - b.segundo,
      align: "center",
      width: !screens.sm ? "5%" : '10%',
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: !screens.sm ? '🥉' : 'Tercero',
      dataIndex: 'tercero',
      key: 'tercero',
      sorter: !screens.sm ? false : (a: { tercero: number; }, b: { tercero: number; }) => a.tercero - b.tercero,
      align: "center",
      width: !screens.sm ? "5%" : '10%',
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: 'Podios',
      dataIndex: 'podios',
      key: 'podios',
      sorter: (a: { podios: number; }, b: { podios: number; }) => a.podios - b.podios,
      align: "center",
      width: !screens.sm ? "5%" : '10%',
      responsive: ['sm'],
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: !screens.sm ? 'PP' : 'Poles',
      dataIndex: 'pp',
      key: 'pp',
      sorter: !screens.sm ? false : (a: { pp: number; }, b: { pp: number; }) => a.pp - b.pp,
      align: "center",
      width: !screens.sm ? "5%" : '10%',
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: 'VR',
      dataIndex: 'vr',
      key: 'vr',
      sorter: !screens.sm ? false : (a: { vr: number; }, b: { vr: number; }) => a.vr - b.vr,
      align: "center",
      width: !screens.sm ? "5%" : '11%',
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
  ];


  return (
    <div style={!screens.sm ? { margin: '3em auto', boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" } : { maxWidth: 720, margin: '3em auto', boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }}>
      <Table
        title={() => (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', padding: "0.5em 0em 0.5em 0.5em" }}>
              <Image style={{ filter: "drop-shadow(2px 2px 5px #262626)" }} src="/srl-logo.png" width={80} height={80} alt={"logo simracinglatinoamerica"} />
              <h1>DTM</h1>
            </div>
            <Divider style={{ backgroundColor: "#ddfe81", margin: 0 }} />
            <Typography className={myFont.className} style={!screens.sm ?{ fontSize:'0.5rem', fontWeight: 600, color: "#ddfe81" }:{ fontWeight: 600, color: "#ddfe81" }}>Record Historico de Campeonatos 2020-2023</Typography>
          </>
        )}
        dataSource={dtm}
        columns={columns}
        pagination={false}
        size={"small"}
        rowKey={(dtm) => dtm.key}
      />
    </div>
  )
}


