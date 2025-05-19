export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-gray-600">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {currentYear} - Mati & Ro</p>
      </div>
    </footer>
  )
}
