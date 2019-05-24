import * as React from 'react';
import { loader } from 'graphql.macro';
import { useMutation, useQuery } from 'react-apollo-hooks';

import Drawer from '../../components/Drawer';
import { PartialClientState } from '../../state';

const DrawerQuery = loader('./DrawerQuery.graphql');
const SetDrawerOpenMutation = loader('../../state/drawer/mutations/SetDrawerOpenMutation.graphql');

const DrawerContainer: React.FC = () => {
  const { data } = useQuery<PartialClientState>(DrawerQuery, { fetchPolicy: 'cache-only' });
  const setDrawerOpen = useMutation(SetDrawerOpenMutation);

  const open = !!data && !!data.drawer && !!data.drawer.open;

  const onCloseDrawer = React.useCallback(() => {
    setDrawerOpen({
      variables: { open: false },
    })
  }, [setDrawerOpen])

  return <Drawer open={open} onClose={onCloseDrawer} />
}

export default DrawerContainer;
