import { useState } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className={`fixed left-0 top-0 z-40 h-screen w-1/4 border-r border-gray-200 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex h-14 items-center justify-between border-b border-gray-200 px-3">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg?height=24&width=24" alt="CodeAnt AI" className="h-6 w-6" />
          <span className="font-medium">CodeAnt AI</span>
        </div>
        <button className="lg:hidden" onClick={onClose}>
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="relative border-b border-gray-200 px-3 py-2">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex w-full items-center justify-between text-left"
        >
          <div className="text-xs text-gray-500">john@example.com</div>
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white py-1 shadow-lg">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">john@example.com</a>
          </div>
        )}
      </div>
      <nav className="flex flex-col py-2">
        <a href="#" className="flex items-center gap-2 bg-[#0969da] px-3 py-2 text-white">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          Repositories
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          AI Code Review
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Cloud Security
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          How to Use
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </a>
      </nav>
      <div className="absolute bottom-0 w-full border-t border-gray-200">
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Support
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </a>
      </div>
    </aside>
  );
}
