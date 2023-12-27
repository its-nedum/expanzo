import Dashboard from "./components/dashboard";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Expanzo App',
  description: 'This is the expanzo app home page',
  keywords: "dashboard"
}

export default function Home() {
  return (
      <Dashboard />
  )
}
