import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/book.jpg';
import { Link } from 'react-router-dom';
import Library from '../Library/Library';
import Faq from '../Faqs/Faqs';
import TestimonialCarousel from '../Testimonial/TestimonialCarousel';
import backgroundImage from "../../assets/img/inclinedbook.jpg";
import Footer from "../Home/Home";


const Home = () => {

  

  return (
    <div className="Home">
        <header className="HeroBanner">
          <h1>Welcome to My Website</h1>
          <p>This is a simple example of a hero banner using Bootstrap with MERN stack.</p>
          <div className="ButtonContainer">
            <button className="Button">Learn More</button>
            <button className="Button">Learn More</button>
          </div>
        </header>
      
     
    
    <Library />

    <section className= "py-5">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </section>
    <TestimonialCarousel />

    <section id='faqSection' className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6">
              <Faq question="Question 1" answer="Answer 1" />
              <Faq question="Question 3" answer="Answer 3" />
            </div>
            <div className="col-md-6">
              <Faq question="Question 2" answer="Answer 2" />
              <Faq question="Question 4" answer="Answer 4" />
              <Faq question="Question 5" answer="Answer 5" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;