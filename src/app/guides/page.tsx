import Link from "next/link";
import { BookOpen, Users, Crown, Cog, Building, Zap } from "lucide-react";

export default function GuidesPage() {
    const guideCategories = [
        {
            title: "Débuter sur Politicraft",
            icon: BookOpen,
            description: "Les bases pour commencer votre aventure sur le serveur",
            guides: [
                {
                    title: "Première connexion",
                    description: "Comment rejoindre le serveur et créer votre personnage",
                    difficulty: "Débutant",
                    readTime: "5 min"
                },
                {
                    title: "Choisir son territoire",
                    description: "Guide pour sélectionner l'emplacement idéal de votre nation",
                    difficulty: "Débutant",
                    readTime: "10 min"
                },
                {
                    title: "Les règles du serveur",
                    description: "Comprendre les règles de roleplay et de gameplay",
                    difficulty: "Débutant",
                    readTime: "8 min"
                }
            ]
        },
        {
            title: "Créer sa Nation",
            icon: Crown,
            description: "Tout ce qu'il faut savoir pour fonder et gérer votre pays",
            guides: [
                {
                    title: "Fondation d'une nation",
                    description: "Étapes complètes pour créer officiellement votre pays",
                    difficulty: "Intermédiaire",
                    readTime: "15 min"
                },
                {
                    title: "Recruter des citoyens",
                    description: "Stratégies pour attirer des joueurs dans votre nation",
                    difficulty: "Intermédiaire",
                    readTime: "12 min"
                },
                {
                    title: "Diplomatie et alliances",
                    description: "Comment négocier et maintenir de bonnes relations",
                    difficulty: "Avancé",
                    readTime: "20 min"
                }
            ]
        },
        {
            title: "Maîtriser les Mods",
            icon: Cog,
            description: "Guides détaillés pour chaque mod principal du modpack",
            guides: [
                {
                    title: "Create : Premiers pas",
                    description: "Introduction aux mécaniques de base du mod Create",
                    difficulty: "Débutant",
                    readTime: "25 min"
                },
                {
                    title: "Minecolonies : Gérer sa colonie",
                    description: "Guide complet pour développer votre colonie",
                    difficulty: "Intermédiaire",
                    readTime: "30 min"
                },
                {
                    title: "Automatisation avancée",
                    description: "Combiner plusieurs mods pour des systèmes complexes",
                    difficulty: "Expert",
                    readTime: "45 min"
                }
            ]
        }
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Débutant": return "text-green-400 bg-green-900/30";
            case "Intermédiaire": return "text-yellow-400 bg-yellow-900/30";
            case "Avancé": return "text-orange-400 bg-orange-900/30";
            case "Expert": return "text-red-400 bg-red-900/30";
            default: return "text-gray-400 bg-gray-900/30";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 mb-6">
                        Guides Politicraft
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Des tutoriels complets pour maîtriser tous les aspects du serveur,
                        de vos premiers pas à la gestion d&apos;une nation prospère.
                    </p>
                </div>

                {/* Guide Categories */}
                <div className="space-y-12">
                    {guideCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={category.title} className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
                                <div className="flex items-center mb-6">
                                    <IconComponent className="w-10 h-10 text-amber-400 mr-4" />
                                    <div>
                                        <h2 className="text-3xl font-bold text-amber-300">{category.title}</h2>
                                        <p className="text-gray-400 mt-1">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.guides.map((guide, index) => (
                                        <Link
                                            key={index}
                                            href={`/guides/${guide.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                            className="group"
                                        >
                                            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-amber-600/50 transition-colors group-hover:bg-slate-800/70">
                                                <h3 className="text-xl font-semibold text-amber-200 mb-3 group-hover:text-amber-300 transition-colors">
                                                    {guide.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                                    {guide.description}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(guide.difficulty)}`}>
                                                        {guide.difficulty}
                                                    </span>
                                                    <span className="text-xs text-gray-400">
                                                        📖 {guide.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Tips */}
                <div className="mt-16 bg-gradient-to-r from-amber-900/20 to-amber-800/20 border border-amber-600/30 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
                        💡 Conseils rapides
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <Users className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-amber-300 mb-2">Collaborez</h3>
                            <p className="text-gray-300 text-sm">
                                Le travail d&apos;équipe est essentiel pour développer une nation prospère
                            </p>
                        </div>
                        <div className="text-center">
                            <Building className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-amber-300 mb-2">Planifiez</h3>
                            <p className="text-gray-300 text-sm">
                                Une bonne planification urbaine facilitera le développement futur
                            </p>
                        </div>
                        <div className="text-center">
                            <Zap className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-amber-300 mb-2">Automatisez</h3>
                            <p className="text-gray-300 text-sm">
                                Utilisez les mods pour automatiser la production et gagner du temps
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
