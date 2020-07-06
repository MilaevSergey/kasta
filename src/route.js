import React from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import { Layout } from './layout';
import { Main } from './module/main';

export const Route = () => {
  const routes = mount({
    '/': route({
      title: 'Main',
      view: <Main />,
    }),
  });
  return (
    <Router routes={routes}>
      <Layout>
        <View />
      </Layout>
    </Router>
  );
};
