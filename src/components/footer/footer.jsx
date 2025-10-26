import './footer.css';

function Footer() {
  return (
    <footer className="custom-footer text-center text-lg-start text-white">
      <section className="footer-section pt-4 pb-4">
        <div className="container text-center text-md-start">
          <div className="row justify-content-center">
            
            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Location</h6>
              <p className="mb-0">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Around the Web</h6>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="btn btn-outline-light btn-social rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-social rounded-circle">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-social rounded-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-social rounded-circle">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">About Freelancer</h6>
              <p className="mb-0">
                Freelancer is a free to use, MIT licensed Bootstrap theme created by{' '}
                <a
                  href="https://startbootstrap.com"
                  className="text-decoration-none text-info fw-semibold"
                >
                  Start Bootstrap
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-bottom text-center p-3">
        © Your Website 2023
      </div>
    </footer>
  );
}

export default Footer;

