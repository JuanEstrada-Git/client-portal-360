// app/components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex space-x-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/deliverables">Deliverables</Link>
            <Link href="/feedback">Feedback</Link>
        </nav>
    );
}
