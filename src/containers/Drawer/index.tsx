import * as React from 'react';
import { loader } from 'graphql.macro';
import { useMutation, useQuery } from 'react-apollo-hooks';

import Drawer from '../../components/Drawer';
import { DrawerQuery } from '../../types';

const DrawerQueryGQL = loader('./DrawerQuery.graphql');
const SetDrawerOpenMutation = loader('../../state/drawer/mutations/SetDrawerOpenMutation.graphql');

const DrawerContainer: React.FC = () => {
  const { data } = useQuery<DrawerQuery>(DrawerQueryGQL, { fetchPolicy: 'cache-only' });
  const setDrawerOpen = useMutation(SetDrawerOpenMutation);

  const open = !!data && !!data.drawer.open;

  const onCloseDrawer = React.useCallback(() => {
    setDrawerOpen({
      variables: { open: false },
    })
  }, [setDrawerOpen]);

  return <Drawer title="Pokémon GraphQL" open={open} onClose={onCloseDrawer} />;
}

export default DrawerContainer;
