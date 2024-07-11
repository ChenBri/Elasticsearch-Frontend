import Logo from "./Logo";
import ElasticSearchLogo from "./../Logos/elasticsearch.png";
import KibanaLogo from "./../Logos/kibana.jpg";
import MaterialUILogo from "./../Logos/materialui.png";
import NodeLogo from "./../Logos/nodejs.png";
import ReactLogo from "./../Logos/react.png";
import TailwindLogo from "./../Logos/tailwind.png";
import ExpressLogo from "./../Logos/express.png";
import NetlifyLogo from "./../Logos/netlify.png";

function Footer() {
    return (
        <div className='flex flex-row justify-evenly pt-12'>
            <Logo imageSource={ElasticSearchLogo} imageAlt="ElasticSearch Logo" />
            <Logo imageSource={KibanaLogo} imageAlt="Kibana Logo" />
            <Logo imageSource={MaterialUILogo} imageAlt="Material UI Logo" />
            <Logo imageSource={NodeLogo} imageAlt="NodeJS Logo" />
            <Logo imageSource={ReactLogo} imageAlt="React Logo" />
            <Logo imageSource={TailwindLogo} imageAlt="TailwindCSS Logo" />
            <Logo imageSource={ExpressLogo} imageAlt="ExpressJS Logo" />
            <Logo imageSource={NetlifyLogo} imageAlt="Netlify Logo" />
        </div>
    );
}

export default Footer;
