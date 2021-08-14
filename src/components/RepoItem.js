const RepoItem = ({ repo }) => {
  const {
    name,
    owner,
    description,
    stargazers_count,
    open_issues_count,
    created_at,
  } = repo;
  return (
    <div className='repo-item'>
      <img className='repo-item-img' src={owner.avatar_url} alt="User's Pic" />
      <div className='repo-item-detail'>
        <div className='title'>
          <strong>{name}</strong>
          <p>{description}</p>
        </div>
        <div className='block'>
          <div className='score'>Stars: {stargazers_count}</div>
          <div className='score'>Issues: {open_issues_count}</div>
          <div className='date'>Time Interval by Owner Name</div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
