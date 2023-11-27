import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
} from '@mui/material';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Baby Care', image: babyCareImage },
    { id: 2, name: 'Supplement', image: supplementImage },
    { id: 3, name: 'Health Check Devices', image: healthImage },
    { id: 4, name: 'general', image: medicineImage },
    { id: 5, name: 'Personal Care', image: personalCareImage },
    { id: 6, name: 'Women Care', image: womenCareImage },
    { id: 7, name: 'Protein Powder & Drinks', image: protienImage },
  ];

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  const handleBuyNow = (productId) => {
    console.log(`Buy now clicked for product ${productId}`);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} md={6}>
            <Paper elevation={3} style={{ height: '100%' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  Price: {product.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Available Stock: {product.stock}
                </Typography>
                <div style={{ marginTop: '16px' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product.id)}
                    style={{ marginRight: '8px' }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Paper>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
