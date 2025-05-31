import { Cog, Building, Zap, Package } from "lucide-react";

export default function ModsPage() {
    const mods = [
        {
            name: "Create",
            icon: Cog,
            description: "Mod d'automatisation et de mécaniques complexes pour construire des machines incroyables.",
            features: [
                "Système de rotation et de transmission",
                "Machines automatisées",
                "Convoyeurs et systèmes de transport",
                "Moulins et générateurs",
            ],
            category: "Technologie"
        },
        {
            name: "Minecolonies",
            icon: Building,
            description: "Créez et gérez votre propre colonie avec des villageois intelligents.",
            features: [
                "Citoyens avec IA avancée",
                "Système de construction automatique",
                "Gestion de ressources",
                "Évolution de la colonie",
            ],
            category: "Gestion"
        },
        {
            name: "Applied Energistics 2",
            icon: Package,
            description: "Système de stockage numérique avancé pour organiser vos ressources.",
            features: [
                "Stockage numérique massif",
                "Autocraft automatisé",
                "Réseaux de distribution",
                "Interface intelligente",
            ],
            category: "Stockage"
        },
        {
            name: "Immersive Engineering",
            icon: Zap,
            description: "Machines industrielles réalistes et système électrique complexe.",
            features: [
                "Machines multiblocs",
                "Système électrique",
                "Raffinage de minerais",
                "Automatisation industrielle",
            ],
            category: "Industriel"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 mb-6">
                        Mods de Politicraft
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez tous les mods inclus dans le modpack Politicraft et apprenez
                        à utiliser leurs fonctionnalités pour développer votre nation.
                    </p>
                </div>

                {/* Mods Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {mods.map((mod) => {
                        const IconComponent = mod.icon;
                        return (
                            <div
                                key={mod.name}
                                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-amber-600/50 transition-colors"
                            >
                                <div className="flex items-center mb-6">
                                    <IconComponent className="w-12 h-12 text-amber-400 mr-4" />
                                    <div>
                                        <h2 className="text-2xl font-bold text-amber-300">{mod.name}</h2>
                                        <span className="text-sm text-amber-600 bg-amber-900/30 px-3 py-1 rounded-full">
                                            {mod.category}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {mod.description}
                                </p>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-amber-200 mb-3">
                                        Fonctionnalités principales :
                                    </h3>
                                    <ul className="space-y-2">
                                        {mod.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-300">
                                                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-slate-800/30 border border-slate-700 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
                        Comment utiliser ces mods ?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-amber-300 mb-4">
                                🎯 Pour les débutants
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Commencez par Minecolonies pour établir votre base et vos citoyens.
                                Ensuite, explorez Create pour automatiser la production de ressources
                                et développer votre infrastructure.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-amber-300 mb-4">
                                ⚡ Pour les experts
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Combinez Applied Energistics 2 avec Create pour créer des systèmes
                                d&apos;automatisation complexes. Utilisez Immersive Engineering pour
                                l&apos;industrie lourde et l&apos;énergie à grande échelle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
