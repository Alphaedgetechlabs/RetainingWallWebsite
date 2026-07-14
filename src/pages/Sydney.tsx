import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Star, Clock, Phone, ChevronDown, ChevronUp } from "lucide-react";
import SuburbLink from "@/components/SuburbLink";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import sydneyServiceImg from "@/assets/sydney-service-area.webp";

const QUOTE_URL = "/quote";
const Sydney = () => {
  useDocumentTitle("Sydney Retaining Wall Quotes — Get 3 Free Quotes in Minutes");
  const [showAllSuburbs, setShowAllSuburbs] = useState(false);
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const suburbs = ["Arncliffe", "Banksia", "Banksmeadow", "Bardwell Park", "Bardwell Valley", "Bexley North", "Bexley", "Botany", "Brighton-Le-Sands", "Carlton", "Daceyville", "Dolls Point", "Eastgardens", "Eastlakes", "Hillsdale", "Kingsgrove"];
  const allSuburbs = ["Kogarah", "Kyeemagh", "Mascot", "Monterey", "Pagewood", "Ramsgate Beach", "Rockdale", "Rosebery", "Sandringham", "Sans Souci", "Turrella", "Wolli Creek", "Acacia Gardens", "Angus", "Arndell Park", "Bidwill", "Blackett", "Blacktown", "Bungarribee", "Colebee", "Dean Park", "Dharruk", "Doonside", "Eastern Creek", "Emerton", "Glendenning", "Glenwood", "Grantham Farm", "Hassall Grove", "Hebersham", "Huntingwood", "Kellyville Ridge", "Kings Langley", "Kings Park", "Lalor Park", "Lethbridge Park", "Marayong", "Marsden Park", "Melonba", "Minchinbury", "Mount Druitt", "Nirimba Fields", "Oakhurst", "Parklea", "Plumpton", "Prospect", "Quakers Hill", "Richards", "Riverstone", "Rooty Hill", "Ropes Crossing", "Rouse Hill", "Schofields", "Seven Hills", "Shalvey", "Shanes Park", "St Marys", "Stanhope Gardens", "Tallawong", "The Ponds", "Toongabbie", "Tregear", "Vineyard", "Whalan", "Willmot", "Woodcroft", "Bell", "Blackheath", "Blaxland", "Bullaburra", "Faulconbridge", "Glenbrook", "Hazelbrook", "Katoomba", "Lapstone", "Lawson", "Leura", "Linden", "Medlow Bath", "Megalong Valley", "Mount Irvine", "Mount Riverview", "Mount Victoria", "Mount Wilson", "Springwood", "Sun Valley", "Valley Heights", "Warrimoo", "Wentworth Falls", "Winmalee", "Woodford", "Yellow Rock", "Burwood Heights", "Burwood", "Enfield", "Strathfield", "Bickley Vale", "Bringelly", "Camden", "Camden South", "Catherine Field", "Cawdor", "Cobbitty", "Currans Hill", "Elderslie", "Ellis Lane", "Gledswood Hills", "Grasmere", "Gregory Hills", "Harrington Park", "Kirkham", "Leppington", "Mount Annan", "Narellan", "Narellan Vale", "Oran Park", "Rossmore", "Smeaton Grange", "Spring Farm", "Airds", "Ambarvale", "Bardia", "Blair Athol", "Blairmount", "Bow Bowing", "Bradbury", "Campbelltown", "Claymore", "Denham Court", "Eagle Vale", "Englorie Park", "Eschol Park", "Gilead", "Glen Alpine", "Glenfield", "Ingleburn", "Kearns", "Kentlyn", "Leumeah", "Long Point", "Macquarie Fields", "Macquarie Links", "Menangle Park", "Minto Heights", "Minto", "Raby", "Rosemeadow", "Ruse", "St Andrews", "St Helens Park", "Varroville", "Wedderburn", "Abbotsford", "Breakfast Point", "Cabarita", "Canada Bay", "Chiswick", "Concord", "Concord West", "Drummoyne", "Five Dock", "Liberty Grove", "Mortlake", "North Strathfield", "Rhodes", "Rodd Point", "Russell Lea", "Wareemba", "Ashbury", "Bankstown Aerodrome", "Bankstown", "Bass Hill", "Belfield", "Belmore", "Birrong", "Campsie", "Canterbury", "Chester Hill", "Chullora", "Clemton Park", "Condell Park", "Croydon Park", "Earlwood", "East Hills", "Georges Hall", "Greenacre", "Hurlstone Park", "Lakemba", "Lansdowne", "Milperra", "Mount Lewis", "Padstow Heights", "Padstow", "Panania", "Picnic Point", "Potts Hill", "Punchbowl", "Regents Park", "Revesby Heights", "Revesby", "Riverwood", "Roselands", "Sefton", "Wiley Park", "Yagoona", "Baulkham Hills", "Blaxcell", "Camellia", "Carlingford", "Clyde", "Dundas", "Dundas Valley", "East Granville", "Epping", "Ermington", "Harris Park", "North Parramatta", "Northmead", "Oatlands", "Old Toongabbie", "Parramatta", "Rosehill", "Rydalmere", "Silverwater", "Telopea", "Wentworth Point", "Westmead", "Winston Hills", "Denistone East", "Denistone", "Denistone West", "East Ryde", "Eastwood", "Macquarie Park", "Marsfield", "Meadowbank", "Melrose Park", "North Ryde", "Putney", "Ryde", "Tennyson Point", "Top Ryde", "West Ryde", "Alexandria", "Barangaroo", "Beaconsfield", "Centennial Park", "Chippendale", "Darlinghurst", "Darlington", "Dawes Point", "Elizabeth Bay", "Erskineville", "Eveleigh", "Forest Lodge", "Glebe", "Haymarket", "Millers Point", "Moore Park", "Potts Point", "Pyrmont", "Redfern", "Rushcutters Bay", "Surry Hills", "Sydney", "The Rocks", "Ultimo", "Waterloo", "Woolloomooloo", "Zetland", "Auburn", "Berala", "Girraween", "Granville", "Greystanes", "Guildford", "Guildford West", "Holroyd", "Lidcombe", "Mays Hill", "Merrylands", "Merrylands West", "Pemulwuy", "Pendle Hill", "Rookwood", "South Granville", "South Wentworthville", "Wentworthville", "Woodpark", "Abbotsbury", "Bonnyrigg Heights", "Bonnyrigg", "Bossley Park", "Cabramatta", "Cabramatta West", "Canley Heights", "Canley Vale", "Carramar", "Cecil Park", "Edensor Park", "Fairfield East", "Fairfield Heights", "Fairfield", "Fairfield West", "Greenfield Park", "Horsley Park", "Lansvale", "Mount Pritchard", "Old Guildford", "Prairiewood", "Smithfield", "St Johns Park", "Villawood", "Wakeley", "Wetherill Park", "Yennora", "Allawah", "Beverley Park", "Beverly Hills", "Blakehurst", "Carss Park", "Connells Point", "Hurstville Grove", "Hurstville", "Kogarah Bay", "Kyle Bay", "Lugarno", "Mortdale", "Narwee", "Oatley", "Peakhurst Heights", "Peakhurst", "Penshurst", "Ramsgate", "South Hurstville", "Berambing", "Bilpin", "Blaxlands Ridge", "Bligh Park", "Bowen Mountain", "Bucketty", "Central Colo", "Central Macdonald", "Clarendon", "Colo Heights", "Colo", "Cornwallis", "Cumberland Reach", "East Kurrajong", "Ebenezer", "Fernances", "Freemans Reach", "Glossodia", "Grose Vale", "Grose Wold", "Higher Macdonald", "Hobartville", "Kurmond", "Kurrajong Heights", "Kurrajong Hills", "Kurrajong", "Lower Macdonald", "Lower Portland", "McGraths Hill", "Mellong", "Mogo Creek", "Mountain Lagoon", "Mulgrave", "North Richmond", "Oakville", "Perrys Crossing", "Pitt Town Bottoms", "Pitt Town", "Putty", "Richmond Lowlands", "Richmond", "Sackville", "Scheyville", "South Windsor", "St Albans", "Ten Mile Hollow", "Tennyson", "The Devils Wilderness", "The Lowlands", "The Slopes", "Upper Colo", "Upper Macdonald", "Webbs Creek", "Wheeny Creek", "Wilberforce", "Windsor Downs", "Windsor", "Womerah", "Wrights Creek", "Yarramundi", "Arcadia", "Asquith", "Beecroft", "Berowra Heights", "Berowra", "Berrilee", "Bobbin Head", "Brooklyn", "Canoelands", "Cheltenham", "Cherrybrook", "Cowan", "Dangar Island", "Fiddletown", "Forest Glen", "Galston", "Hornsby Heights", "Hornsby", "Laughtondale", "Milsons Passage", "Mount Colah", "Mount Kuring-gai", "Normanhurst", "North Epping", "Pennant Hills", "Rogans Hill", "Round Corner", "Singletons Mill", "Thompsons Corner", "Thornleigh", "Wahroonga (part)", "Waitara", "Westleigh", "Gladesville", "Henley", "Hunters Hill", "Huntleys Cove", "Huntleys Point", "Woolwich", "Annandale", "Ashfield", "Balmain East", "Balmain", "Birchgrove", "Camperdown", "Croydon", "Dobroyd Point", "Dulwich Hill", "Enmore", "Haberfield", "Hurlstone Park (part)", "Leichhardt", "Lewisham", "Lilyfield", "Marrickville", "Newtown", "Petersham", "Rozelle", "St Peters", "Stanmore", "Summer Hill", "Sydenham", "Tempe", "Greenwich", "Lane Cove", "Lane Cove West", "Linley Point", "Longueville", "Northwood", "Riverview", "Ashcroft", "Austral", "Bradfield", "Busby", "Carnes Hill", "Cartwright", "Casula", "Cecil Hills", "Chipping Norton", "Edmondson Park", "Elizabeth Hills", "Green Valley", "Greendale", "Greenway Park", "Hammondville", "Heckenberg", "Hinchinbrook", "Holsworthy", "Horningsea Park", "Hoxton Park", "Kemps Creek", "Len Waters Estate", "Liverpool", "Lurnea", "Middleton Grange", "Miller", "Moorebank", "Pleasure Point", "Prestons", "Sadleir", "Voyager Point", "Warwick Farm", "Wattle Grove", "West Hoxton", "Balmoral", "Beauty Point", "Clifton Gardens", "Georges Heights", "Mosman", "The Spit", "Cammeray", "Cremorne", "Cremorne Point", "Crows Nest", "Kirribilli", "Kurraba Point", "Lavender Bay", "McMahons Point", "Milsons Point", "Neutral Bay", "North Sydney", "St Leonards", "Waverton", "Wollstonecraft", "Allambie Heights", "Avalon Beach", "Balgowlah Heights", "Balgowlah", "Bayview", "Beacon Hill", "Belrose", "Bilgola Beach", "Bilgola Plateau", "Brookvale", "Church Point", "Clareville", "Clontarf", "Coasters Retreat", "Collaroy", "Collaroy Plateau", "Cottage Point", "Cromer", "Curl Curl", "Davidson", "Dee Why", "Duffys Forest", "Elanora Heights", "Elvina Bay", "Fairlight", "Forestville", "Frenchs Forest", "Freshwater", "Great Mackerel Beach", "Ingleside", "Killarney Heights", "Ku-ring-gai Chase", "Lovett Bay", "Manly", "Manly Vale", "McCarrs Creek", "Mona Vale", "Morning Bay", "Narrabeen", "Narraweena", "Newport", "North Balgowlah", "North Curl Curl", "North Manly", "North Narrabeen", "Oxford Falls", "Palm Beach", "Queenscliff", "Scotland Island", "Seaforth", "Terrey Hills", "Warriewood", "Whale Beach", "Wheeler Heights", "Agnes Banks", "Baddaginnie", "Badgerys Creek", "Barton", "Berkshire Park", "Cambridge Gardens", "Cambridge Park", "Castlereagh", "Cranebrook", "Emu Heights", "Emu Plains", "Erskine Park", "Glenmore Park", "Jamison", "Jordan Springs", "Kingswood", "Llandilo", "Luddenham", "Mount Vernon", "North St Marys", "Oxley Park", "Penrith", "Regentville", "South Penrith", "St Clair", "Wallacia", "Werrington County", "Werrington Downs", "Werrington", "Wyndham", "Chifley", "Clovelly", "Coogee", "Kensington", "Kingsford", "La Perouse", "Little Bay", "Malabar", "Maroubra", "Matraville", "Phillip Bay", "Port Botany", "Randwick", "South Coogee", "Flemington", "Homebush", "Homebush West", "Strathfield South", "Alfords Point", "Bangor", "Barden Ridge", "Bonnet Bay", "Bundeena", "Burraneer", "Caringbah", "Caringbah South", "Como", "Cronulla", "Dolans Bay", "Engadine", "Grays Point", "Greenhills Beach", "Gymea Bay", "Gymea", "Heathcote", "Illawong", "Jannali", "Kangaroo Point", "Kareela", "Kirrawee", "Kurnell", "Lilli Pilli", "Loftus", "Lucas Heights", "Maianbar", "Menai", "Miranda", "Oyster Bay", "Port Hacking", "Sandy Point", "Sutherland", "Sylvania", "Sylvania Waters", "Taren Point", "Waterfall", "Woolooware", "Woronora Heights", "Woronora", "Yarrawarrah", "Yowie Bay", "Annangrove", "Beaumont Hills", "Bella Vista", "Box Hill", "Castle Hill", "Cattai", "Dural", "Gables", "Glenhaven", "Glenorie", "Kellyville", "Kenthurst", "Leets Vale", "Maraylya", "Maroota", "Middle Dural", "Nelson", "North Kellyville", "North Rocks", "Norwest", "Sackville North", "South Maroota", "West Pennant Hills", "Wisemans Ferry", "Bondi Beach", "Bondi Junction", "Bondi", "Bronte", "Dover Heights", "North Bondi", "Queens Park", "Tamarama", "Vaucluse", "Waverley", "Artarmon", "Castle Cove", "Castlecrag", "Chatswood", "Chatswood West", "Gore Hill", "Lane Cove North", "Middle Cove", "Naremburn", "North Willoughby", "Northbridge", "Willoughby East", "Willoughby", "Appin", "Bargo", "Belimbla Park", "Brownlow Hill", "Buxton", "Camden Park", "Cataract", "Couridjah", "Darkes Forest (part)", "Douglas Park", "Glenmore", "Lakesland", "Maldon", "Menangle", "Mount Hunter", "Mowbray Park", "Nattai", "Oakdale", "Orangeville", "Pheasants Nest", "Picton", "Razorback", "Silverdale", "Tahmoor", "The Oaks", "Theresa Park", "Thirlmere", "Warragamba", "Werombi", "Bellevue Hill", "Darling Point", "Double Bay", "Edgecliff", "Paddington", "Point Piper", "Rose Bay", "Watsons Bay", "Woollahra"];
  const stats = [{
    icon: Users,
    label: "Jobs Quoted",
    value: "3,200+"
  }, {
    icon: Star,
    label: "Average Rating",
    value: "4.9/5"
  }, {
    icon: Clock,
    label: "Years Experience",
    value: "15+"
  }, {
    icon: MapPin,
    label: "Suburbs Serviced",
    value: "600+"
  }];
  const recentProjects = [{
    suburb: "Parramatta",
    type: "Concrete Sleeper Retaining Wall",
    rating: 5,
    review: "Professional service from start to finish. The team was punctual and the retaining wall looks amazing!"
  }, {
    suburb: "Penrith",
    type: "Timber Sleeper Retaining Wall",
    rating: 5,
    review: "Best retaining wall company in Sydney! Highly recommend for quality work and fair pricing."
  }, {
    suburb: "Liverpool",
    type: "Block Retaining Wall",
    rating: 5,
    review: "Exceeded our expectations. Beautiful retaining wall and excellent customer service throughout."
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Servicing All Sydney Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sydney's Most Trusted
              <br />
              <span className="text-gradient">Retaining Wall Specialists</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Professional retaining wall installation and repair services across Greater Sydney. Local tradies, trusted by 3,200+ Sydney homeowners.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                Get Free Sydney Quotes
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0481752344" aria-label="Call 0481 752 344">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0481 752 344
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => <Card key={index} className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Service All Sydney Suburbs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the Northern Beaches to Campbelltown, we've got Sydney covered
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {suburbs.map((suburb, index) => <SuburbLink key={index} suburb={suburb} cityPath="/sydney" />)}
          </div>

          {/* Expanded suburbs list */}
          {showAllSuburbs && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {allSuburbs.map((suburb, index) => <SuburbLink key={index} suburb={suburb} cityPath="/sydney" />)}
            </div>}

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your suburb? We service the entire Greater Sydney area!</p>
            <Button variant="outline" onClick={() => setShowAllSuburbs(!showAllSuburbs)}>
              {showAllSuburbs ? <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Hide Suburbs
                </> : <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  View All Suburbs
                </>}
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Sydney Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See what your neighbours are saying about their retaining wall projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{project.suburb}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                  <p className="text-sm text-foreground italic">"{project.review}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Sydney Homeowners Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Local Sydney Experts</h3>
                    <p className="text-muted-foreground text-sm">Local contractors understand Sydney's unique weather, council requirements, and local styles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fast Response Times</h3>
                    <p className="text-muted-foreground text-sm">Same-day quotes and flexible scheduling to suit your Sydney lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality</h3>
                    <p className="text-muted-foreground text-sm"> Local expert retaining wall contractors on all installations.                                          </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img alt="Sydney Retaining Wall Projects" className="w-full h-full object-cover" src={sydneyServiceImg} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Sydney Retaining Wall Installed?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join 1,000's of happy Sydney homeowners. Get your free quotes in 60 seconds.</p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get Free Sydney Quotes</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sydney;
