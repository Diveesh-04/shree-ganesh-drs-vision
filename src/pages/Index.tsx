import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramSlider from "@/components/ProgramSlider";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/Educationbanner.jpg",
    heading: "Empowering Communities,",
    subheading: "Creating Change",
    paragraph:
      "SHREE GANESH DRS Foundation is dedicated to transforming lives through education, healthcare, and environmental conservation.",
  },
  {
    image: "/GirlsEducation.png",
    heading: "Education is Every Child's Right,",
    subheading: "Let's Make It Happen",
    paragraph:
      "Together, we can light up the future of underprivileged children through education and care.",
  },
  {
    image: "/hospitals.png",
    heading: "Health for All,",
    subheading: "Hope for Tomorrow",
    paragraph:
      "Our mission to provide healthcare and wellness to those in need, ensuring a healthier tomorrow.",
  },
  {
    image: "/environment.png",
    heading: "Protecting Our Planet,",
    subheading: "For Generations to Come",
    paragraph:
      "We are committed to sustainable practices that preserve our environment for future generations.",
  },
  {
    image: "/job.png",
    heading: "Creating Opportunities,",
    subheading: "Transforming Lives",
    paragraph:
      "We focus on job creation initiatives that empower individuals with skills and opportunities to build a better future.",
  },
  {
    image: "/industries.png",
    heading: "What We Do ,",
    subheading: "Our Impact ,Programs & Initiatives",
    paragraph:
      "Through partnerships with industries, we combine resources, innovation, and expertise to uplift communities, improve livelihoods, and build a more sustainable future for all.",
  },
  {
    image: "/sc.png",
    heading: "Support Our Seniors",
    subheading: "Give Dignity, Care, and Hope",
    paragraph:
        "Provide healthcare, companionship, and essential support to senior citizens in need. Together, we can ensure they live their golden years with respect and joy."

  },
  {
    image: "/technical.png",
    heading: "Empowering Through Skills,",
    subheading: "Building Careers",
    paragraph:
      "Our technical training programs aim to equip individuals with the skills needed to thrive in today's technical job market.",
  },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 10 sec

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className=" h-screen bg-center bg-cover text-white relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
    
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className=" p-8 rounded-xl text-center max-w-3xl mx-auto">
          <motion.h1
            key={currentIndex + "-heading"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            {currentSlide.heading}
            <span className="block text-accent">{currentSlide.subheading}</span>
          </motion.h1>

          <motion.p
            key={currentIndex + "-paragraph"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 leading-relaxed"
          >
            {currentSlide.paragraph}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />

      {/* Mission Statement */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Vision & Mission
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        
        {/* Card 1 */}
        <Card className="border-t-4 border-primary min-h-[22rem] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-8 text-center flex flex-col flex-1">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              To empower communities through education, healthcare, and sustainable development initiatives.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="border-t-4 border-secondary min-h-[22rem] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-8 text-center flex flex-col flex-1">
            <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Our Vision
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A world where every individual has access to quality education, healthcare, and a clean environment.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="border-t-4 border-accent min-h-[22rem] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-8 text-center flex flex-col flex-1">
            <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-accent mb-4">
              Key Initiatives
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              A dedicated team at SHREE GANESHA DRS Foundation identifies programs in the areas of education, healthcare, women empowerment, and environmental sustainability, amongst others.
            </p>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card className="border-t-4 border-gray-400 bg-white min-h-[22rem] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-8 text-center flex flex-col flex-1">
            <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <span className="text-base font-bold text-gray-700">CSR</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              SHREE GANESHA DRS Foundation CSR
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We embrace our responsibility to create a positive impact in the communities in which we work and live.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  </div>
</section>



        {/* Program Slider */}
        <ProgramSlider />

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Making a Difference
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We’re committed to supporting underprivileged communities with education, health, and hope. Join us in empowering lives and creating brighter futures—one step at a time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
