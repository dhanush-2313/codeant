import RepositoryCard from './RepositoryCard';

const languageColors = {
  React: 'bg-[#61dafb]',
  Javascript: 'bg-[#f7df1e]',
  Python: 'bg-[#3572A5]',
  Swift: 'bg-[#ffac45]',
  Java: 'bg-[#b07219]',
  'HTML/CSS': 'bg-[#e34c26]',
  PHP: 'bg-[#4F5D95]'
};

export default function RepositoryList({ repositories }) {
  return (
    <div className="p-6">
      <div className="divide-y divide-gray-100 rounded-md border border-gray-200 bg-white">
        {repositories.map((repo) => (
          <RepositoryCard key={repo.name} repo={repo} />
        ))}
      </div>
    </div>
  );
}
