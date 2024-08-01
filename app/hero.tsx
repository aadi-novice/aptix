// components/Hero.tsx
import React from 'react';
import styles from './hero.module.css';
import { Poppins } from "next/font/google";

/* istanbul ignore next */
const poppins = Poppins({
  subsets: ["latin"],
  weight: "700"
});

const Hero: React.FC = () => {
  return (
    <div className={`${styles.hero} bg-base-200`}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className={`${poppins.className} text-5xl font-bold`}>
            Meow meow
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
