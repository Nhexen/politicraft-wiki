import Link from "next/link";
import { ArrowRight, Download, Users, Cog, Building, ExternalLink, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl font-bold mb-6">
              <span className="gradient-text">POLITICRAFT</span>
            </h1>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <span className="text-2xl md:text-3xl text-amber-200 font-light">Cooperate</span>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-2xl md:text-3xl text-amber-200 font-light">Build</span>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-2xl md:text-3xl text-amber-200 font-light">Govern</span>
            </div>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Un serveur Minecraft communautaire qui réinvente l'expérience multijoueur
              avec un gameplay politique et coopératif unique.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="https://www.curseforge.com/minecraft/modpacks/politicraft-cooperate-build-govern"
              className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Télécharger</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/guides"
              className="group flex items-center space-x-3 px-8 py-4 glass-effect hover:bg-slate-800/70 text-amber-400 rounded-full font-semibold transition-all duration-300"
            >
              <span>Commencer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Une expérience unique
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Découvrez un gameplay qui mélange créativité, stratégie et coopération
              dans un univers Minecraft réinventé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Coopération",
                description: "Travaillez ensemble pour construire des civilisations prospères et durables.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Building,
                title: "Construction",
                description: "Utilisez des mods avancés comme Create et Minecolonies pour bâtir l'impossible.",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: Cog,
                title: "Gouvernance",
                description: "Participez à un système politique complexe et gérez votre nation.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group glass-effect p-8 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">
            Explorez le Wiki
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                href: "/mods",
                title: "Mods",
                description: "Découvrez tous les mods inclus dans Politicraft et leurs fonctionnalités.",
                icon: Cog
              },
              {
                href: "/guides",
                title: "Guides",
                description: "Tutoriels pour débuter, créer votre nation et maîtriser les mécaniques.",
                icon: Users
              },
              {
                href: "/serveur",
                title: "Serveur",
                description: "Informations de connexion, règles et communauté du serveur.",
                icon: Building
              }
            ].map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <div className="glass-effect p-8 rounded-2xl group-hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-1">
                  <link.icon className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{link.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {link.description}
                  </p>
                  <span className="text-amber-400 group-hover:text-amber-300 flex items-center space-x-2">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl">
            <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à commencer votre aventure ?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Rejoignez notre communauté et découvrez une nouvelle façon de jouer à Minecraft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides/premiere-nation"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Créer ma première nation
              </Link>
              <Link
                href="/serveur"
                className="px-8 py-4 glass-effect hover:bg-slate-800/70 text-amber-400 rounded-full font-semibold transition-all duration-300"
              >
                Infos serveur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
