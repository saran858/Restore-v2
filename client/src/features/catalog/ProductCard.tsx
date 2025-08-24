
import type { Product } from '../../app/models/product'
import {Card, CardActions, CardContent ,CardMedia, Typography,Button } from '@mui/material'


type Props = {
    product :Product
}





export default function ProductCard({product}:Props) {
  return (
   <Card
    elevation={3}
    sx={{ width: 300,
      borderRadius:2,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    }}
    >
        <CardMedia

          sx={{height:240, backgroundSize:'cover'}}
          image = {product.pictureUrl}
          title ={product.name}

        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"          
            sx={{ textTransform: 'uppercase' }}>
            {product.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'secondary.main' }}>
            {`$${(product.price / 100).toFixed(2)}`}
          </Typography>
        </CardContent>
         <CardActions
            sx={{justifyContent:'space-between'}}>

</CardActions>
              <Button>Add to Cart</Button> 
               <Button>View</Button>
    </Card>
  )
}

 