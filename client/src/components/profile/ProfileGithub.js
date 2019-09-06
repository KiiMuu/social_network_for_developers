import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import './Profile.scss';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {

    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos(username)]);

    return (
        <div className="profile-github">
            <div className="uk-margin-small-top">
                <div className="uk-section uk-padding github-repos">
                    <h3 className="uk-text-uppercase"><i className="fa fa-github"></i> Github repos</h3>
                    {repos === null ? <Spinner /> : (
                        repos.map(repo => (
                            <div key={repo._id} className="repo uk-padding">
                                <div className="uk-child-width-1-2@s" data-uk-grid>
                                    <div className="uk-text-left">
                                        <h5>
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                                        </h5>
                                        <p>{repo.description}</p>
                                    </div>
                                    <div className="uk-text-right">
                                        <ul className="uk-list">
                                            <li>Stars: {repo.stargazers_count}</li>
                                            <li>Watchers: {repo.watchers_count}</li>
                                            <li>Forks: {repo.forks_count}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
