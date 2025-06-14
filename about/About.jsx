import React from "react";
import "./About.css";



function About(){
  return(<>



<div className="about-main">

<div className="about-image"><h1>Who Are We ?</h1></div>

{/* --------------------------------------------- */}
  <section class="about-section">
    <div class="about-content">
      <h1>About us</h1>
      <h3>Passionate experts solving global food challenges with innovative tech</h3>
      <p>
        AgriPilot.ai leads the global agriculture sector towards a sustainable farming future. We empower growers to make data-driven decisions, enhancing productivity and profitability while conserving vital resources such as water, energy, and land.
      </p>
      <p>
        We collaborate closely with farmers, agronomists, and industry experts to comprehend the unique challenges they encounter. Through this partnership, we co-create solutions and deliver cutting-edge technologies tailored to address their specific needs, assisting them in achieving their goals effectively.
      </p>
    </div>
    <div class="about1-image">
      <img src="/src/components/about/tractor.webp" alt=""/>
    </div>
  </section>



{/* ------------------------------------- */}
<section class="vm-section">
    <div class="vm-box">
      <img src="/src/components/about/vision.png" alt="Vision Icon" class="vm-icon"/>
      <h3>Vision</h3>
      <p>
        We envision a farm of the future where AI-driven solutions optimize farming practices. At the forefront of agricultural innovation, we push boundaries and provide intelligent solutions with AgriPilot.ai to achieve productivity, profitability, and sustainability.
      </p>
    </div>
    <div class="vm-box">
      <img src="/src/components/about/mission.png" alt="Mission Icon" class="vm-icon"/>
      <h3>Mission</h3>
      <p>
        Empower farmers to make data-driven decisions, optimize resource utilization, and enhance yields. Together, we are committed to driving positive change in the agricultural industry, promoting environmental stewardship, reducing suicide rates, and transforming the agricultural landscape.
      </p>
    </div>
  </section>



{/* --------------------------------------------------- */}
  <section class="team-header">
    <h1>Meet Our Dynamic Team!</h1>
    <h3>Ignite excellence with industry professionals</h3>
  </section>


{/* --------------------------------------------------------- */}
  <section class="expert-section">
    <div class="expert-card">
      <div class="expert-text">
        <h2>2+</h2>
        <h3>Agriculture Experts</h3>
        <p>
          Our team of seasoned agriculture professionals brings extensive knowledge and experience to the table. We provide expert guidance and solutions to help farmers and agricultural businesses thrive. With our team by your side, you can harness the power of expertise and elevate your agricultural endeavors.
        </p>
      </div>
      <div class="expert-image">
      <img src="/src/components/about/agri-1.svg" alt="" />
      </div>
    </div>

    <div class="expert-card">
      <div class="expert-text">
        <h2>2+</h2>
        <h3>Agriculture Economists</h3>
        <p>
          Our skilled agriculture economists excel in analyzing market trends, assessing risks, and evaluating financial performance. They provide valuable insights and strategies to optimize agricultural businesses.
        </p>
      </div>
      <div class="expert-image">
    <img src="/src/components/about/agri-2.svg" alt="" />
      </div>
    </div>
  </section>



{/* --------------------------------------------------------- */}
  <section class="expert-section">
    <div class="expert-card">
        <div class="expert-image">
      <img src="/src/components/about/agri-3.svg" alt="" />
      </div>
      <div class="expert-text">
        <h2>3+</h2>
        <h3>Sustainability Experts</h3>
        <p>
         Our experts in sustainable practices understand environmental challenges and are dedicated to guiding individuals, businesses, and communities toward sustainable solutions. Together, we can create a more sustainable world for future generations.
        </p>
      </div>
    </div>

    <div class="expert-card">
        <div class="expert-image">
      <img src="/src/components/about/agri-4.svg" alt="" />
      </div>
      <div class="expert-text">
        <h2>10+</h2>
        <h3>Data Scientists</h3>
        <p>
         Our experienced data scientists are experts in uncovering insights from complex agricultural data. Their expertise in statistical analysis, machine learning, and data visualization drives data-informed decision-making in the agricultural industry.
        </p>
      </div>
    </div>
  </section>

{/* ----------------------------------------------------------------------- */}
  <section class="founder-card">
    <div class="founder-left">
      <img src="/src/components/about/Prashant-Mishra.svg" alt="Founder - Mr. Prashant Mishra"/>
      <h3>Mr. Prashant Mishra</h3>
      <p><em>founder of AgriPilot.ai</em></p>
    </div>


    <div class="divider"></div>

    <div class="founder-right">
      <h2>Founder</h2>
      <p>Mr. Prashant Mishra, the founder of AgriPilot.ai, hails from the Vidarbha region, where crop production potential is high, but the region has been plagued by challenges such as unfavourable weather conditions and high investment requirements, leading to an approx. 35% distressing suicide rate among farmers.</p>

      <p>To address this, he established AgriPilot.ai, an AI-driven Agri-technology platform with the aim to revolutionize farming using AI/ML, IoT, data-driven approaches, and advanced farming techniques.</p>

      <p>Mr. Mishra’s vision is to provide farmers with cutting-edge technologies, to enable them to make informed decisions, mitigate risks, and maximize their crop production, while reducing their financial burden and improving their well-being.</p>
    </div>
  </section>



{/* -------------------------------------------------------------------- */}
  <section class="offerings">
    <h1>AgriPilot.ai’s Innovative Offerings</h1>
    
    <div class="grid-container">
      <div class="item">
        <img src="/src/components/about/internet-technology.avif" alt="Remote Monitoring"/>
        <p><strong>Remote Monitoring<br/>System</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/time.png" alt="Real-Time Tracking"/>
        <p><strong>Real-Time Tracking<br/>Mechanism</strong></p>
      </div>
      <div class="item">
        <img src=" /src/components/about/house.png" alt="Smart Irrigation"/>
        <p><strong>Smart Irrigation<br/>Management</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/computr-2.png" alt="Knowledge Chart"/>
        <p><strong>Data-Driven<br/>Knowledge Chart</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/markting.png" alt="Decision Dashboard"/>
        <p><strong>Decision Making<br/>Dashboards</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/pen-copy.png" alt="Soil Testing"/>
        <p><strong>Soil Testing<br/>Reports</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/message.png" alt="AI Chat"/>
        <p><strong>Generative AI Live<br/>Chat</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/money.png" alt="Sustainability Calculator"/>
        <p><strong>Sustainability <br /> Calculator</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/tractor-farm.svg" alt="Post Harvest"/>
        <p><strong>Post Harvest<br/>Mechanism</strong></p>
      </div>
      <div class="item">
        <img src="/src/components/about/chein-2.png" alt="Supply Chain"/>
        <p><strong>Supply Chain<br/>Optimization</strong></p>
      </div>
   
    </div>
  </section>









</div>
  </>)
}

export default About;
