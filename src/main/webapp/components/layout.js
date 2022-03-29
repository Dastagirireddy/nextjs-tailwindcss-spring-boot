import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="py-8">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</div>
            </main>
            <Footer />
        </>
    )
}