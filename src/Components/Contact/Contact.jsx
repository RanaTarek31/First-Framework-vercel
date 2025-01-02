import './Contact.css'

export default function Contact() {
  return (
    <>
    <section className='contact'>
          <div className="container">
            <h2 className='text-center'>Contact Me</h2>
            <div className='divider'>
              <i class="fa-solid fa-star fa-xlg"></i>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto mt-5">
                <div className='form'>
                  <div className="form-group ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-3 mb-3 border-none width-100 form-control"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="p-3 mb-3 border-none width-100 form-control"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="p-3 mb-3 border-none width-100 form-control"
                    />
                  </div>
                  <div className="form-group ">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary "
                      value={"send message"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
