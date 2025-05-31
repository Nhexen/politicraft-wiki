import { Server, Users, Shield, Clock, Globe, Copy } from "lucide-react";

export default function ServeurPage() {
    const serverInfo = {
        ip: "politicraft.example.com",
        port: "25565",
        version: "1.20.4",
        players: "24/100",
        uptime: "99.9%"
    };

    const rules = [
        {
            title: "Respect et courtoisie",
            description: "Traitez tous les joueurs avec respect. Le harcèlement, les insultes et la toxicité ne sont pas tolérés."
        },
        {
            title: "Pas de grief",
            description: "Ne détruisez pas les constructions d'autres joueurs sans permission. Le vol est également interdit."
        },
        {
            title: "Roleplay encouragé",
            description: "Restez dans votre rôle autant que possible. Les discussions hors RP doivent utiliser le chat OOC."
        },
        {
            title: "Conflits équitables",
            description: "Les guerres et conflits doivent être déclarés officiellement et menés de manière équitable."
        },
        {
            title: "Constructions réalistes",
            description: "Vos bâtiments doivent s'intégrer dans l'univers médiéval-fantastique du serveur."
        },
        {
            title: "Pas d'exploitation",
            description: "L'usage de bugs, dupes ou hacks est strictement interdit et entraîne un bannissement."
        }
    ];

    const features = [
        {
            icon: Users,
            title: "Communauté active",
            description: "Plus de 500 joueurs réguliers dans une ambiance conviviale"
        },
        {
            icon: Shield,
            title: "Protection anti-grief",
            description: "Système de claims et modération active 24h/7j"
        },
        {
            icon: Globe,
            title: "Monde persistant",
            description: "Map sauvegardée quotidiennement, monde qui évolue en permanence"
        },
        {
            icon: Clock,
            title: "Événements réguliers",
            description: "Tournois, festivals et événements RP organisés chaque semaine"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 mb-6">
                        Serveur Politicraft
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Rejoignez notre communauté et participez à la création d&apos;un monde
                        politique et collaboratif unique dans l&apos;univers Minecraft.
                    </p>
                </div>

                {/* Server Info */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-12">
                    <div className="flex items-center mb-6">
                        <Server className="w-10 h-10 text-amber-400 mr-4" />
                        <h2 className="text-3xl font-bold text-amber-300">Informations de connexion</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                            <h3 className="text-sm text-gray-400 mb-2">Adresse IP</h3>
                            <div className="flex items-center justify-center space-x-2">
                                <code className="text-amber-300 font-mono text-lg">{serverInfo.ip}</code>
                                <button className="text-gray-400 hover:text-amber-400 transition-colors">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                            <h3 className="text-sm text-gray-400 mb-2">Port</h3>
                            <code className="text-amber-300 font-mono text-lg">{serverInfo.port}</code>
                        </div>

                        <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                            <h3 className="text-sm text-gray-400 mb-2">Version</h3>
                            <span className="text-green-400 font-semibold">{serverInfo.version}</span>
                        </div>

                        <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                            <h3 className="text-sm text-gray-400 mb-2">Joueurs</h3>
                            <span className="text-blue-400 font-semibold">{serverInfo.players}</span>
                        </div>

                        <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                            <h3 className="text-sm text-gray-400 mb-2">Uptime</h3>
                            <span className="text-green-400 font-semibold">{serverInfo.uptime}</span>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
                        Pourquoi choisir Politicraft ?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={feature.title} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                                    <IconComponent className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-amber-300 mb-3">{feature.title}</h3>
                                    <p className="text-gray-300 text-sm">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Rules */}
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
                        Règles du serveur
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {rules.map((rule, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-amber-300 mb-3">
                                    {index + 1}. {rule.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {rule.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                        <h3 className="text-xl font-semibold text-amber-300 mb-3">
                            ⚠️ Important
                        </h3>
                        <p className="text-gray-300">
                            Le non-respect de ces règles peut entraîner des sanctions allant de l&apos;avertissement
                            au bannissement définitif. Les modérateurs ont le dernier mot en cas de litige.
                        </p>
                    </div>
                </div>

                {/* Discord */}
                <div className="mt-12 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-600/30 rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-amber-400 mb-4">
                        Rejoignez notre Discord
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Restez connecté avec la communauté, participez aux événements et recevez les dernières nouvelles !
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Rejoindre le Discord
                    </button>
                </div>
            </div>
        </div>
    );
}
