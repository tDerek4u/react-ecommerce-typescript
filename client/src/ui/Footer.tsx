import { payment } from "../assets";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="mt-10 ">
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@2024 Ecommerce . All right reserved.</p>
        <img src={payment} alt="payment" className="object-cover" />
      </Container>
    </div>
  )
}

export default Footer;
