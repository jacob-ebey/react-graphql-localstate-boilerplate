import * as React from 'react';
import { loader } from 'graphql.macro';
import { useMutation, useQuery } from 'react-apollo-hooks';

import Drawer from '../../components/Drawer';
import {
  DrawerQuery,
  SetDrawerOpenMutation,
  SetDrawerOpenMutationVariables
} from '../../types';

const DrawerQueryGQL = loader('./DrawerQuery.graphql');
const SetDrawerOpenMutationGQL = loader('../../state/drawer/mutations/SetDrawerOpenMutation.graphql');

const DrawerContainer: React.FC = () => {
  const { data } = useQuery<DrawerQuery>(DrawerQueryGQL);
  const setDrawerOpen = useMutation<SetDrawerOpenMutation, SetDrawerOpenMutationVariables>(SetDrawerOpenMutationGQL);

  const open = !!data && !!data.drawer && !!data.drawer.open;
  const activePartyCount = (data && data.party && data && data.party.activeCount) || 0;

  console.log(data)

  const onCloseDrawer = React.useCallback(() => {
    setDrawerOpen({
      variables: { open: false },
    })
  }, [setDrawerOpen]);

  return <Drawer title="Pokémon GraphQL" activePartyCount={activePartyCount} open={open} onClose={onCloseDrawer} />;
}

export default DrawerContainer;
