import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonialData = [
  {
      imageSrc: "images/resource/client1.jpg",
      altText: "Client 1",
      title: "It’s helped me so much.",
      text: "Raah NGO! charities provided the jump start we needed to expand our efforts and train more volunteers.",
      author: "Jashiben Hadiyal",
  },
  {
      imageSrc: "images/resource/client2.jpg",
      altText: "Client 2",
      title: "Thank you for support.",
      text: "I really liked how nice everyone was and how well the Community in Action team adapted given the different situations throughout our stay.",
      author: "Meetbhai Shah",
  },
  {
      imageSrc: "images/resource/client3.jpg",
      altText: "Client 3",
      title: "Positive experience.",
      text: "The children were very friendly and cheerful. The first day they came and participated immediately in the activities.",
      author: "Manoramaben Jogi",
  }
];

function Testimonial() {
  return (
    <section className="testimonial-section-four">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h1>Why people love us</h1>
          <div className="text">Please read below to see what a few of our charity partners have to say about us.</div>
        </div>
        <div className="row">
          <OwlCarousel className="three-item-carousel owl-theme owl-carousel owl-nav-none owl-dot-style-one" items={3} loop margin={10} autoplay>
          {
            testimonialData.map(
              (a, i) => (
                        <TestimonialData key={i} img={a.imageSrc} title={a.title} text={a.text} author={a.author} designation={a.designation} company={a.company} />
              )
            )
          }
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

function TestimonialData(props) {
  return(
    <>
    <div className="testimonial-block-four">
      <div className="inner-box">
        <div className="image"><img src={props.img} style={{ height: '100px', width: '95px' }} alt="" /></div>
        <h4>{props.title}</h4>
        <div className="text">{props.text}</div>
        <div className="author-title">{props.author}</div>
        <div className="designation">{props.designation} <a href="#">{props.company}</a></div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
