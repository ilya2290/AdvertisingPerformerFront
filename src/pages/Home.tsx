import React from 'react';
import '../styles/HomePage/Columns/Columns.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import views_icon from '../images/views.ico';
import visits_icon from '../images/visits.ico';
import expenses_icon from '../images/expenses.ico';


const Home: React.FC = () => {
  return (
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Avertising metrics with their definitions </h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={views_icon} alt="Views Icon" width="48" height="48"/>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Views</h3>
              <p>
              Views refer to the number of times an ad has been displayed or viewed by users, regardless of whether it was clicked or engaged with.
              Views indicate the reach of an advertisement, showing how many times it has been seen by users on a webpage, social media platform, or any digital medium where it is displayed.
              </p>
            </div>
          </div>

          <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src={visits_icon} alt="Views Icon" width="48" height="48"/>
          </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Visits</h3>
              <p>
              Visits represent the number of times users land on a website or specific page through a particular ad or campaign.
              Visits measure the traffic generated by an ad, indicating how many users navigate to a website after seeing or clicking on the ad.
              It helps assess the effectiveness of driving users to the intended destination.
              </p>
            </div>
          </div>

          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img src={expenses_icon} alt="Views Icon" width="48" height="48"/>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Expenses</h3>
              <p>
              Expenses, also referred to as costs or expenditures, denote the amount of money spent on advertising campaigns or activities.
              Expenses encompass the financial resources allocated to advertising efforts, including ad placements, creative development, media buying, and any associated costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home;
