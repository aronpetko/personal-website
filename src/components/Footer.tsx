export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 py-3 text-xs text-gray-400">
        © {new Date().getFullYear()} Aron Petkovski
      </div>
    </footer>
  );
}
