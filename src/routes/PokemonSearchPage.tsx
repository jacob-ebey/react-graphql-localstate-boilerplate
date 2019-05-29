import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search'

import { Pokemon } from '../types';

export interface PokemonSearchPageProps {
  loadingPokemon: boolean;
  totalPokemon: number;
  pokemon: Partial<Pokemon>[];
  resultQuery: string;
  query: string;
  onQueryChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}

const PokemonSearchPage: React.FC<PokemonSearchPageProps> = ({ loadingPokemon, pokemon, query, resultQuery, onQueryChange }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <br />
        <Typography variant="h4">Pokemon</Typography>

        <TextField
          className={classes.searchInput}
          label="Search"
          value={query}
          onChange={onQueryChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: loadingPokemon ? (
              <LinearProgress className={classes.progress} variant="query" />
            ) : undefined
          }}
          />
      </Container>

      <div className={classes.scroll}>
        <Container>
          {pokemon.length > 0 ? pokemon.map(pokemon => (
            <Card key={pokemon.id} className={classes.card}>
              <CardActionArea className={classes.cardArea}>
                <CardMedia
                  className={classes.cardMedia}
                  image={(pokemon.images && pokemon.images.thumbnail) || undefined}
                  title={pokemon.name && pokemon.name.english}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pokemon.name && pokemon.name.english}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )) : !loadingPokemon && resultQuery && (
            <Typography variant="subtitle1">No pokémon found for `{resultQuery}`</Typography>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  searchInput: {
    display: 'flex',
    marginTop: theme.spacing(1)
  },
  progress: {
    width: 24
  },
  scroll: {
    flex: 1,
    overflowY: 'auto'
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  cardArea: {
    display: 'flex'
  },
  cardMedia: {
    width: 100,
    height: 100,
    margin: theme.spacing(2)
  },
  cardContent: {
    flex: 1
  }
}));

export default PokemonSearchPage;
