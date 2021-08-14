import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRepos } from '../actions/repos';

import RepoItem from './RepoItem';

const Home = ({ getRepos, loading, repos }) => {
  useEffect(() => {
    getRepos();
    // eslint-disable-next-line
  }, []);
  return repos && loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='container'>
      <div className='repos'>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: state.repos.loading,
  repos: state.repos.repos,
});

export default connect(mapStateToProps, { getRepos })(Home);
