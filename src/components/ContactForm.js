import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a masseage to us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea rows={4} placeholder="Type your message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
