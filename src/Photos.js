import React from 'react';
// import image1 from 'images/img_1.jpg';

class Photos extends React.Component {
    render(){
        return(
            <div>
                  <head>
    <title>Shutter &mdash; Colorlib Website Template</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700,900" rel="stylesheet"/>
    <link rel="stylesheet" href="fonts/icomoon/style.css"/>

    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/magnific-popup.css"/>
    <link rel="stylesheet" href="css/jquery-ui.css"/>
    <link rel="stylesheet" href="css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="css/owl.theme.default.min.css"/>

    <link rel="stylesheet" href="css/bootstrap-datepicker.css"/>

    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css"/>

    <link rel="stylesheet" href="css/aos.css"/>
    <link rel="stylesheet" href="css/fancybox.min.css"/>

    <link rel="stylesheet" href="css/style.css"/>
    
  </head>
  <body>
  

  <div class="site-wrap">

  <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>

  <header class="header-bar d-flex d-lg-block align-items-center">
    <div class="site-logo">
      <a href="index.html">Shutter</a>
    </div>
    
    <div class="d-inline-block d-xl-none ml-md-0 ml-auto py-3" style={{position: "relative", top: "3px"}}><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

    <div class="main-menu">
      <ul class="js-clone-nav">
        <li><a href="index.html">Home</a></li>
        <li class="active"><a href="photos.html">Photos</a></li>
        <li><a href="bio.html">Bio</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <ul class="social js-clone-nav">
        <li><a href="#"><span class="icon-facebook"></span></a></li>
        <li><a href="#"><span class="icon-twitter"></span></a></li>
        <li><a href="#"><span class="icon-instagram"></span></a></li>
      </ul>
    </div>
  </header> 
  <main class="main-content">
    <div class="container-fluid photos">

      <div class="row pt-4 mb-5 text-center">
        <div class="col-12">
          <h2 class="text-white mb-4">'Nature' &mdash; 19 Photos</h2>
        </div>
      </div>

      <div class="row align-items-stretch">
        
        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up">
          <a href="images/img_1.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_1.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_2.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_2.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <a href="images/img_3.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_3.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>

        <div class="col-6 col-md-6 col-lg-8" data-aos="fade-up">
          <a href="images/img_4.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_4.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_5.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_5.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>

        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up">
          <a href="images/img_6.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_6.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_7.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_7.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>


        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up">
          <a href="images/img_8.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_8.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_9.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_9.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <a href="images/img_10.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_10.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>


        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up">
          <a href="images/img_1.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_1.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_2.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_2.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <a href="images/img_3.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_3.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>

        <div class="col-6 col-md-6 col-lg-8" data-aos="fade-up">
          <a href="images/img_4.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_4.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_5.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_5.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>

        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up">
          <a href="images/img_6.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_6.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_7.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_7.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>


        <div class="col-6 col-md-6 col-lg-4" data-aos="fade-up">
          <a href="images/img_8.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_8.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        <div class="col-6 col-md-6 col-lg-8" data-aos="fade-up" data-aos-delay="100">
          <a href="images/img_9.jpg" class="d-block photo-item" data-fancybox="gallery">
            <img src={require('./images/img_9.jpg')} alt="Image" class="img-fluid"/>
            <div class="photo-text-more">
              <span class="icon icon-search"></span>
            </div>
          </a>
        </div>
        

      </div>


      <div class="row justify-content-center">
        <div class="col-md-12 text-center py-5">
          <p>
        
      </p>
        </div>
      </div>
    </div>
  </main>

</div> 

 
    
  </body>     </div>
        )
    }
}

export default Photos; 