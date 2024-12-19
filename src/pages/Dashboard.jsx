'use client'

import { useState } from 'react'



const repositories= [
  {
    name: 'design-system',
    language: 'React',
    size: '7320 KB',
    updatedAt: '1 day ago',
    isPublic: true
  },
  {
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: '5871 KB',
    updatedAt: '2 days ago',
    isPublic: false
  },
  {
    name: 'analytics-dashboard',
    language: 'Python',
    size: '4521 KB',
    updatedAt: '5 days ago',
    isPublic: false
  },
  {
    name: 'mobile-app',
    language: 'Swift',
    size: '3096 KB',
    updatedAt: '3 days ago',
    isPublic: true
  },
  {
    name: 'e-commerce-platform',
    language: 'Java',
    size: '6210 KB',
    updatedAt: '6 days ago',
    isPublic: false
  }
]

const languageColors = {
  React: 'bg-blue-500',
  Javascript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Swift: 'bg-orange-500',
  Java: 'bg-red-500'
}

const sidebarItems = [
  { name: 'Repositories', icon: 'M3 3h18v18H3V3zm16 16V5H5v14h14zm-5-7v-3h3v3h-3zm0 5v-3h3v5h-5v-2h2zm-9-5v-3h3v3H5zm0 5v-3h3v3H5zm4-3v-3h3v3H9zm0 5v-3h3v3H9z' },
  { name: 'AI Code Review', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
  { name: 'Cloud Security', icon: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4V8l8 4v8zm8-4l-8 4V8l8-4v12z' },
  { name: 'How to Use', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z' },
  { name: 'Settings', icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' }
]

export default function AppLayout() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <span className="text-xl font-semibold">CodeAnt AI</span>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={item.icon} />
              </svg>
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Repositories</h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search Repositories"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
              Add Repository
            </button>
          </div>
        </header>

        <main className="p-4 md:p-6">
          <div className="mb-4 sm:hidden">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
            <ul className="divide-y divide-gray-200">
              {filteredRepos.map((repo) => (
                <li
                  key={repo.name}
                  className="flex flex-col gap-2 p-4 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h2 className="font-medium text-blue-600">{repo.name}</h2>
                      <span className="rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-600">
                        {repo.isPublic ? 'Public' : 'Private'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <span
                          className={`inline-block h-3 w-3 rounded-full ${
                            languageColors[repo.language]
                          }`}
                        />
                        {repo.language}
                      </span>
                      <span>•</span>
                      <span>{repo.size}</span>
                      <span>•</span>
                      <span>Updated {repo.updatedAt}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

