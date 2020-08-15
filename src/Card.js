import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  let header = null;
  let footer = null;

  if (props.header) {
    header = (
      <div className="card-header">
        <h5 className="card-title">{props.title}</h5>
      </div>
    );
  }

  if (props.footer) {
    footer = (
      <div className="card-footer d-flex align-items-center">
        <div className="flex-grow-1">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${props.percent}%` }}
            ></div>
          </div>
        </div>
        <div className="btn-group">
          <button className="btn btn-danger float-right" onClick={props.toPrev}>
            Назад
          </button>
          <button
            className="btn btn-success float-right"
            onClick={props.toNext}
            disabled={!props.access}
          >
            Далее
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card main-card border border-secondary">
      {header}
      <div className="card-body">{props.children}</div>
      {footer}
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired
};

Card.defaultProps = {
  header: true,
  footer: true
};
