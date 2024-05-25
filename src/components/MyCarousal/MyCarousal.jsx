import React, { useState, useRef } from 'react';
import './Slider.css'; // Import the CSS file

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const countOfPages = 3;

  const switchPages = (newPage) => {
    setCurrentPage(newPage);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      switchPages(currentPage - 1);
    } else {
      switchPages(countOfPages);
    }
  };

  const goToNextPage = () => {
    if (currentPage < countOfPages) {
      switchPages(currentPage + 1);
    } else {
      switchPages(1);
    }
  };

  return (
    <section className="slider-pages">
      <button className="nav-button left-button" onClick={goToPreviousPage}>◀</button>
      <button className="nav-button right-button" onClick={goToNextPage}>▶</button>

      <article className={`js-scrolling__page js-scrolling__page-1 ${currentPage === 1 ? 'js-scrolling--active' : 'js-scrolling--inactive'}`}>
        <div className="slider-page slider-page--right">
          <div className="slider-page--skew">
            <div className="slider-page__content"></div>
          </div>
        </div>
        <div className="slider-page slider-page--left">
          <div className="slider-page--skew">
            <div className="slider-page__content">
              <h1 className="slider-page__title">
                SE03 
              </h1>
              <h2 className="slider-page__description">Short description of specific bike model </h2>
            </div>
          </div>
        </div>
      </article>

      <article className={`js-scrolling__page js-scrolling__page-2 ${currentPage === 2 ? 'js-scrolling--active' : 'js-scrolling--inactive'}`}>
        <div className="slider-page slider-page--right">
          <div className="slider-page--skew">
            <div className="slider-page__content">
              <h1 className="slider-page__title">
                SE03 MAX
              </h1>
              <h2 className="slider-page__description">Short description of specific bike model </h2>
            </div>
          </div>
        </div>
        <div className="slider-page slider-page--left">
          <div className="slider-page--skew">
            <div className="slider-page__content"></div>
          </div>
        </div>
      </article>

      <article className={`js-scrolling__page js-scrolling__page-3 ${currentPage === 3 ? 'js-scrolling--active' : 'js-scrolling--inactive'}`}>
        <div className="slider-page slider-page--right">
          <div className="slider-page--skew">
            <div className="slider-page__content"></div>
          </div>
        </div>
        <div className="slider-page slider-page--left">
          <div className="slider-page--skew">
            <div className="slider-page__content">
              <h1 className="slider-page__title">
                SE03 Lite
              </h1>
              <h2 className="slider-page__description">Short description of specific bike model </h2>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Slider;
