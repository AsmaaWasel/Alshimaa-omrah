export default function LocationSection() {
  const mapUrl =
    "https://www.google.com/maps?q=24.6317,46.7168&z=15&output=embed";

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            className="h-[450px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
