import React from 'react';
import { Link, useQueryParams, withQueryParams } from 'ice';

@withQueryParams
class Foo extends React.PureComponent {
  public render() {
    console.log('Foo:', this.props.queryParams);
    return (
      <>Foo</>
    );
  }
}

const Bar = () => {
  const queryParams = useQueryParams();
  console.log('Bar:', queryParams);
  return (
    <>Bar</>
  );
};

const Dashboard = (props) => {
  console.log('props:', props);
  return (
    <>
      <h2>Dashboard Page...</h2>
      <Foo />
      <Bar />
      <Link to="/about">About</Link>
    </>
  );
};

export default Dashboard;
