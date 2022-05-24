import React from "react";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const App = () => (
  <div className='site-card-wrapper'>
    <Row gutter={16}>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={
            <img
              alt='example'
              src='https://tipsparatuviaje.com/wp-content/uploads/2018/11/venecia-italia.jpg'
            />
          }
        >
          <Meta
            title='Venecia, Italia'
            description='La maraña de islas pobladas de espléndidos monumentos y unidas por bellos puentes sobre los canales, proporciona a la capital del Véneto un encanto que crece con el tiempo.'
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={
            <img
              alt='example'
              src='https://tipsparatuviaje.com/wp-content/uploads/2018/11/nueva-york-ee-uu-1.jpg'
            />
          }
        >
          <Meta
            title='New York City'
            description='Desde el aroma a los frutos secos tostados y el sabor de un sencillo perrito caliente en una fría tarde de invierno hasta la paleta de colores del Parque Central en otoño y la luminosidad del Hudson en verano.'
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={
            <img
              alt='example'
              src='https://tipsparatuviaje.com/wp-content/uploads/2018/11/paris-francia-1.jpg'
            />
          }
        >
          <Meta
            title='París, Francia'
            description='Solo admirar cómo circula el tráfico nocturno por la Avenida de los Campos Elíseos entre el Arco del Triunfo y la Plaza de la Concordia y el Louvre expresa con fidelidad por qué París es llamada la Ciudad Luz.'
          />
        </Card>
      </Col>
    </Row>
    <br></br>
    <Row gutter={16}>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={
            <img
              alt='example'
              src='https://tipsparatuviaje.com/wp-content/uploads/2018/11/sidney-australia.jpg'
            />
          }
        >
          <Meta
            title='Sídney, Australia'
            description='Los visitantes de la mayor ciudad de Australia son artísticamente recibidos por la Casa de la Ópera.'
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={
            <img
              alt='example'
              src='https://tipsparatuviaje.com/wp-content/uploads/2018/11/shanghai-china.jpg'
            />
          }
        >
          <Meta
            title='Shanghái, China'
            description='La ciudad más grande de China simboliza perfectamente la prosperidad capitalista del enorme país comunista.'
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{
            width: 400,
          }}
          cover={
            <img
              alt='example'
              src='https://tipsparatuviaje.com/wp-content/uploads/2018/11/estocolmo-suecia.jpg'
            />
          }
        >
          <Meta title='Estocolmo, Suecia' description='La capital de Suecia ha sido premiada como la “Capital Verde de Europa” en virtud de sus jardines y parques inmaculadamente mantenidos.' />
        </Card>
        <br></br>
      </Col>
    </Row>
  </div>
);

export default App;
