import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroll-component';

import { getRepos, setPage } from '../actions/repos';

import RepoItem from './RepoItem';

const Home = ({ limit, page, setPage, getRepos, loading, repos }) => {
  useEffect(() => {
    getRepos(limit, page);
    // eslint-disable-next-line
  }, [limit, page]);
  return repos && loading ? (
    <h3>Loading...</h3>
  ) : (
    <Fragment>
      <div className='container'>
        <div className='repos'>
          <InfiniteScroll
            dataLength={repos.length}
            hasMore={true}
            next={() => setPage(page + 1)}
            loader={<h3>Loading...</h3>}
          >
            {repos.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array,
};

const mapStateToProps = (state) => ({
  loading: state.repos.loading,
  repos: state.repos.repos,
  limit: state.repos.limit,
  page: state.repos.page,
});

export default connect(mapStateToProps, { getRepos, setPage })(Home);
