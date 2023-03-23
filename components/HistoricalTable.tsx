import { FunctionComponent } from "react";
import { ITable } from "@/interfaces/dtm";
import { Divider, Table } from "antd";
import { ColumnsType } from 'antd/lib/table'


interface HistoricalTableProps {
  dtm: ITable[];
}

export const HistoricalTable: FunctionComponent<HistoricalTableProps> = ({ dtm }) => {

  const columns: ColumnsType<ITable> = [
    {
      title: 'Piloto',
      dataIndex: 'piloto',
      key: 'piloto',
      align: "left",
      width:"28%"
    },
    {
      title: 'Primero',
      dataIndex: 'primero',
      key: 'primero',
      sorter: (a: { primero: number; }, b: { primero: number; }) => a.primero - b.primero,
      align: "center",
      width: "12%"
    },
    {
      title: 'Segundo',
      dataIndex: 'segundo',
      key: 'segundo',
      sorter: (a: { segundo: number; }, b: { segundo: number; }) => a.segundo - b.segundo,
      align: "center",
      width: "12%"
    },
    {
      title: 'Tercero',
      dataIndex: 'tercero',
      key: 'tercero',
      sorter: (a: { tercero: number; }, b: { tercero: number; }) => a.tercero - b.tercero,
      align: "center",
      width: "12%"
    },
    {
      title: 'Podios',
      dataIndex: 'podios',
      key: 'podios',
      sorter: (a: { podios: number; }, b: { podios: number; }) => a.podios - b.podios,
      align: "center",
      width: "12%"
    },
    {
      title: 'Poles',
      dataIndex: 'pp',
      key: 'pp',
      sorter: (a: { pp: number; }, b: { pp: number; }) => a.pp - b.pp,
      align: "center",
      width: "12%"
    },
    {
      title: 'VR',
      dataIndex: 'vr',
      key: 'vr',
      sorter: (a: { vr: number; }, b: { vr: number; }) => a.vr - b.vr,
      align: "center",
      width: "12%"
    },
  ];


  return (
    <div style={{ width: 700, margin: '3em auto', boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }}>
      <Table
        title={() => ( 
          <>       
          <h1>DTM</h1>
          <Divider style={{backgroundColor:"#ddfe81", margin:0}}/>
          <p>Record Historico de Campeonatos 2020-2023</p>
          </> 
        )}
        dataSource={dtm}
        columns={columns}
        pagination={false}
        size={"small"}
        />
    </div>
  )
}