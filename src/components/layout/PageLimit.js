import { connect } from 'react-redux';

import { setLimit } from '../../actions/repos';

const PageLimit = ({ limit, setLimit }) => {
  return (
    <div className='dropdown dropstart'>
      <button
        className='btn btn-dark dropdown-toggle'
        type='button'
        id='limitButton'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Page Limit
      </button>
      <ul
        className='dropdown-menu dropdown-menu-dark'
        aria-labelledby='limitButton'
      >
        <li>
          <button className='dropdown-item' onClick={() => setLimit(30)}>
            {limit === 30 ? <strong>30 (Default)</strong> : '30 (Default)'}
          </button>
        </li>
        <li>
          <button className='dropdown-item' onClick={() => setLimit(50)}>
            {limit === 50 ? <strong>50 Selected</strong> : 50}
          </button>
        </li>
        <li>
          <button className='dropdown-item' onClick={() => setLimit(100)}>
            {limit === 100 ? <strong>100 Selected</strong> : 100}
          </button>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  limit: state.repos.limit,
});

export default connect(mapStateToProps, { setLimit })(PageLimit);
