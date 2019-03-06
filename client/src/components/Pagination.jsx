import React from "react";

export const Pagination = ({ pages, actual, func }) => {
  const arr =pages ? new Array(pages):[];
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      {actual !== 1 ? (
        <button
          className="pagination-previous"
          onClick={() => func(actual - 2)}
        >
          Previous
        </button>
      ) : null}
      {actual !== pages ? (
        <button className="pagination-next" onClick={() => func(actual)}>
          Next page
        </button>
      ) : null}
      <ul className="pagination-list">
        {pages < 10 ? (
          arr.map((e, i) => {
            return (
              <li>
                <button
                  key={i}
                  onClick={() => func(i)}
                  className={
                    i === actual
                      ? "pagination-link is-current"
                      : "pagination-link"
                  }
                >
                  {i + 1}
                </button>
              </li>
            );
          })
        ) : (
          <React.Fragment>
            {actual !== 1 ? (
              <React.Fragment>
                {actual >= 3 ? (
                  <li>
                    <button className="pagination-link" onClick={() => func(0)}>
                      1
                    </button>
                  </li>
                ) : null}
                {actual > 10 ? (
                  <li>
                    <span
                      onClick={() => func(actual - 10)}
                      className="pagination-ellipsis"
                    >
                      ...-10
                    </span>
                  </li>
                ) : null}
                <li>
                  <button
                    onClick={() => func(actual - 1)}
                    className="pagination-link"
                  >
                    {actual - 1}
                  </button>
                </li>
              </React.Fragment>
            ) : null}
            <li>
              <button className="pagination-link is-current">{actual}</button>
            </li>
            {actual !== pages - 2 ? (
              <React.Fragment>
                {actual < pages - 2 ? (
                  <li>
                    <button
                      onClick={() => func(actual + 1)}
                      className="pagination-link"
                    >
                      {actual + 1}
                    </button>
                  </li>
                ) : null}
                {actual < pages - 10 ? (
                  <li>
                    <span
                      onClick={() => func(actual + 10)}
                      className="pagination-ellipsis"
                    >
                      ...+10
                    </span>
                  </li>
                ) : null}
                {actual < pages - 3 ? (
                  <li>
                    <button
                      className="pagination-link"
                      onClick={() => func(pages - 1)}
                    >
                      {pages}
                    </button>
                  </li>
                ) : null}
              </React.Fragment>
            ) : null}
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};
