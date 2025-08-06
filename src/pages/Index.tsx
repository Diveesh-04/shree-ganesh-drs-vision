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
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  <Card className="border-t-4 border-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full">
    <CardContent className="p-4 text-center flex flex-col h-full">
      <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
        <Target className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">Our Mission</h3>
      <p className="text-sm text-muted-foreground">
        To empower communities through education, healthcare, and sustainable development initiatives.
      </p>
    </CardContent>
  </Card>

  <Card className="border-t-4 border-secondary transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full">
    <CardContent className="p-4 text-center flex flex-col h-full">
      <div className="bg-secondary/10 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
        <Heart className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="text-lg font-semibold text-secondary mb-2">Our Vision</h3>
      <p className="text-sm text-muted-foreground">
        A world where every individual has access to quality education, healthcare, and a clean environment.
      </p>
    </CardContent>
  </Card>

  <Card className="border-t-4 border-accent transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full">
    <CardContent className="p-4 text-center flex flex-col h-full">
      <div className="bg-accent/10 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
        <Users className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-accent mb-2">Key initiatives</h3>
      <p className="text-sm text-muted-foreground">
      A dedicated team at SHREE GANESHA DRS Foundation identifies programs in the areas of education, healthcare, women empowerment, and environmental sustainability, amongst others
      </p>
    </CardContent>
  </Card>

  <Card className="border-t-4 border-gray-400 bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full">
  <CardContent className="p-4 text-center flex flex-col h-full">
    <div className="bg-gray-200 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
      <span className="text-sm font-bold text-gray-700">CSR</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-700 mb-2">
      SHREE GANESHA DRS Foundation CSR
    </h3>
    <p className="text-sm text-gray-600">
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
