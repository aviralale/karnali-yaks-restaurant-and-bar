const GoogleMaps = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        width: "100%",
        padding: "1.5rem 1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
        className="sm:text-6xl md:text-7xl lg:text-9xl"
      >
        Visit Us
      </h1>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "0.5rem",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          paddingTop: "56.25%",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb= !1m18!1m12!1m3!1d3198.5504246543983!2d-4.686817184770897!3d36.50174507962092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd731f001d3abe35%3A0x486df130b8396597!2sKarnali%20Yaks%20Restaurant!5e0!3m2!1sen!2ses!4v1708580415803!5m2!1sen!2ses"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Karnali Yaks Restaurant Location"
        />
      </div>
      {/* Location details */}
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <div style={{ marginBottom: "0.25rem" }}>
          <p style={{ fontSize: "0.875rem" }} className="md:text-base">
            C. Butibamba, 29649 La Cala de Mijas, Málaga
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
