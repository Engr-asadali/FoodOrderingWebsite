import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">

        <div className="about_left">
          <div className="owner-info">
            <img src="./src/assets/owner.png" alt="Owner" className="owner-image" />
            <h3 className="owner-name">Asad Ali Arain</h3>
            <p className="owner-title">Owner & Head Chef</p>
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
            <section className="history">
              <h2>Our History</h2>
              <p>
                Founded in 2010, Zaika-e-Khaas has been serving delicious meals for over a decade.
                What started as a small family restaurant has grown into multiple branches across the Sindh Province,
                known for its authentic flavors and warm hospitality. At Zaika-e-Khaas, we believe that food is
                more than just a meal—it’s an experience. Our chefs use the finest ingredients and traditional
                recipes to bring you the rich, mouthwatering flavors of Pakistani cuisine.
              </p>
            </section>

            <section className="branches">
              <h2>Our Branches</h2>
              <ul>
                <li>Nawabshah Branch - Since 2010 <span>(101, Sakrand Road, Nawabshah, Pakistan)</span></li>
                <li>Karachi Branch - Since 2015 <span>(Food Street, Burns Road, Karachi, Pakistan)</span></li>
                <li>Hyderabad Branch - Since 2018 <span>(456, Thandi Sarak, Hyderabad, Pakistan)</span></li>
                <li>Sukkur Branch - Since 2020 <span>(789, Main Market, Sukkur, Pakistan)</span></li>
              </ul>
            </section>

            <section className="aim">
              <h2>Our Aim</h2>
              <p>
                At Zaika-e-Khaas, our mission is simple: to serve high-quality, flavorful food at prices
                that everyone can afford. We believe that great food has the power to bring people together,
                creating memorable experiences with every meal. <br /><br />

                <strong>We are committed to:</strong> <br />
                <strong>✔ Quality & Freshness – </strong> Using only the finest ingredients to ensure every dish is delicious and authentic.<br />
                <strong>✔ Affordability – </strong> Offering exceptional meals at reasonable prices so everyone can enjoy our flavors.<br />
                <strong>✔ Excellent Service – </strong> Providing a warm, welcoming environment where every guest feels at home.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About