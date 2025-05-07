export default function ErrorLoading() {
    return (
        <div className="flex items-center justify-center h-screen text-lila-100">
            Erreur lors du chargement de données
            <span className="ml-2"></span>
            <div className="w-4 h-4 border-4 border-lila-100 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}