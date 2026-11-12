import { useState } from "react";

function Footer({ email, year }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [feedback, setFeedback] = useState("");

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            setFeedback("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            setFeedback("Please enter a valid email address.");
            return;
        }

        setFeedback("Message submitted successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }

    return (
        <footer id="contact">

            <h2>Contact Me</h2>

            <p>Email: {email}</p>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">
                    Send Message
                </button>

                <p>{feedback}</p>

            </form>

            <p>Copyright {year}. All rights reserved.</p>

        </footer>
    );
}

export default Footer;