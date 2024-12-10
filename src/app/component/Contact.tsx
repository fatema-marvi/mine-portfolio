import Link from "next/link";

const Contact: React.FC = () =>{
    return (
        <section id="contact">
            <p className="font-large-">You can contact me on: </p>
            <p className="font-large-bold"><strong>PHONE:</strong> <Link href="tel:+923322169105">+923322169105</Link></p>
            <p className="font-large-bold"><strong>WHATSAPP:</strong> <Link href="https://wa.me/+923322169105">+923322169105</Link></p>
            <p className="font-large-bold"><strong>E-MAIL:</strong> <Link href="mailto:fatemamarvi63@gmail.com">fatemamarvi63@gmail.com</Link></p>
        </section>
    );
};
export default Contact;