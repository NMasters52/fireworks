import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        content="Fill out the form below with any questions or inquiries on orders! We will get back to you promptly."
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
