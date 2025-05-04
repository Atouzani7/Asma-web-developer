export default function SpinLoading() {
    return (
        <div className="flex items-center justify-center h-screen text-lila-100">
            Chargement
            <span className="ml-2"></span>
            <div className="w-4 h-4 border-4 border-lila-100 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}