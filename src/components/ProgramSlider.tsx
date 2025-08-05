import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import educationImg from "@/assets/education-program.jpg";
import healthcareImg from "@/assets/healthcare-program.jpg";
import environmentImg from "@/assets/environment-program.jpg";
import { motion } from "framer-motion";
const programs = [
  {
    id: 1,
    title: "Education Program",
    description: "Providing quality education and learning opportunities to underprivileged children and adults in rural and urban communities.",
    image: educationImg,
    impact: "500+ Students Educated",
  },
  {
    id: 2,
    title: "Healthcare Initiative",
    description: "Delivering essential healthcare services and medical support to communities with limited access to quality healthcare facilities.",
    image: healthcareImg,
    impact: "1000+ Patients Treated",
  },
  {
    id: 3,
    title: "Environmental Conservation",
    description: "Promoting sustainable practices and environmental awareness through tree plantation drives and community clean-up initiatives.",
    image: environmentImg,
    impact: "2000+ Trees Planted",
  },
];

const ProgramSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-soft-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Programs
      </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a difference through comprehensive programs designed to uplift communities and create lasting positive impact.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img
                src={programs[currentSlide].image}
                alt={programs[currentSlide].title}
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {programs[currentSlide].impact}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <Card className="h-80 flex flex-col justify-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {programs[currentSlide].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {programs[currentSlide].description}
                </p>
                
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {programs.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSlider;