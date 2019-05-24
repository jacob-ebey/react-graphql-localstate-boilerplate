import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiTable from 'mui-virtualized-table';
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer';

export interface JobsPageProps {
  jobs: any[];
}

const JobsPage: React.FC<JobsPageProps> = ({ jobs }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <br />
      <Typography variant="h4" gutterBottom={true}>All Jobs</Typography>

      <div className={classes.grow}>
        <AutoSizer>
          {({ height, width }) => (
            <MuiTable
              data={jobs}
              includeHeaders={true}
              columns={[
                {
                  name: 'title',
                  header: 'Job Title'
                },
                {
                  name: 'company',
                  header: 'Company',
                  cellProps: { align: 'right' },
                  cell: (d: any) => d.company.name
                },
                {
                  name: 'tags',
                  header: 'Tags',
                  cellProps: { align: 'right' },
                  cell: (d: any) => (
                    <div className={classes.chipContainer}>
                      {d.tags.map((tag: any) => (
                        <Chip key={tag.id} label={tag.name} />
                      ))}
                    </div>
                  )
                }
              ]}
              width={width}
              height={height}
              style={{ backgroundColor: 'white' }}
            />
          )}
        </AutoSizer>
      </div>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  grow: {
    flex: 1,
    overflow: 'hidden'
  },
  chipContainer: {
    overflowX: 'auto',
    marginBottom: -theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default JobsPage;
