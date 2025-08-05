import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
            <motion.h1
        className="text-4xl md:text-5xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About SHREE GANESH DRS Foundation
      </motion.h1>

      <motion.p
        className="text-xl text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        We are a non-profit organization dedicated to creating positive change and providing comprehensive support to communities in need through education, healthcare, and sustainable development initiatives.
      </motion.p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
  <CardContent className="p-8">
    <div className="flex items-center mb-4">
      <Target className="h-8 w-8 text-primary mr-3" />
      <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      To empower communities through comprehensive programs in education, healthcare, and environmental conservation. We strive to create sustainable solutions that address the root causes of social challenges and promote long-term development.
    </p>
  </CardContent>
</Card>

<Card className="border-l-4 border-secondary hover:shadow-lg transition-shadow duration-300">
  <CardContent className="p-8">
    <div className="flex items-center mb-4">
      <Heart className="h-8 w-8 text-secondary mr-3" />
      <h2 className="text-2xl font-bold text-secondary">Our Vision</h2>
    </div>
    <p className="text-muted-foreground leading-relaxed">
      A world where every individual has access to quality education, healthcare, and a clean environment. We envision thriving communities that are self-sufficient, environmentally conscious, and socially inclusive.
    </p>
  </CardContent>
</Card>

            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
  <CardContent className="p-6 text-center">
    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-3">Community First</h3>
    <p className="text-muted-foreground">
      We believe in putting community needs at the forefront of everything we do, ensuring our programs are responsive to local requirements.
    </p>
  </CardContent>
</Card>

<Card className="hover:shadow-lg transition-shadow duration-300">
  <CardContent className="p-6 text-center">
    <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-3">Excellence</h3>
    <p className="text-muted-foreground">
      We strive for excellence in all our initiatives, maintaining high standards and continuously improving our impact and effectiveness.
    </p>
  </CardContent>
</Card>

<Card className="hover:shadow-lg transition-shadow duration-300">
  <CardContent className="p-6 text-center">
    <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-3">Compassion</h3>
    <p className="text-muted-foreground">
      Driven by empathy and understanding, we approach every situation with compassion and genuine care for those we serve.
    </p>
  </CardContent>
</Card>

            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Journey</h2>
              <Card className="hover:shadow-lg hover:scale-[1.02] transform transition duration-300 rounded-xl">
  <CardContent className="p-8">
    <p className="text-muted-foreground leading-relaxed mb-6">
      Founded with the vision of creating positive social change, SHREE GANESH DRS Foundation has been at the forefront of community development for several years. Our journey began with a simple belief that every individual deserves access to basic necessities and opportunities for growth.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Over the years, we have expanded our reach and impact, working with local communities, government agencies, and other non-profit organizations to address pressing social issues. Our multidisciplinary approach has enabled us to create comprehensive solutions that address the interconnected nature of social challenges.
    </p>
  </CardContent>
</Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;