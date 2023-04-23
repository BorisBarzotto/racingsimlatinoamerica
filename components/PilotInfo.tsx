import { FunctionComponent } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Col, Drawer, Grid, Row, Typography } from "antd";
import type { DrawerProps } from "antd";
import { IPilotoWins } from "@/interfaces/piloto";

const myFont = localFont({ src: '../public/Formula1-Regular.otf' })

interface PilotInfoProps {
  open: boolean;
  onClose: () => void;
  pilot: IPilotoWins;
}

export const PilotInfo: FunctionComponent<PilotInfoProps> = ({
  open,
  onClose,
  pilot,
}) => {
  const screens = Grid.useBreakpoint();

  return (
    <>
      <Drawer
        title="Informacion de Piloto"
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
        style={{ textAlign: "center", background: "#00304f", color: "white" }}
        className={myFont.className}
      >
        <Row
          justify="center"
          gutter={10}
          style={{
                  background: "#fff",
                  marginInline: screens.lg ? "250px":"5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                }
          }
        >
          <Col span={12} style={{}}>
            <div
              style={{ height: 200, position: "relative", bottom: "0" }}
            >
              <Image
                src={`/drivers/${pilot.piloto}.png`}
                alt={"Foto de piloto de simracelatinoamerica"}
                fill
                style={{ objectFit: "contain", bottom:0}}
              />
              <Image
                src={`/flag/${pilot.pais}.jpg`}
                alt={"Pais de piloto de simracelatinoamerica"}
                width={24}
                height={16}
                style={{ position: 'absolute',top:25, right:10}}
              />
            </div>
          </Col>
          <Col span={12} style={{ textAlign: "left", paddingBottom: "20px" }}>
            <Typography.Title level={5} style={{margin:"20px 0px 6px 0px"}} className={myFont.className}>{pilot.piloto}</Typography.Title>
            <Typography.Text style={{marginBlock:"5px", fontSize:"12px", fontWeight:500}}>Carreras Ganadas:</Typography.Text>
            {pilot.victorias.map((circuit) => (
              <Typography.Paragraph key={circuit} style={{marginBottom:"0px", fontSize: screens.lg ? "15px":"10px"}}>{circuit}</Typography.Paragraph>
            ))}
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
