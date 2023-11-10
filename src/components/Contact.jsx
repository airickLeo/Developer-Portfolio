import SectionWrapper from "../hoc/SectionWrapper"
import styles from "../styles"
import { resume } from "../assets"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    // to show a delayed effect from submitting message
    const [submitting, setSubmit] = useState(false);

    const handleChange = (e) => {
        // object destructuring
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        // prevent default behaviour
        e.preventDefault();
        setSubmit(true);

        // note that emailjs.send returns a promise, we will perform
        // additional action using .then upon the emailjs promise
        // is fulfilled
        emailjs.send(
            'service_p7t1uuu',
            'template_brezojo',
            {
                from_name: form.name,
                to_name: "Eric",
                from_email: form.email,
                to_email: "e82liu@uwaterloo.ca",
                message: form.message
            },
            'vfnYmW2Vq4RVNpMtD'
        ).then(() => {
            setSubmit(false);
            alert('Your message has been submitted!');
            setForm({
                name: "",
                email: "",
                message: ""
            })
        , (errorReason) => {
            setSubmit(false);
            console.error(errorReason);
            alert("Something went wrong while sending")
        }})
    }

    return (
        <div className="flex md:flex-row flex-col justify-start gap-20 mt-32 md:items-center items-start">
            <div className="bg-tertiary p-8 rounded-3xl justify-center md:w-1/2 w-full min-h-[600px] max-w-[500px]">
                <p className={`${styles.sectionSubText}`}>
                    Leave me a message!
                </p>
                <h3 className={`${styles.sectionHeadText}`}>
                    Contact
                </h3>

                <form className="flex flex-col gap-12 mt-12" ref={formRef} onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name">Your Name</label>
                        <input id="name" name="name" value={form.name} onChange={handleChange} className='bg-indigo-950 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-primary' placeholder="Ex. John Doe" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email">Your Email</label>
                        <input id="email" name="email" value={form.email} onChange={handleChange} className='bg-indigo-950 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-primary' placeholder="Ex. johndoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="message">Your Message</label>
                        <textarea rows={7} id="message" type="text" name="message" value={form.message} onChange={handleChange}
                            className='bg-indigo-950 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-primary' placeholder="What should I know?" />
                    </div>
                    <button type="submit" className='bg-indigo-950 py-3 px-8 outline-none rounded-xl
           w-fit font-bold shadow-md text-white shadow-primary'>{submitting ? "Sending..." : "Submit"}</button>
                </form>
            </div>
            <div className="flex flex-col items-center md:w-1/2 w-full gap-6 md:ml-20">
                <h3 className={`${styles.sectionSubText}`}>
                    Resume
                </h3>
                <iframe src={resume} className="w-full lg:min-h-[680px] min-h-[500px]"></iframe>
            </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")