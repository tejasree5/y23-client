import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Simulating API call for favorite recipes
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=1') // Example of filtering favorites
      .then((response) => {
        setFavorites(response.data.slice(0, 5)); // Show some favorites
      })
      .catch((error) => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  return (
    <Grid container spacing={2} justify="center">
      {favorites.map((favorite) => (
        <Grid item key={favorite.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{favorite.title}</Typography>
              <Typography variant="body2">{favorite.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Favorites;
