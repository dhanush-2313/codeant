const languageColors = {
  React: 'bg-[#61dafb]',
  Javascript: 'bg-[#f7df1e]',
  Python: 'bg-[#3572A5]',
  Swift: 'bg-[#ffac45]',
  Java: 'bg-[#b07219]',
  'HTML/CSS': 'bg-[#e34c26]',
  PHP: 'bg-[#4F5D95]'
};

export default function RepositoryCard({ repo }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium text-[#0969da]">{repo.name}</h2>
          <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-600">
            {repo.isPublic ? 'Public' : 'Private'}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${languageColors[repo.language]}`} />
            {repo.language}
          </div>
          <span>•</span>
          <span>{repo.size}</span>
          <span>•</span>
          <span>Updated {repo.updatedAt}</span>
        </div>
      </div>
    </div>
  );
}
