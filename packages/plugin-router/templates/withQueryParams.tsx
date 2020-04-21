import React from 'react';
import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

export const withQueryParams = Component => {
  const QueryParamsWrappered = props => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    return <Component {...Object.assign({}, props, { queryParams })} />;
  };
  return QueryParamsWrappered;
};
