import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
   
    const [msg, setMsg] = useState({
    name: "",
        email: "",
        subject:" ",
        message: ""

    })
   
    //Handle Input
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setMsg({ ...msg, [name]: value });
    };

    //posting the data into database
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { name, email,subject, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email,subject, message
                })
            })
            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("message not send try again");
            } else {
                window.alert("message sent successfully");
            setMsg({
                name:" ",
                email:" ",
                subject:"",
                message:" "
            })
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row m-2">
                    <div className="col-3 bg-grey">
                        <h3 className="heading1">Address</h3>
                        <p>Rau,212 silicon city Indore</p>
                    </div>

                    <div className="col-3">
                        <h3 className="heading1">Contact</h3>
                        <a to="/" className="text-decoration-none text-dark text-center"><p>+ 1235 2355 98</p></a>
                    </div>
                    <div className="col-3">
                        <h3 className="heading1">Email</h3>
                        <a to="/" className="text-decoration-none text-dark text-center"><p>info@yoursite.com</p></a>
                    </div>
                    <div className="col-3">
                        <h3 className="heading1">Website</h3>
                        <a to="/" className="text-decoration-none text-dark text-center"><p>yourwebsite.com</p></a>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row py-5">
                    <div className="col-md-6">
                        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=212%20a,%20rau%20,%20silicon%20city,indore,%20+(my%20college)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a to="https://www.gps.ie/sport-gps/">swimming watch</a></iframe>
                    </div>

                    <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
                        <form onSubmit={handleSubmit} method="POST"  action="">
                            <div className="m-2">
                                <input  type="text" className="form-control" placeholder="Your Name" name="name"
                                value={msg.name}
                                onChange={handleChange} />
                            </div>
                            <div className="m-2">
                                <input type="text" className="form-control " placeholder="Your Email" name="email"
                                value={msg.email}
                                onChange={handleChange}/>
                            </div>
                            <div className="m-2">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"
                                value={msg.subject}
                                onChange={handleChange}/>
                            </div>
                            <div className="m-2">
                                <textarea   cols="30" rows="7" class="form-control" placeholder="Message" name="message"
                                value={msg.message}
                                onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-success btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;