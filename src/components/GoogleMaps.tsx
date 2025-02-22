const GoogleMaps = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <h1 className="text-9xl font-semibold text-center mb-3">Visit Us</h1>
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-lg"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5504246543983!2d-4.686817184770897!3d36.50174507962092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd731f001d3abe35%3A0x486df130b8396597!2sKarnali%20Yaks%20Restaurant!5e0!3m2!1sen!2ses!4v1708580415803!5m2!1sen!2ses"
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Karnali Yaks Restaurant Location"
        />
      </div>

      {/* Location details */}
      <div className="mt-6 text-center">
        <div className="space-y-2 ">
          <p>C. Butibamba, 29649 La Cala de Mijas, Málaga</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
