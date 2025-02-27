import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Globe, AlertTriangle } from "lucide-react";
import Logo from "../../public/favicon.svg";

const OurStory = () => {
  const [tab, setTab] = useState("en");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f3f3_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-amber-50 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-50 to-transparent opacity-40"></div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div
        className="container mx-auto relative "
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
            style={{ marginBottom: "3rem" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 inline-block relative">
              Our Story
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 rounded-full"></span>
            </h1>
            <p
              className=" text-gray-600 max-w-2xl "
              style={{
                margin: "1rem auto 0 auto",
              }}
            >
              A culinary journey through the flavors of India, Thailand, Mexico,
              Nepal, and the Himalayas
            </p>
          </motion.div>

          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <motion.div variants={itemVariants}>
              <TabsList
                className="flex justify-center bg-amber-50/80 rounded-full shadow-md"
                style={{ marginBottom: "2rem", padding: "0.25rem" }}
              >
                <TabsTrigger
                  value="en"
                  className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm rounded-full flex items-center gap-2 transition-all"
                  style={{
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <Globe size={16} />
                  English
                </TabsTrigger>
                <TabsTrigger
                  value="es"
                  className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm rounded-full flex items-center gap-2 transition-all"
                  style={{
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <Globe size={16} />
                  Español
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="en">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 md:space-y-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    variants={itemVariants}
                    className="order-2 md:order-1"
                  >
                    <h2
                      className="text-2xl font-bold text-emerald-700"
                      style={{ marginBottom: "1rem" }}
                    >
                      A Fusion of Cultures
                    </h2>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      Karnali Yaks Restaurant is a vibrant dining destination
                      inspired by the rich culinary heritage of India, Thailand,
                      Mexico, Nepal, and the Himalayan region. Founded with a
                      deep passion for authentic flavors, our restaurant takes
                      guests on a gastronomic journey that celebrates both
                      tradition and innovation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our carefully curated menu showcases traditional recipes
                      crafted with fresh, locally sourced ingredients, ensuring
                      that each dish embodies the true essence of its origins.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="order-1 md:order-2 flex justify-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={Logo}
                      alt="Karnali Yaks Restaurant"
                      className="w-full max-w-md rounded-lg shadow-xl transform rotate-1 border-4 border-white"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md"
                  style={{ padding: "1.5rem 2rem" }}
                >
                  <h2
                    className="text-2xl font-bold text-emerald-700"
                    style={{ marginBottom: "1rem" }}
                  >
                    Our Philosophy
                  </h2>
                  <div style={{ rowGap: "1rem" }}>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      From the bold, aromatic spices of India to the delicate
                      balance of Thai cuisine, the smoky richness of Mexican
                      dishes, and the comforting warmth of Nepalese and
                      Himalayan specialties, our offerings bring together the
                      best of multiple cultures on a single plate.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      Beyond food, we pride ourselves on delivering a unique
                      dining experience that combines warm hospitality, a cozy
                      ambiance, and an inviting atmosphere. Whether you're here
                      for an intimate dinner, a gathering with friends, or an
                      exploration of global flavors, our restaurant offers an
                      escape into the world of culinary excellence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      At the heart of our mission is the desire to bring people
                      together through food, fostering a sense of community and
                      cultural appreciation. Each meal tells a story—of
                      tradition, passion, and the artistry of cooking. Whether
                      you seek comfort in familiar flavors or an adventure into
                      something new, Karnali Yaks Restaurant promises a
                      memorable journey for your taste buds.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-amber-50 rounded-2xl shadow-md border-l-4 border-amber-400"
                  style={{ padding: "1.5rem 2rem", margin: "1rem 0" }}
                >
                  <div
                    className="flex items-center gap-3"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    <AlertTriangle className="text-amber-600" size={24} />
                    <h3 className="text-xl font-bold text-amber-800">
                      Allergy Awareness
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    At Karnali Yaks Restaurant, your health and satisfaction are
                    our top priorities. If you have any food allergies or
                    dietary restrictions, please inform our team members before
                    ordering, and we'll be happy to accommodate your needs.
                  </p>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="es">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 md:space-y-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    variants={itemVariants}
                    className="order-2 md:order-1"
                  >
                    <h2
                      className="text-2xl font-bold text-emerald-700"
                      style={{ marginBottom: "1rem" }}
                    >
                      Una Fusión de Culturas
                    </h2>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      Karnali Yaks Restaurant es un destino gastronómico
                      vibrante que celebra la rica herencia culinaria de India,
                      Tailandia, México, Nepal y la región del Himalaya. Fundado
                      con una profunda pasión por los sabores auténticos,
                      nuestro restaurante invita a los comensales a un viaje
                      gastronómico que equilibra la tradición con la innovación.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nuestro menú está diseñado con esmero, ofreciendo recetas
                      tradicionales elaboradas con ingredientes frescos y de
                      alta calidad.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="order-1 md:order-2 flex justify-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={Logo}
                      alt="Karnali Yaks Restaurant"
                      className="w-full max-w-md rounded-lg shadow-xl transform -rotate-1 border-4 border-white"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-md"
                  style={{ padding: "1.5rem 2rem" }}
                >
                  <h2
                    className="text-2xl font-bold text-emerald-700"
                    style={{ marginBottom: "1rem" }}
                  >
                    Nuestra Filosofía
                  </h2>
                  <div style={{ rowGap: "1rem" }}>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      Desde las especias intensas y aromáticas de la India hasta
                      el equilibrio exquisito de la cocina tailandesa, la
                      riqueza ahumada de los platos mexicanos y la calidez
                      reconfortante de la comida nepalí e himalaya, nuestras
                      propuestas reúnen lo mejor de diversas culturas en un solo
                      lugar.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ marginBottom: "1rem" }}
                    >
                      Más allá de la comida, nos enorgullecemos de brindar una
                      experiencia gastronómica única, combinando hospitalidad
                      cálida, un ambiente acogedor y una atmósfera envolvente.
                      Ya sea para una cena íntima, una reunión con amigos o una
                      exploración de sabores globales, nuestro restaurante
                      ofrece una escapada a la excelencia culinaria.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nuestra misión es unir a las personas a través de la
                      comida, fomentando un sentido de comunidad y apreciación
                      cultural. Cada plato cuenta una historia de tradición,
                      pasión y arte culinario. En Karnali Yaks Restaurant, cada
                      visita es un viaje inolvidable para el paladar, donde la
                      comodidad y la aventura se encuentran en cada bocado.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-amber-50 rounded-2xl shadow-md border-l-4 border-amber-400"
                  style={{ padding: "1.5rem 2rem", margin: "1rem 0" }}
                >
                  <div
                    className="flex items-center gap-3"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    <AlertTriangle className="text-amber-600" size={24} />
                    <h3 className="text-xl font-bold text-amber-800">
                      Conciencia sobre Alergias
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    En Karnali Yaks Restaurant, su salud y satisfacción son
                    nuestras principales prioridades. Si tiene algún tipo de
                    alergia alimentaria o restricción dietética, infórmelo a los
                    miembros de nuestro equipo antes de ordenar, y estaremos
                    encantados de adaptarnos a sus necesidades.
                  </p>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
