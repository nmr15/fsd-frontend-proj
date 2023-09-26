import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="py-5">
        <div class="container">
          <div class="row">
            <div class="footer__links col-lg-3 d-flex flex-column">
              <h5 class="footer__heading">Links</h5>
              <a href="aboutus.html">About Us</a>
              <a href="products.html">Products</a>
              <a href="contactus.html">Contact Us</a>
            </div>
            <div class="footer__links col-lg-3 d-flex flex-column">
              <h5 class="footer__heading">Categories</h5>
              <a href="#">Electric Guitars</a>
              <a href="#">Acoustic Guitars</a>
              <a href="#">Acoustic Electric Guitars</a>
              <a href="#">Bass Guitars</a>
            </div>
            <div class="footer__links col-lg-3 d-flex flex-column">
              <h5 class="footer__heading">Purchases</h5>
              <a href="#">Payments</a>
              <a href="#">Shipping</a>
              <a href="#">Return Policy</a>
              <a href="#">Gift Cards</a>
            </div>
            <div class="footer__links col-lg-3">
              <h5 class="footer__heading">Follow Us</h5>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer