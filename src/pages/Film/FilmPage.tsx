import styles from './FilmPage.module.scss';
import type { FilmPageProps } from './type';
import { FilmAboutDetail } from '../../shared/ui/FilmAboutDetail/FilmAboutDetail';
import { GalleryDemo } from '../../widgets/GalleryDemo/GalleryDemo';
import { BudgetInfo } from '../../widgets/BudgetInfo/BudgetInfo';
import { ButtonUI } from '../../shared/ui/Button/Button';
import { AddFavouriteModal } from '../../widgets/AddFavouriteModal/AddFavouriteModal';
import { ButtonClose } from '../../shared/ui/ButtonClose/ButtonClose';
import { useNavigate } from 'react-router-dom';
import { Tabs } from '../../shared/ui/Tabs/Tabs';
import { FilmCardUI } from '../../shared/ui/FilmCard/FilmCard';
import { FilmFactsList } from '../../widgets/FilmFactsList/FilmFactsList';
import { ActorCard } from '../../shared/ui/ActorCard/ActorCard';
import { useEffect, useState } from 'react';
import { FilmAbout } from '../../shared/ui/FilmAbout/FilmAbout';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { Loader } from '../../shared/ui/Loader/Loader';
import { ButtonToggleTheme } from '../../shared/ui/ButtonToggleTheme/ButtonToggleTheme';

export const FilmPage: React.FC<FilmPageProps> = (props: FilmPageProps) => {
  const { film, isInFavourites, onChangeFavourites, isLoad } = props;
  const [isOpenAddToFavourites, setIsOpenAddToFavourites] = useState(false);
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState('0');

  const titleFilmAboutRef = useRef<HTMLDivElement>(null);
  const titleBudgetInfoRef = useRef<HTMLDivElement>(null);
  const titleFilmFactsRef = useRef<HTMLDivElement>(null);
  const titleFilmActorsRef = useRef<HTMLDivElement>(null);
  const titleFilmCrewRef = useRef<HTMLDivElement>(null);
  const titleSimilarMoviesRef = useRef<HTMLDivElement>(null);

  const [filmAboutRef, inViewFilmAbout] = useInView({
    threshold: 0.5,
  });

  const [budgetInfoRef, inViewBudgetInfo] = useInView({
    threshold: 0.5,
  });
  const [filmFactsRef, inViewFilmFacts] = useInView({
    threshold: 0.5,
  });

  const [filmActorsRef, inViewFilmActors] = useInView({
    threshold: 0.5,
  });

  const [filmCrewRef, inViewFilmCrew] = useInView({
    threshold: 0.5,
  });

  const [similarMoviesRef, inViewSimilarMovies] = useInView({
    threshold: 0.5,
  });
  const tabs: { id: string; title: string }[] = [];

  useEffect(() => {
    if (inViewFilmAbout) {
      setCurrentTab('0');
    }
    if (inViewBudgetInfo) {
      setCurrentTab('1');
    }
    if (inViewFilmFacts) {
      setCurrentTab('2');
    }
    if (inViewFilmActors) {
      setCurrentTab('3');
    }
    if (inViewFilmCrew) {
      setCurrentTab('4');
    }
    if (inViewSimilarMovies) {
      setCurrentTab('5');
    }
  }, [
    inViewFilmAbout,
    inViewBudgetInfo,
    inViewFilmFacts,
    inViewFilmActors,
    inViewFilmCrew,
    inViewSimilarMovies,
  ]);

  const onClickTab = (tabId: string) => {
    setCurrentTab(tabId);
    switch (tabId) {
      case '0':
        titleFilmAboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '1':
        titleBudgetInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '2':
        titleFilmFactsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '3':
        titleFilmActorsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '4':
        titleFilmCrewRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case '5':
        titleSimilarMoviesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  tabs.push({
    id: '0',
    title: 'Описание',
  });
  const fees =
    film.filmDistribution && film.filmDistribution.fees.length > 0
      ? film.filmDistribution.fees || []
      : [];

  if (film.filmDistribution) {
    tabs.push({
      id: '1',
      title: 'Прокат',
    });
  }

  if (film.facts) {
    tabs.push({
      id: '2',
      title: 'Факты',
    });
  }

  if (film.actors) {
    tabs.push({
      id: '3',
      title: 'Актёры',
    });
  }

  if (film.filmCrew) {
    tabs.push({
      id: '4',
      title: 'Съёмка',
    });
  }

  if (film.similarMovies) {
    tabs.push({
      id: '5',
      title: 'Похожие',
    });
  }
  if (isLoad) {
    return (
      <section className={styles.loading}>
        <Loader></Loader>
      </section>
    );
  }
  return (
    <section className={styles.filmPage}>
      <div className={styles.buttonCloseContainer}>
        <ButtonClose onClose={() => navigate(-1)}></ButtonClose>
      </div>
      <div
        className={clsx(styles.film, !film.posterUrl ? styles.noImage : null)}
        style={film.posterUrl ? { backgroundImage: `url(${film.posterUrl})` } : {}}
      >
        <div className={styles.filmAboutContainer}>
          <FilmAbout {...{ ...film, description: '' }}></FilmAbout>
        </div>
        <div className={styles.buttonsNavigation}>
          {film.trailerUrl && (
            <ButtonUI type='primary' width='auto'>
              <a href={film.trailerUrl} style={{ textDecoration: 'none' }}>
                <span className='buttonTitle'>Смотреть трейлер</span>
              </a>
            </ButtonUI>
          )}
          <ButtonUI
            type='opacity'
            width='auto'
            onClick={() => {
              isInFavourites ? onChangeFavourites(film._id) : setIsOpenAddToFavourites(true);
            }}
          >
            {isInFavourites ? (
              <span className='buttonTitle'>Удалить из избранного</span>
            ) : (
              <span className='buttonTitle'>В избранное</span>
            )}
          </ButtonUI>
        </div>
      </div>
      <div className={styles.blockTabs}>
        <Tabs tabs={tabs} activeId={currentTab} onClick={onClickTab} portalId='filmPage'></Tabs>
        <div className={styles.currentBlock}>
          <div className={styles.oneBlock}>
            <span ref={titleFilmAboutRef} className='big-title'>
              Описание
            </span>
            <FilmAboutDetail {...film} {...{ ref: filmAboutRef }} />
          </div>
          {film.filmDistribution && (
            <div className={styles.oneBlock}>
              <span ref={titleBudgetInfoRef} className='big-title'>
                Прокат
              </span>
              <BudgetInfo
                premierRussia={film.filmDistribution.premierRussia}
                premierWorld={film.filmDistribution.premierWorld}
                fees={fees}
                {...{ ref: budgetInfoRef }}
              ></BudgetInfo>
            </div>
          )}
          {film.facts && film.facts.length > 0 && (
            <div className={styles.oneBlock}>
              <span ref={titleFilmFactsRef} className='big-title'>
                Факты
              </span>
              <FilmFactsList facts={film.facts} {...{ ref: filmFactsRef }} />
            </div>
          )}
          {film.actors && film.actors.length > 0 && (
            <div className={styles.oneBlock}>
              <span ref={titleFilmActorsRef} className='big-title'>
                Актёры
              </span>
              <GalleryDemo
                title=''
                to=''
                isWithoutButtonAll={true}
                CardType={ActorCard}
                cardProps={film.actors}
                maxCount={film.actors.length}
                {...{ ref: filmActorsRef }}
              ></GalleryDemo>
            </div>
          )}
          {film.filmCrew && film.filmCrew.length > 0 && (
            <div className={styles.oneBlock}>
              <span ref={titleFilmCrewRef} className='big-title'>
                Съёмочная группа
              </span>
              <GalleryDemo
                title=''
                to=''
                isWithoutButtonAll={true}
                CardType={ActorCard}
                cardProps={film.filmCrew}
                maxCount={film.filmCrew.length}
                {...{ ref: filmCrewRef }}
              ></GalleryDemo>
            </div>
          )}
          {film.similarMovies && film.similarMovies.length > 0 && (
            <div className={styles.oneBlock}>
              <span ref={titleSimilarMoviesRef} className='big-title'>
                Похожие
              </span>
              <GalleryDemo
                title=''
                to=''
                isWithoutButtonAll={true}
                CardType={FilmCardUI}
                cardProps={film.similarMovies}
                maxCount={film.similarMovies.length}
                {...{ ref: similarMoviesRef }}
              ></GalleryDemo>
            </div>
          )}
        </div>
      </div>
      {isOpenAddToFavourites && (
        <AddFavouriteModal
          onCloseModal={() => setIsOpenAddToFavourites(false)}
          film={film}
          onChangeFavourites={() => {
            onChangeFavourites(film._id);
            setIsOpenAddToFavourites(false);
          }}
        />
      )}
      <ButtonToggleTheme></ButtonToggleTheme>
    </section>
  );
};
