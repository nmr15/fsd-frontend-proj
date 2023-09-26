import React from 'react'
import products from '../prod.json'

const Products = () => 
{
  return (
    <>
      <main>
        <section class="section__products my-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <div class="card">
                  {/* <!-- <div class="card-body"> --> */}
                    <div class="card-header">
                      Categories
                    </div>
                    <div class="list-group">
                      <a href="#" class="list-group-item list-group-item-action">Electric Guitars</a>
                      <a href="#" class="list-group-item list-group-item-action">Acoustic Guitars</a>
                      <a href="#" class="list-group-item list-group-item-action">Electric Acoustic Guitars</a>
                      <a href="#" class="list-group-item list-group-item-action">Bass Guitars</a>
                      <a href="#" class="list-group-item list-group-item-action">Picks</a>
                      <a href="#" class="list-group-item list-group-item-action">Straps Guitars</a>
                      <a href="#" class="list-group-item list-group-item-action">Strings</a>
                      <a href="#" class="list-group-item list-group-item-action">Amplifiers</a>
                    </div>
                    {/* <!-- </div> --> */}
                </div>
              </div>
              <div class="col-lg-10">
                <div class="row">
                  {products.map((product) =>
                  {
                    return(
                      <div className="col-lg-3 mt-5">
                        <div className="card" key={product.id}>
                          <div className="card-body">
                            <div className="text-center">
                              <a href="#">
                                <img className="mb-3 img-fluid ht-667" src={product.img} alt="" />
                              </a>
                            </div>
                            <h2 className="fs-6">{product.name}</h2>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <span>${product.price}</span>
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
                  {/* <div class="col-lg-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="text-center">
                          <a href="#">
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-1.jpg" alt="">
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
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-2.jpg" alt="">
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
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-3.jpg" alt="">
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
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-4.jpg" alt="">
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
                  </div>
                  <div class="col-lg-3 mt-5">
                    <div class="card">
                      <div class="card-body">
                        <div class="text-center">
                          <a href="#">
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-5.jpg" alt="">
                          </a>
                        </div>
                        <h2 class="fs-6">Monterey Standard</h2>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span>$379.99</span>
                          </div>
                          <div>
                            <a href="#" class="btn bg-main-red">Add</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 mt-5">
                    <div class="card">
                      <div class="card-body">
                        <div class="text-center">
                          <a href="#">
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-6.jpg" alt="">
                          </a>
                        </div>
                        <h2 class="fs-6">FA-125CE Dreadnought</h2>
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
                  <div class="col-lg-3 mt-5">
                    <div class="card">
                      <div class="card-body">
                        <div class="text-center">
                          <a href="#">
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-7.jpg" alt="">
                          </a>
                        </div>
                        <h2 class="fs-6">Newport Player</h2>
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
                  <div class="col-lg-3 mt-5">
                    <div class="card">
                      <div class="card-body">
                        <div class="text-center">
                          <a href="#">
                            <img class="mb-3 img-fluid ht-667" src="img/guitar-8.jpg" alt="">
                          </a>
                        </div>
                        <h2 class="fs-6">Redondo Player</h2>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Products