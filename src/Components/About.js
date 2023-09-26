import React from 'react'
import imgAbout from '../img/guitar-about.jpg'

const About = () => {
  return (
    <>
      <main>
        <section className="section__about my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>About Us</h1>
                <p>
                  Quisque porta urna ac quam lacinia, sed malesuada sapien egestas. Suspendisse ut elementum mauris, et
                  pretium orci.
                  Nullam elementum erat ante, sit amet maximus mauris volutpat quis. Curabitur lacinia nibh lobortis metus
                  tincidunt
                  congue. Mauris sit amet placerat tellus, nec malesuada ante. Phasellus nec porttitor velit. Pellentesque
                  sed lorem ac
                  leo aliquam laoreet non a orci. Sed finibus pellentesque orci, et gravida nulla pharetra laoreet. Nulla
                  pretium neque
                  nec ante venenatis iaculis.
                </p>
                <p>
                  Morbi in diam non leo venenatis rhoncus. Vivamus suscipit, tortor convallis luctus dictum, elit massa
                  venenatis ante,
                  non lobortis diam velit ac lacus. Aenean luctus ornare odio. Sed bibendum efficitur sapien, sit amet
                  semper purus
                  viverra ac. Nunc rhoncus dui ac magna semper, nec consectetur mauris laoreet. Interdum et malesuada fames
                  ac ante ipsum
                  primis in faucibus. Praesent commodo semper elit, ut convallis mi tempor nec. In eleifend posuere
                  pellentesque.
                  Curabitur ultrices mauris sed magna varius mattis.
                </p>
                <p>
                  Phasellus sapien diam, ullamcorper a nibh ac, mollis cursus purus. Integer accumsan rutrum condimentum.
                  Mauris hendrerit
                  orci libero, a dictum lectus tristique eget. Morbi mauris felis, tincidunt at sagittis fringilla, iaculis
                  eu tortor.
                  Donec posuere vel diam quis placerat. Aliquam vulputate posuere scelerisque. Ut tristique erat tortor, sit
                  amet rutrum
                  ante pellentesque tristique. Etiam hendrerit elit lectus, non consequat turpis porttitor nec. Praesent ut
                  sapien
                  tincidunt, blandit odio et, euismod arcu.
                </p>
                <p>
                  Ut cursus facilisis quam, ut hendrerit tortor tempor ac. Pellentesque a lacus eu orci mattis consectetur.
                  Morbi non eros
                  eget sapien sagittis viverra. Mauris at tortor ut quam cursus sodales ac vel mauris. Donec consequat nec
                  nisl et auctor.
                  Donec luctus, lectus et pulvinar cursus, purus augue sodales dolor, nec gravida risus leo in enim. Morbi
                  laoreet, metus
                  sit amet dignissim placerat, lectus tortor commodo elit, convallis pellentesque felis nibh ac ante.
                </p>
                <p>
                  Proin non malesuada nulla, gravida cursus lectus. Donec ac tincidunt dolor. Cras ligula eros, aliquet sed
                  sapien vel,
                  molestie facilisis massa. Etiam sed velit eu urna varius iaculis. Donec vitae maximus lacus. Proin tortor
                  ex, tincidunt
                  vel imperdiet quis, faucibus vitae risus. Maecenas dapibus vulputate aliquet. Proin non ipsum in enim
                  maximus molestie.
                  Donec fringilla nisi sed odio finibus, in sodales ligula dignissim. Donec at suscipit enim.

                </p>
                <p>
                  Donec scelerisque in ligula vitae condimentum. Donec faucibus, arcu non vulputate pharetra, nisl dolor
                  rhoncus risus, ut
                  vulputate tellus est ac odio. Quisque ac mi scelerisque, varius enim ac, gravida nisi. Quisque
                  pellentesque posuere
                  risus id porttitor. Vivamus tristique ante ipsum, ut facilisis orci porta vitae. Etiam elementum eros
                  sapien, sed cursus
                  lorem blandit commodo. Donec aliquam interdum dapibus. Suspendisse malesuada vel lorem quis luctus. Duis
                  magna leo,
                  faucibus at tincidunt sollicitudin, consectetur in diam. Aenean dictum a purus ut mollis. Cras nec ex
                  vitae sapien
                  aliquam fermentum. Phasellus eu lorem velit. Vivamus vel molestie dui, in iaculis purus. Vestibulum dictum
                  nisi eu
                  gravida convallis. Integer et ipsum dolor. Aenean quam arcu, dapibus sit amet neque et, lacinia ornare
                  magna.
                </p>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <img src={imgAbout} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About