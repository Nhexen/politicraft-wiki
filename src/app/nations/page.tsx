import { Crown, Users, MapPin, ExternalLink } from "lucide-react";

interface Nation {
    id: string;
    name: string;
    leader: string;
    members: number;
    description: string;
    coordinates: string;
    established: string;
    government: string;
    specialties: string[];
    color: string;
}

const nations: Nation[] = [
    {
        id: "example-1",
        name: "République de Craftopia",
        leader: "Joueur123",
        members: 15,
        description: "Une nation démocratique axée sur l'innovation technologique et le commerce. Spécialisée dans l'automatisation avec Create et les échanges internationaux.",
        coordinates: "X: 2500, Z: -1800",
        established: "2024-01-15",
        government: "République",
        specialties: ["Automatisation", "Commerce", "Technologie"],
        color: "from-blue-600 to-blue-800"
    },
    {
        id: "example-2",
        name: "Empire de Steampunk",
        leader: "EngineerMaster",
        members: 12,
        description: "Un empire industriel maîtrisant les arts de l'ingénierie et de la mécanique. Leurs créations Create sont légendaires à travers tout le serveur.",
        coordinates: "X: -1200, Z: 3400",
        established: "2024-02-03",
        government: "Empire",
        specialties: ["Ingénierie", "Mécanique", "Construction"],
        color: "from-orange-600 to-red-700"
    },
    {
        id: "example-3",
        name: "Confédération Verte",
        leader: "NatureLover",
        members: 8,
        description: "Une confédération écologique qui privilégie l'harmonie avec la nature tout en développant des technologies durables avec Minecolonies.",
        coordinates: "X: 800, Z: 2100",
        established: "2024-01-28",
        government: "Confédération",
        specialties: ["Écologie", "Agriculture", "Développement durable"],
        color: "from-green-600 to-emerald-700"
    }
];

export default function NationsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-6">
                        Nations de Politicraft
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez les différentes nations qui composent l&apos;univers de Politicraft.
                        Chaque pays a sa propre histoire, gouvernance et spécialités.
                    </p>
                </div>

                {/* Nations Grid */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {nations.map((nation) => (
                        <div
                            key={nation.id}
                            className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-600/50 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className={`h-32 bg-gradient-to-r ${nation.color} relative`}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute bottom-4 left-6">
                                    <Crown className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-amber-300">{nation.name}</h3>
                                    <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                                        {nation.government}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-gray-300">
                                        <Crown className="w-4 h-4 mr-2 text-amber-400" />
                                        <span className="text-sm">Dirigeant: {nation.leader}</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Users className="w-4 h-4 mr-2 text-amber-400" />
                                        <span className="text-sm">{nation.members} membres</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                                        <span className="text-sm">{nation.coordinates}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {nation.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-amber-300 font-semibold mb-2 text-sm">Spécialités:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {nation.specialties.map((specialty, index) => (
                                            <span
                                                key={index}
                                                className="bg-amber-600/20 text-amber-300 px-2 py-1 rounded text-xs"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-xs text-gray-500">
                                    Fondée le {new Date(nation.established).toLocaleDateString('fr-FR')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-amber-400 mb-4">
                        Créez Votre Propre Nation !
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Rejoignez Politicraft et établissez votre propre pays. Rassemblez des alliés,
                        développez votre territoire et écrivez votre place dans l&apos;histoire du serveur.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors gap-2">
                            <ExternalLink className="w-5 h-5" />
                            Rejoindre le Serveur
                        </button>
                        <button className="inline-flex items-center px-6 py-3 border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white rounded-lg font-semibold transition-colors">
                            Règles de Création
                        </button>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-4 gap-6 mt-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2">3</div>
                        <div className="text-gray-400">Nations Actives</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2">35</div>
                        <div className="text-gray-400">Citoyens Total</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2">12</div>
                        <div className="text-gray-400">Accords Commerciaux</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2">156</div>
                        <div className="text-gray-400">Jours d&apos;Histoire</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
