import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card, Button} from 'react-bootstrap'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import NewsPopUp from './NewsPopUp'
import NoImg from '../../static/nimg.png'
const Newscard = (props)=>{
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const date=props.publishedAt.split("T")[0]

  const imgPath= props.urlToImage == null ? NoImg :props.urlToImage

  return <Grid item >
    
    
    <div>
    <Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" className="embed-responsive-item" src={imgPath} />
  <Card.Body className="title">
    <Card.Title >{props.title}</Card.Title>
    <hr/>
    <div className="tex">
    Published by {props.author} on {date}
    </div>
    <div>
   
  
    </div>
    <div className="text-left">
    <Button type="button" className="btn-primary btn-sm pull-right" onClick={()=> window.open(props.url, "_blank")}>
        Know More
      </Button></div>
    {/* <Button  variant="primary" className="btn-primary">Read More</Button> */}
  </Card.Body>
</Card>
</div>
</Grid>
  
     

}
export default Newscard

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function NewsCard() {
//   const classes = useStyles();

//   return (
//     <Grid item xs={4}>
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//     </Grid>
//   );
// }

