import { useLocation } from 'react-router-dom';
import * as queryString from 'query-string';

export const useQueryParams = () => {
  const location = useLocation();
  return queryString.parse(location.search);
};
