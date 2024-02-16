import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = ({ players }) => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <Row>
        {players.map(player => (
          <Col key={player.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="player-card">
              <Card.Img variant="top" src={player.profilePic} className="card-img-top" />
              <Card.Body>
                <Card.Title className="text-center">{player.name}</Card.Title>
                <Card.Text className="text-center">Score: {player.score}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
