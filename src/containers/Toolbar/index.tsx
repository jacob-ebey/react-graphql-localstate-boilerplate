import * as React from 'react';
import { loader } from 'graphql.macro';
import { useMutation } from 'react-apollo-hooks';

import Toolbar from '../../components/Toolbar';

const SetDrawerOpenMutation = loader('../../state/drawer/mutations/SetDrawerOpenMutation.graphql');

const DrawerContainer: React.FC = () => {
  const setDrawerOpen = useMutation(SetDrawerOpenMutation);

  const onOpenDrawer = React.useCallback(() => {
    setDrawerOpen({
      variables: { open: true },
    })
  }, [setDrawerOpen])

  return <Toolbar title="GraphQL React Boilerplate" onOpenDrawer={onOpenDrawer} />
}

export default DrawerContainer;
