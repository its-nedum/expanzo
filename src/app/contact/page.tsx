import React from 'react';
import type { Metadata } from 'next';
import Contact from '../components/contact';

export const metadata: Metadata = {
    title: 'Contact | Expanzo App',
    description: 'This is the expanzo app contact page',
    keywords: "contact us"
}

const ContactPage = () => {
  return (
    <Contact />
  )
}

export default ContactPage