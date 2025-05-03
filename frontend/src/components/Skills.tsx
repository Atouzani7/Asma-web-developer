export default function Skills() {
    return (
        // <div className="flex justify-center items-center h-[70vh] md:h-[60vh] lg:h-[80vh] max-h-[80vh] p-4 bg-black text-white">
        <div className="flex justify-center items-center h-[70vh] md:h-[60vh] lg:h-[70vh] max-h-[80vh] p-4 bg-black text-white">

            <div className="w-full max-w-4xl">
                {/* Titre */}
                <h2 className="text-3xl font-Avenir text-center mb-6">Compétences</h2>

                {/* Tableau */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="px-4 py-2 text-left">📁 Catégories</th>
                                <th className="px-4 py-2 text-left">💡 Compétences</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-lila-100">
                                <td className="border-r-2 border-black px-4 py-2 text-black">💻 Front-end Development</td>
                                <td className="border-l-2 border-black px-4 py-2 text-black">🌐 HTML, CSS, JavaScript, TypeScript, React.js, Next.js</td>
                            </tr>
                            <tr className="bg-greenPastel-100">
                                <td className="border-r-2 border-black px-4 py-2 text-black">⚙️ Back-end Development</td>
                                <td className="border-l-2 border-black px-4 py-2 text-black">🖥️ Node.js, NestJS, ExpressJS, GraphQL</td>
                            </tr>
                            <tr className="bg-lila-100">
                                <td className="border-r-2 border-black px-4 py-2 text-black">💾 Bases de données</td>
                                <td className="border-l-2 border-black px-4 py-2 text-black">🗄️ MySQL, SQLite, PostgreSQL, TypeORM</td>
                            </tr>
                            <tr className="bg-greenPastel-100">
                                <td className="border-r-2 border-black px-4 py-2 text-black">🛠️ DevOps & Outils</td>
                                <td className="border-l-2 border-black px-4 py-2 text-black">🔄 Git, 🚀 CI/CD, 🐳 Docker</td>
                            </tr>
                            <tr className="bg-lila-100">
                                <td className="border-r-2 border-black px-4 py-2 text-black">✅ Tests</td>
                                <td className="border-l-2 border-black px-4 py-2 text-black">🧪 Cypress, Jest</td>
                            </tr>
                            <tr className="bg-greenPastel-100">
                                <td className="border-r-2 border-black px-4 py-2 text-black">📆 Méthode de travail</td>
                                <td className="border-l-2 border-black px-4 py-2 text-black">🔄 Agile</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
