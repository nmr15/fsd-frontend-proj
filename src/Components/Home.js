import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../img/banner-img-2.jpg'
import featured from '../prod.json'

const Home = () => 
{
  const feats = featured.filter((feat) => feat.id == 1 || feat.id == 2 || feat.id == 3 || feat.id == 4);

  return (
    <>
      <main>
        <section className="section__banner">
          <div className="banner__img text-center my-5">
            <img className="img-fluid" src={banner} alt="guitar-banner" />
              <div className="banner__btn">
              <Link className="btn bg-main-red btn-lg" to="products">View Products</Link>
              </div>
          </div>
        </section>

        <section className="section__info ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 rounded bg-main-red py-3">
                <h3>Best prices & offers</h3>
                <p>Curabitur at sagittis urna</p>
              </div>
              <div className="col-lg-3 rounded offset-lg-1 bg-main-red py-3" >
                <h3>Free delivery</h3>
                <p>Proin dictum egestas</p>
              </div>
              <div className="col-lg-3 rounded offset-lg-1 bg-main-red py-3">
                <h3>Easy returns</h3>
                <p>Nullam non malesuada</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__featured my-5">
          <div className="container">
            <h1>Featured Products</h1>
            <div className="row">
              
                {feats.map((feat) =>
                {
                  return(
                    <div className="col-lg-3">
                    <div className="card" key={feat.id}>
                      <div className="card-body">
                        <div className="text-center">
                          <a href="#">
                            <img className="mb-3 img-fluid of" src={feat.img} alt="" />
                          </a>
                        </div>
                        <h2 className="fs-6">{feat.name}</h2>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span>${feat.price}</span>
                          </div>
                          <div>
                            <a href="#" className="btn bg-main-red">Add</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  );
                })}
                {/* <div class="card">
                  <div class="card-body">
                    <div class="text-center">
                      <a href="#">
                        <img class="mb-3 img-fluid of" src="img/guitar-1.jpg" alt="" />
                      </a>
                    </div>
                    <h2 class="fs-6">Squier Sonic Stratocaster</h2>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span>$199.99</span>
                      </div>
                      <div>
                        <a href="#" class="btn bg-main-red">Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center">
                      <a href="#">
                        <img class="mb-3 img-fluid of" src="img/guitar-2.jpg" alt="" />
                      </a>
                    </div>
                    <h2 class="fs-6">Paramount Jazzmaster</h2>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span>$449.99</span>
                      </div>
                      <div>
                        <a href="#" class="btn bg-main-red">Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center">
                      <a href="#">
                        <img class="mb-3 img-fluid" src="img/guitar-3.jpg" alt="" />
                      </a>
                    </div>
                    <h2 class="fs-6">Affinity Series Telecaster</h2>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span>$249.99</span>
                      </div>
                      <div>
                        <a href="#" class="btn bg-main-red">Add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center">
                      <a href="#">
                        <img class="mb-3 img-fluid" src="img/guitar-4.jpg" alt="" />
                      </a>
                    </div>
                    <h2 class="fs-6">Squier Sonic Mustang</h2>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span>$199.99</span>
                      </div>
                      <div>
                        <a href="#" class="btn bg-main-red">Add</a>
                      </div>
                    </div>
                  </div>
                </div> 
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home