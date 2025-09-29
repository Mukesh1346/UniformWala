import Image from 'next/image';
import './services.css';
import pic1 from '@/Assets/Images/dress.webp'
import pic3 from '@/Assets/Images/dress1.webp'
import pic2 from '@/Assets/Images/Uniform-Designs.jpg'

const ServicesSection = () => {
  // Sample images for uniform manufacturing (replace with your actual image paths)
  const serviceImages = {
    custom: pic1,
    corporate: pic2, 
    industrial: pic3
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Manufacturing Services</h2>
          <p className="lead">Premium Uniform Solutions for Your Business</p>
        </div>
        
        <div className="row">
          {/* Custom Uniform Design */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="service-content">
                <h3>Custom Uniform Design</h3>
                <p>We create bespoke uniform designs tailored to your brand identity. Our design team works closely with you to develop unique styles that reflect your company's values and professional image.</p>
              </div>
              <div className="service-image">
                <Image src={serviceImages.custom} alt="Custom Uniform Design" />
              </div>
            </div>
          </div>
          
          {/* Corporate Uniform Manufacturing */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="service-content">
                <h3>Corporate Uniform Manufacturing</h3>
                <p>High-quality corporate uniforms for businesses of all sizes. We use premium fabrics and advanced manufacturing techniques to ensure durability, comfort, and professional appearance.</p>
              </div>
              <div className="service-image">
                <Image src={serviceImages.corporate} alt="Corporate Uniform Manufacturing" />
              </div>
            </div>
          </div>
          
          {/* Industrial Workwear Production */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="service-content">
                <h3>Industrial Workwear Production</h3>
                <p>Specialized workwear designed for safety and functionality in industrial environments. Our products meet industry standards while providing maximum comfort and protection for your workforce.</p>
              </div>
              <div className="service-image">
                <Image src={serviceImages.industrial} alt="Industrial Workwear Production" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="view-all-container">
          <a href="/products" className="btn-view-all">
            View All Manufacturing Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;