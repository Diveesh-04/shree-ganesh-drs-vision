import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramSlider from "@/components/ProgramSlider";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Target } from "lucide-react";
import { motion } from "framer-motion";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section
  className="h-[100vh] bg-center bg-cover text-white relative overflow-hidden"
  style={{ backgroundImage: "url('/Background.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
    <div className="max-w-4xl text-center">
    <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
>
  Empowering Communities,
  <span className="block text-accent">Creating Change</span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.2 }}
  className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed"
>
  SHREE GANESH DRS Foundation is dedicated to transforming lives through
  education, healthcare, and environmental conservation.
</motion.p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Optional Buttons */}
      </div>
    </div>
  </div>
</section>


        {/* Mission Statement */}
        <section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
    <motion.h2
  className="text-3xl md:text-4xl font-bold text-primary mb-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  Our Vision & Mission
</motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <Card className="border-t-4 border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower communities through education, healthcare, and sustainable development initiatives.
            </p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where every individual has access to quality education, healthcare, and a clean environment.
            </p>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-3">Our Approach</h3>
            <p className="text-muted-foreground">
              Community-driven solutions that are sustainable, scalable, and culturally sensitive.
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
              Your support can help us reach more communities and create lasting positive change. Together, we can build a better tomorrow.
            </p>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
