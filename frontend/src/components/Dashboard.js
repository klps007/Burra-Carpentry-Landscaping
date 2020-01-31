import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export default ({ permissions }) => (
  <Card>
    <Title title='Dashboard' />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    {permissions === 'admin' ? <CardContent>Sensitive data</CardContent> : null}
  </Card>
);
