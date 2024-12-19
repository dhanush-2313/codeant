import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RepositoryList from '../components/RepositoryList';

const repositories = [
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
  },
  {
    name: 'blog-website',
    language: 'HTML/CSS',
    size: '1876 KB',
    updatedAt: '4 days ago',
    isPublic: true
  },
  {
    name: 'social-network',
    language: 'PHP',
    size: '5432 KB',
    updatedAt: '7 days ago',
    isPublic: false
  }
];

export default function AppLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 transition-all duration-300 lg:ml-1/4">
        <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
            <h1 className="text-base font-normal">Repositories</h1>
            <span className="text-sm text-gray-500">33 total repositories</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Repositories"
                className="h-9 w-[300px] rounded-md border border-gray-300 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search Repositories"
              />
              <svg
                className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="flex h-9 items-center rounded-md bg-blue-500 px-3 text-sm text-white hover:bg-[#2c974b]">
              Add Repository
            </button>
          </div>
        </div>
        <div className="p-6">
          <RepositoryList repositories={filteredRepos} />
        </div>
      </div>
    </div>
  );
}

