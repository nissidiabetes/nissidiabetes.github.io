    var { Router,
        Route,
        IndexRoute,
        IndexLink,
        hashHistory,
        Link } = ReactRouter;


    var destination = document.querySelector("#content_container");

    var App = React.createClass({
      render: function() {
        return (


          <div>
          <header>
            <div className="desktop-outer w-100 h-100 bg-white">
              <nav className="container d-flex flex-row align-items-center justify-content-between h-100">
                  <a href="" className="logo-link-light"><img src="img/nissi-logo.png" alt="" className="logo logo-link-light my-3"></a>

                  <button className="hamburger hamburger--spin" type="button">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>

                  <div className="desktop-nav menu-link-container">
                    <div className="menu-link pl-lg-5 cl-effect-4 pink">
                      <a href="#about">About</a>
                    </div>
                    <div className="menu-link pl-lg-5 cl-effect-4 lightblue">
                      <a href="#services">Services</a>
                    </div>
                    <div className="menu-link pl-lg-5 cl-effect-4 nude">
                      <a href="https://15174.portal.athenahealth.com/" target="_blank">Patient Portal</a>
                    </div>
                    <div className="menu-link pl-lg-5 cl-effect-4 blue">
                      <a href="#contact">Contact</a>
                    </div>
                  </div>
              </nav>
            </div>

            <div className="mobile-nav menu-link-container">
              <div className="mobile-nav-inner">
                <div className="menu-link my-5 py-3">
                  <a href="#about" className="mobile-link">About</a>
                </div>
                <div className="menu-link my-5 py-3">
                  <a href="#services" className="mobile-link">Services</a>
                </div>
                <div className="menu-link my-5 py-3">
                  <a href="https://15174.portal.athenahealth.com/" target="_blank" className="mobile-link">Patient Portal</a>
                </div>
                <div className="menu-link my-5 py-3">
                  <a href="#contact" className="mobile-link">Contact</a>
                </div>
              </div>
            </div>
          </header>
          </div>





        )
      }
    });

    var VideoElement = React.createClass({
      onMouseOver: function(){
          $(this.refs.video).get(0).play();
          $(this.refs.video).addClass( "fade-in vide" );
          $(this.refs.captions).addClass( "fade-in vide" );


      },
      onMouseOut: function(){
          $(this.refs.video).get(0).pause();
          $(this.refs.video).get(0).currentTime = 0;
          $(this.refs.video).removeClass( "fade-in vide" );
          $(this.refs.captions).removeClass( "fade-in vide" );

      },
      render: function(){
        return (

        <div className="video" onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>

                    <video className="thevideo" loop muted ref="video">

                      <source src={this.props.src} type={this.props.type}/>

                    </video>


                    <div className="caption" ref="captions">
                      <div className="details">

                        <span className="title">
                          {this.props.title}
                        </span>
                        <span className="type">
                          {this.props.category}
                        </span>

                      </div>
                    </div>

            </div>

            )
      }

    })

    var Home = React.createClass({
      componentDidMount: function() {
        $( "body" ).addClass( "work" );
      },

      componentWillUnmount: function(){
        $( "body" ).removeClass( "work" );
      },

      render: function() {
          return (

              <section id="home">
                    <div className="row fade-in one">



                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad">




                          <a data-fancybox href="https://www.vimeo.com/200940839">


                            <img src="img/bevel_tellme.jpg" className="vidthumb"/>

                            <VideoElement src="video/bevel_tellme.mp4" type="video/mp4" title="Bevel - Tell Me" category="Branded Content"/>

                          </a>




                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad">


                        <a data-fancybox href="https://vimeo.com/188051637">

                          <img src="img/bevel_poh.jpg" className="vidthumb"/>

                          <VideoElement src="video/bevel_poh.mp4" type="video/mp4" title="Bevel - Power of the Haircut" category="Branded Content"/>

                        </a>

                        </div>



                      </div>
              </section>


          );
        }
    });



    var Bio = React.createClass({
      componentDidMount: function() {
        $( "body" ).addClass( "bio" );
      },
      componentWillUnmount: function(){
        $( "body" ).removeClass( "bio" );
      },
      render: function() {
          return (
            <section id="bio">

                <div className="container">
                  <div className="row">


                    <div className="bioContainer col-lg-6 col-md-6 col-sm-8 col-xs-10 text-center no-flt center-block fade-in one">

                      <h4>ABOUT</h4>

                      OLUDAMO IS A FILM DIRECTOR FROM NEW YORK CITY, CURRENTLY BASED IN LOS ANGELES. HE HAS CREATED VISUALS FOR BRANDS AS WELL AS MUSIC ARTISTS.


                    </div>

                  </div>
                </div>

            </section>
          );
        }
    });


    // Contact Page

    var Contact = React.createClass({
      componentDidMount: function() {
        $( "body" ).addClass( "contact" );
      },
      componentWillUnmount: function(){
        $( "body" ).removeClass( "contact" );
      },


      render: function() {
          return (

              <section id="contact">

                <div className="container">
                  <div className="contactContainer text-center col-lg-12 fade-in one">

                    <h4>FILMS / COMMERCIALS / MUSIC&nbsp;VIDEOS</h4>

                    <a href="mailto:films@en-gnr.com" className="mailLink">FILMS@EN-GNR.COM</a>

                    <div className="allIconsSocialWrapper center-block">

                            <div className="socialWrapper">
                                <div className="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                    <div className="socialIcon">
                                        <a href="https://www.instagram.com/oludamo/" target="_blank"><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div className="socialWrapper">
                                <div className="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                    <div className="socialIcon">
                                        <a href="https://vimeo.com/oludamo" target="_blank"><i className="fa fa-vimeo"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div className="socialWrapper">
                                <div className="socialIcon-wrap socialIcon-effect-1 socialIcon-effect-1a">
                                    <div className="socialIcon">
                                        <a href="https://www.facebook.com/oludamo/" target="_blank"><i className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                            </div>

                    </div>

                  </div>
                </div>

              </section>

          );
        }
    });





    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>

          //<IndexRoute component={Home}/>
          //<Route path="about" component={About} />
          //<Route path="services" component={Services} />
          //<Route path="insurance" component={Insurance} />
          //<Route path="footer" component={Footer} />

        </Route>
      </Router>,
      destination
    );
