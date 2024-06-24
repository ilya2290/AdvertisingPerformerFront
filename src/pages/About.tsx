import React from 'react';
import umbrella_icon from '../images/umbrella_corp.jpg';

const About: React.FC = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h2 className="pb-2 border-bottom">About us </h2>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Welcome to SuperCompany, your comprehensive platform for tracking advertising metrics.
        At SuperCompany, we specialize in providing detailed insights into key advertising performance indicators such as views, visits, and expenses.
        Our user-friendly interface allows you to monitor and analyze your advertising campaigns with ease, empowering you to make informed decisions to optimize your marketing strategies.
        Whether you're a small business owner, a digital marketer, or an advertising agency, SuperCompany offers the tools and analytics you need to measure the effectiveness of your ad spend.
        Dive deep into your campaign data, visualize trends, and uncover actionable insights that drive growth and maximize your return on investment (ROI).
        Join thousands of users who rely on SuperCompany to streamline their advertising analytics and elevate their marketing efforts.
        Start harnessing the power of data-driven decisions today with SuperCompany</p>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <div className="container px-5">
        <img src={umbrella_icon} alt="main Icon" width="200" height="200"/>
        </div>
      </div>
    </div>
  );
};

export default About;
