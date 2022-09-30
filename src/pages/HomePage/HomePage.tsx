
import Hiro from "../../components/Hiro1/Hiro1";
import { banners } from "../../constants/images";
import LatestWorks from "../../containers/LatestWorks/LatestWorks";
import ContactUs from "../../containers/ContactUs/ContactUs";

export default () => (
  <>
    <Hiro image={banners.banner1}/>
    <LatestWorks />
    <ContactUs />
  </>
);
