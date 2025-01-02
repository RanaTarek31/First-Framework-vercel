import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import './Portfolio.css'
import Modal from 'react-bootstrap/Modal';


const portfolioItems = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    image: img1,
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    image: img2,
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3',
    image: img3,
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description of Project 4',
    image: img1,
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Description of Project 5',
    image: img2,
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Description of Project 6',
    image: img3,
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Portfolio</h1>
      <div className="row">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div
              className="card hover-effect"
              onClick={() => handleImageClick(item.image)}
            >
              <img
                src={item.image}
                className="card-img-top img-fluid"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal to display the selected image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>
    </div>
    
  );
};

export default Portfolio;