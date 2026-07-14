const fenceTypes = [
  { name: "Concrete Sleeper Retaining Wall", description: "Durable steel retaining wall in 15 colours", image: "/lovable-uploads/6fab463e-ea08-46c3-a352-056b5f3679ed.png" },
  { name: "Timber Retaining Wall", description: "Classic hardwood and treated pine options", image: "/lovable-uploads/6c7cd0cb-96da-4311-bc4e-f807ef3d22bd.png" },
  { name: "Pool Retaining Wall", description: "Compliant glass and aluminium pool retaining walls", image: "/lovable-uploads/e5c63138-0664-4528-baf3-0f8a59cc91bc.png" },
  { name: "Aluminium Retaining Wall", description: "Low-maintenance aluminium slat retaining walls", image: "/lovable-uploads/51171e67-1114-4a68-996d-c5cf07323fb1.png" },
];

const BeaconsfieldFenceTypes = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Beaconsfield Retaining Wall Types</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose from our range of quality retaining wall options available in Beaconsfield</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fenceTypes.map((fence, i) => (
          <div key={i} className="group rounded-2xl overflow-hidden shadow-elegant bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={fence.image} alt={fence.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" draggable="false" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{fence.name}</h3>
              <p className="text-sm text-muted-foreground">{fence.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeaconsfieldFenceTypes;