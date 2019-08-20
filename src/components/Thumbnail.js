import React, { useState } from 'react';
import {
  VolumeUpOutlined,
  PlayCircleOutline,
  PauseCircleOutline,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import colors from '../utils/colors';
import Routes from '../routes'
import * as playerActions from '../store/actions/playerActions';

const useStyles = makeStyles(theme => ({
  imgContainer: {
    backgroundSize: 'contain',
    cursor: 'pointer',
    width: 175,
    height: 175,
    position: 'relative',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentBackground: {
    opacity: 0,
    position: 'absolute',
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 0.7,
    }
  },
  icon: {
    fontSize: 75,
    color: colors.white,
    '&:hover': {
      fontSize: 80,
      opacity: 1,
    }
  },
  // playPauseButton: {
  //   opacity: 0,
  // },
  title: {
    margin: 0,
    fontSize: 14,
    color: colors.white,
  },
  details: {
    fontSize: 13,
    color: '#9d9d9d',
    marginTop: 5,
    marginBottom: 0
  }
}));

const Thumbnail = props => {
  const styles = useStyles();

  const { set } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      props.pauseSet();
    } else {
      setIsPlaying(true);
      props.playSet(set);
    }
  };

  const goToDetailPage = set => {
    props.history.push(Routes.goToSetDetail(set.title), { set });
  }

  return (
    <div className={props.className}>
      <div
        className={styles.imgContainer}
        style={{ backgroundImage: `url(${set.img})` }}>
        <div
          className={styles.transparentBackground}
          onClick={() => goToDetailPage(set)}>
          <IconButton className={styles.playPauseButton}>
            {isPlaying && (
              <PauseCircleOutline className={styles.icon} />
            )}
            {!isPlaying && (
              <PlayCircleOutline className={styles.icon} />
            )}
          </IconButton>
        </div>
      </div>
      <h3 className={styles.title}>{set.title}</h3>
      <p className={styles.details}>
        Drift away with child <br />
        ambient music. <br />
      </p>
    </div>
  );
};

const mapStateToProps = ({ playerReducer }) => ({
  playerData: playerReducer
});

const mapActionsToprops = dispatch => ({
  playSet: playerActions.playSet,
  pauseSet: playerActions.pauseSet
});

export default connect(
  mapStateToProps,
  mapActionsToprops()
)(withRouter((Thumbnail)));