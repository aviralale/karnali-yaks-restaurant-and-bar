import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Logo from "../../public/favicon.svg";

const OurStory = () => {
  const [tab, setTab] = useState("en");

  return (
    <section
      style={{
        padding: "4rem 0",
        position: "relative", // Ensure the section is a positioning context
        overflow: "hidden", // Hide overflow from absolute children
      }}
    >
      {/* Background layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#fffbeb", // Base color
          opacity: 0.9,
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom right, #fffbeb, white)", // Gradient overlay
          opacity: 0.8,
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(#f3f3f3_1px, transparent 1px)", // Radial pattern
          backgroundSize: "20px 20px",
          opacity: 0.3,
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0.02) 75%, transparent 75%, transparent)", // Diagonal pattern
          backgroundSize: "20px 20px",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4rem",
          background: "linear-gradient(to bottom, #fffbeb, transparent)", // Top gradient
          opacity: 0.4,
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4rem",
          background: "linear-gradient(to top, #fffbeb, transparent)", // Bottom gradient
          opacity: 0.4,
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative", // Ensure content is above background layers
        }}
      >
        <h1
          style={{
            fontSize: "3.75rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#065f46" }}>Our Story</span>
        </h1>

        <Tabs value={tab} onValueChange={setTab} style={{ width: "100%" }}>
          <TabsList
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <TabsTrigger value="en" style={{ padding: "0.5rem 1.5rem" }}>
              English
            </TabsTrigger>
            <TabsTrigger value="es" style={{ padding: "0.5rem 1.5rem" }}>
              Español
            </TabsTrigger>
          </TabsList>

          <TabsContent value="en">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Logo}
                  alt="Karnali Yaks Restaurant"
                  style={{
                    width: "100%",
                    maxWidth: "28rem",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Karnali Yaks Restaurant is a vibrant dining destination
                  inspired by the rich culinary heritage of India, Thailand,
                  Mexico, Nepal, and the Himalayan region. Founded with a deep
                  passion for authentic flavors, our restaurant takes guests on
                  a gastronomic journey that celebrates both tradition and
                  innovation.
                </p>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Our carefully curated menu showcases traditional recipes
                  crafted with fresh, locally sourced ingredients, ensuring that
                  each dish embodies the true essence of its origins. From the
                  bold, aromatic spices of India to the delicate balance of Thai
                  cuisine, the smoky richness of Mexican dishes, and the
                  comforting warmth of Nepalese and Himalayan specialties, our
                  offerings bring together the best of multiple cultures on a
                  single plate.
                </p>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Beyond food, we pride ourselves on delivering a unique dining
                  experience that combines warm hospitality, a cozy ambiance,
                  and an inviting atmosphere. Whether you're here for an
                  intimate dinner, a gathering with friends, or an exploration
                  of global flavors, our restaurant offers an escape into the
                  world of culinary excellence.
                </p>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  At the heart of our mission is the desire to bring people
                  together through food, fostering a sense of community and
                  cultural appreciation. Each meal tells a story—of tradition,
                  passion, and the artistry of cooking. Whether you seek comfort
                  in familiar flavors or an adventure into something new,
                  Karnali Yaks Restaurant promises a memorable journey for your
                  taste buds.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "3rem",
                padding: "1.5rem",
                backgroundColor: "#fffbeb",
                borderRadius: "0.5rem",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#92400e",
                }}
              >
                <span
                  style={{ display: "inline-block", marginRight: "0.5rem" }}
                >
                  ⚠️
                </span>
                Allergy Awareness
              </h3>
              <p style={{ fontSize: "1.125rem" }}>
                At Karnali Yaks Restaurant, your health and satisfaction are our
                top priorities. If you have any food allergies or dietary
                restrictions, please inform our team members before ordering,
                and we'll be happy to accommodate your needs.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="es">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Logo}
                  alt="Karnali Yaks Restaurant"
                  style={{
                    width: "100%",
                    maxWidth: "28rem",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Karnali Yaks Restaurant es un destino gastronómico vibrante
                  que celebra la rica herencia culinaria de India, Tailandia,
                  México, Nepal y la región del Himalaya. Fundado con una
                  profunda pasión por los sabores auténticos, nuestro
                  restaurante invita a los comensales a un viaje gastronómico
                  que equilibra la tradición con la innovación.
                </p>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Nuestro menú está diseñado con esmero, ofreciendo recetas
                  tradicionales elaboradas con ingredientes frescos y de alta
                  calidad. Desde las especias intensas y aromáticas de la India
                  hasta el equilibrio exquisito de la cocina tailandesa, la
                  riqueza ahumada de los platos mexicanos y la calidez
                  reconfortante de la comida nepalí e himalaya, nuestras
                  propuestas reúnen lo mejor de diversas culturas en un solo
                  lugar.
                </p>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Más allá de la comida, nos enorgullecemos de brindar una
                  experiencia gastronómica única, combinando hospitalidad
                  cálida, un ambiente acogedor y una atmósfera envolvente. Ya
                  sea para una cena íntima, una reunión con amigos o una
                  exploración de sabores globales, nuestro restaurante ofrece
                  una escapada a la excelencia culinaria.
                </p>
                <p style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
                  Nuestra misión es unir a las personas a través de la comida,
                  fomentando un sentido de comunidad y apreciación cultural.
                  Cada plato cuenta una historia de tradición, pasión y arte
                  culinario. En Karnali Yaks Restaurant, cada visita es un viaje
                  inolvidable para el paladar, donde la comodidad y la aventura
                  se encuentran en cada bocado.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "3rem",
                padding: "1.5rem",
                backgroundColor: "#fffbeb",
                borderRadius: "0.5rem",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#92400e",
                }}
              >
                <span
                  style={{ display: "inline-block", marginRight: "0.5rem" }}
                >
                  ⚠️
                </span>
                Conciencia sobre Alergias
              </h3>
              <p style={{ fontSize: "1.125rem" }}>
                En Karnali Yaks Restaurant, su salud y satisfacción son nuestras
                principales prioridades. Si tiene algún tipo de alergia
                alimentaria o restricción dietética, infórmelo a los miembros de
                nuestro equipo antes de ordenar, y estaremos encantados de
                adaptarnos a sus necesidades.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OurStory;
