import * as React from 'react';
import { loader } from 'graphql.macro';
import { useMutation, useQuery } from 'react-apollo-hooks';

import Toolbar from '../../components/Toolbar';
import { SetDrawerOpenMutation, SetDrawerOpenMutationVariables, ToolbarQuery } from '../../types';

const ToolbarQueryGQL = loader('./ToolbarQuery.graphql');
const SetDrawerOpenMutationGQL = loader('../../state/drawer/mutations/SetDrawerOpenMutation.graphql');

const DrawerContainer: React.FC = () => {
  const { data } = useQuery<ToolbarQuery>(ToolbarQueryGQL);
  const setDrawerOpen = useMutation<SetDrawerOpenMutation, SetDrawerOpenMutationVariables>(SetDrawerOpenMutationGQL);

  const open = !!data && !!data.drawer.open;

  const onOpenDrawer = React.useCallback(() => {
    setDrawerOpen({
      variables: { open: true },
    })
  }, [setDrawerOpen]);

  return <Toolbar title="Pokémon GraphQL" drawerOpen={open} onOpenDrawer={onOpenDrawer} />;
}

export default DrawerContainer;
