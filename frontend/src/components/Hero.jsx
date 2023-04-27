import { styles } from "../styles";
import hero_bg from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto `}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div style={{ marginTop: "50px" }}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Muhammad</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am blockchain, web3.0, defi, dapp,
              <br className="sm:block hidden" /> tokens, web2 & MERN Stack
              developer
              <br className="sm:block hidden" />
            </p>
            <img
              style={{ marginTop: "100px" }}
              src={hero_bg}
              alt="hero_bg_upper"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
