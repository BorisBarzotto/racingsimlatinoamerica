import { FunctionComponent, MouseEvent, useState } from "react";
import Image from "next/image"
import { ITable } from "@/interfaces/dtm";
import { Divider, Table, Grid, Typography } from "antd";
import { ColumnsType } from 'antd/lib/table'
import localFont from "next/font/local"
import { PilotInfo } from "./PilotInfo";
import { IPiloto, IPilotoWins } from "@/interfaces/piloto";

const myFont = localFont({ src: '../public/Formula1-Regular.otf' })

interface HistoricalTableProps {
  dtm: ITable[];
  pilotWins: IPilotoWins[];
  pilotos: IPiloto[];
}

export const HistoricalTable: FunctionComponent<HistoricalTableProps> = ({ dtm, pilotWins, pilotos }) => {

  const screens = Grid.useBreakpoint()
  const [open, setOpen] = useState(false);
  const [pilot, setPilot ] = useState<IPilotoWins>({ _id: 1000,
    piloto: '',
    pais: '',
    victorias: ['Todavia sin victorias...']});

  const showDrawer = (text: string) => {
    let found = pilotWins.find(x => x.piloto === text);
    if (found) {
      setPilot(found)
    }
    else(setPilot(    
      { _id: 1000,
        piloto: text,
        pais: pilotos.find(x => x.piloto === text)?.pais ?? '',
        victorias: ['Todavia sin victorias...']}))
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns: ColumnsType<ITable> = [
    {
      title: 'Piloto',
      dataIndex: 'piloto',
      key: 'piloto',
      align: "left",

      render: ((text) =>
        <Typography onClick={()=>showDrawer(text)} className={myFont.className} style={!screens.sm ? { fontSize:'0.7rem', fontWeight: 300, cursor:'pointer' }:{ fontWeight: 300, cursor:'pointer' }}>{text}</Typography>
      )
    },
    {
      title: 'Pais',
      dataIndex: 'pais',
      key: 'pais',
      align: "center",
      render: ((text) =>
        <Image src={`/flag/${text}.jpg`} width={34} height={20} alt={text} />
      )
    },
    {
      title: !screens.md ? '🏆' : 'Primero',
      dataIndex: 'primero',
      key: 'primero',
      sorter: !screens.sm ? false : (a: { primero: number; }, b: { primero: number; }) => a.primero - b.primero,
      align: "center",
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: !screens.md ? '🥈' : 'Segundo',
      dataIndex: 'segundo',
      key: 'segundo',
      sorter: !screens.sm ? false : (a: { segundo: number; }, b: { segundo: number; }) => a.segundo - b.segundo,
      align: "center",
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
    {
      title: !screens.md ? '🥉' : 'Tercero',
      dataIndex: 'tercero',
      key: 'tercero',
      sorter: !screens.sm ? false : (a: { tercero: number; }, b: { tercero: number; }) => a.tercero - b.tercero,
      align: "center",
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
      responsive: ['md'],
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
      render: ((text) =>
        <Typography className={myFont.className} style={{ fontWeight: 400 }}>{text}</Typography>
      )
    },
  ];


  return (
    <>
    <div style={{zIndex:-1, position:'fixed', width:'100vw', height:'100vh', top:0,left:0,right:0,bottom:0}}>
      <Image src={"/fondo.jpg"} alt={"Circuit background"} fill style={{objectFit:"cover"}} />
    </div>
    <div style={!screens.sm ? { padding: '0.2em', marginInline:"auto", boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" } : { maxWidth: 720, padding: '3em',marginInline:"auto", boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }}>
      <Table
        title={() => (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', padding: "0.5em 0em 0.5em 0.5em" }}>
              <Image src="/srl-logo.png" width={80} height={80} alt={"logo simracinglatinoamerica"} />
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
    <PilotInfo open={open} onClose={onClose} pilot={pilot}  />
    </>
  )
}


