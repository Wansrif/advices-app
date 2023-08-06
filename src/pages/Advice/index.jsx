import PropTypes from 'prop-types';
import {
  BsFillPauseFill,
  BsFillDice5Fill,
  BsFillLightningChargeFill,
  BsMoonStarsFill,
  BsCameraReelsFill,
} from 'react-icons/bs';
import { PiBowlFoodFill } from 'react-icons/pi';
import { Skeleton } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { WindupChildren, Pause } from 'windups';

import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAdvice, setTheme } from '@containers/App/actions';
import { selectAdvice, selectLoading, selectTheme } from '@containers/App/selectors';
import classes from './style.module.scss';

const Advice = ({ advice, loading }) => {
  const dispatch = useDispatch();
  const controls = useAnimation();

  const handleTheme = (e) => {
    const name = e.currentTarget.getAttribute('name');

    dispatch(setTheme(name));
    controls.start('animate');
  };

  useEffect(() => {
    dispatch(getAdvice());
  }, [dispatch]);

  const handleRandomAdvice = () => {
    dispatch(getAdvice());
    controls.start('animate');
  };

  const shakeVariants = {
    animate: {
      x: [-10, 10, -10, 10, -10, 0],
      rotate: [-5, 5, -5, 5, -5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  const scaleVariants = {
    initial: { scale: 0.5 },
    animate: {
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className={classes.container}>
      <motion.div className={classes.card} animate={controls} variants={shakeVariants}>
        <div className={classes.card__content}>
          <div className={classes.containerTheme}>
            <button type="button" name="light" title="light" onClick={handleTheme}>
              <BsFillLightningChargeFill className={classes.icon} />
            </button>
            <button type="button" name="dark" title="dark" onClick={handleTheme}>
              <BsMoonStarsFill className={classes.icon} />
            </button>
            <button type="button" name="pastel" title="pastel" onClick={handleTheme}>
              <PiBowlFoodFill className={classes.icon} />
            </button>
            <button type="button" name="vintage" title="vintage" onClick={handleTheme}>
              <BsCameraReelsFill className={classes.icon} />
            </button>
          </div>
          {advice && (
            <>
              <h1 className={classes.card__title}>
                {loading ? (
                  <motion.div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    initial="initial"
                    animate="animate"
                    variants={scaleVariants}
                  >
                    <span>Loading...</span>
                  </motion.div>
                ) : (
                  `advice #${advice.id}`
                )}
              </h1>
              <p className={classes.card__text}>
                {loading ? (
                  <ParagraphSkeleton />
                ) : (
                  <WindupChildren>
                    <Pause ms={500} />“{advice.advice}”
                  </WindupChildren>
                )}
              </p>
            </>
          )}
          <div className={classes.card__icon__container}>
            <BsFillPauseFill className={classes.card__icon} />
          </div>
        </div>

        <div className={classes.dice__container}>
          <div className={classes.dice__icon__container}>
            <motion.button type="button" onClick={handleRandomAdvice} animate={controls} variants={rotateVariants}>
              <BsFillDice5Fill className={classes.dice__icon} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ParagraphSkeleton = () => (
  <>
    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1.5rem', margin: 'auto' }} />
    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1.5rem', width: '70%', margin: 'auto' }} />
    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1.5rem', width: '30%', margin: 'auto' }} />
  </>
);

Advice.propTypes = {
  advice: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  theme: selectTheme,
  advice: selectAdvice,
  loading: selectLoading,
});

export default connect(mapStateToProps)(Advice);
