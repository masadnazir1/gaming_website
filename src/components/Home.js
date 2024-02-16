// HomePage.js
import React from 'react';
import { Carousel, Container, Button,Row, Col, Card } from 'react-bootstrap';
import './styles.css';
import './responsive.css';



const players = [
  { id: 1, name: "John Doe", score: 120, profilePic: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png" },
  { id: 2, name: "Jane Smith", score: 150, profilePic: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png" },
  { id: 3, name: "Alice Johnson", score: 180, profilePic: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png" },
  { id: 4, name: "Alice Johnson", score: 180, profilePic: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png" },
  // Add more player data as needed
];






const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel fade pause="hover" interval={2000}>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://images.vexels.com/content/199702/preview/legendary-gamers-web-slider-design-46659e.png"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Welcome to Gaming Portal</h3>
            <p>Explore the latest games and have fun!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slides */}
      </Carousel>






      <Container className="categories mt-5">
        <h2>Categories</h2>
        <div className="category-boxes">
          {/* Category box with image and text */}

          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>

          

          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>






          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>






          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>

          





          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>




          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>



          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>



          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>



          <div className='p-box-cate'>
          <div className="category-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Category" />
            <span>Racing</span>
          </div>
          </div>



       







          {/* Add more category boxes for other categories */}
        </div>
      </Container>












      <Container className="latest-games mt-5">
        <h2>Latest Games</h2>


        <div className="game-boxes">
          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>



          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>
          {/* Add more game boxes for other games */}
        </div>
      </Container>


      <Container className="latest-games mt-5">
        <h2>For you</h2>


        <div className="game-boxes">
          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>



          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          
          </div>
          {/* Add more game boxes for other games */}
        </div>
      </Container>













      <Container className="latest-games mt-5">
        <h2>Latest Games</h2>


        <div className="game-boxes">
          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>



          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Play</Button>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' />
          </div>
          {/* Add more game boxes for other games */}
        </div>
      </Container>


      <Container className="latest-games mt-5">
        <h2>Downloadable</h2>


        <div className="game-boxes">


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Download</Button>
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' /> */}
          </div>


          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Download</Button>
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' /> */}
          </div>





          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Download</Button>
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' /> */}
          </div>




          
          <div className="game-box">
            <img src="https://m.media-amazon.com/images/I/81fvU15s2nL.png" alt="Game" />
            <Button variant="primary" className='play-btn'>Download</Button>
            {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-heart-56-76703.png" alt="favorites" className='img-fav' /> */}
          </div>





          
        
         
          {/* Add more game boxes for other games */}
        </div>
      </Container>










      
    


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







  <Container className="scoreboard mt-5">
       
    
      </Container>










    </div>
  );
}

export default HomePage;
