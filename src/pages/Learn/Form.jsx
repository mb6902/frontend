import './Learn.css';
const Form = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 p-4 bg rounded">
                    <div className="mb-3">
                        <h5 className="text-start text-white">Full Name</h5>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-white">Email Address</h5>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-white">Phone Number</h5>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h5 className="text-start text-white">Interested In :</h5>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="fullStack"
                                    />
                                    <label
                                        className="form-check-label text-white"
                                        htmlFor="fullStack"
                                    >
                                        Full Stack Development
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="digitalMarketing"
                                    />
                                    <label
                                        className="form-check-label text-white"
                                        htmlFor="digitalMarketing"
                                    >
                                        Digital Marketing
                                    </label>
                                </div>
                            </div>
                            <div className="col-6 mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="uiUx"
                                    />
                                    <label
                                        className="form-check-label text-white"
                                        htmlFor="uiUx"
                                    >
                                        UI/UX Designing
                                    </label>
                                </div>
                            </div>
                            <div className="col-6 mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="interest"
                                        id="graphicDesign"
                                    />
                                    <label
                                        className="form-check-label text-white"
                                        htmlFor="graphicDesign"
                                    >
                                        Graphic Designing
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <div className='mx-1'>
                        <label className="form-check-label text-2" for="flexCheckDefault">
                        I agree to the Terms and Conditions 
                        </label>
                        </div>
                    </div>
                    <div className='text-center d-flex justify-content-center align-items-center mt-5'>
                         <button className='btn rounded-3 px-2 py-2 text-white border border-1' color='#70BF29'style={{
                            background:"#70BF29"
                         }}>Submit Now</button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
