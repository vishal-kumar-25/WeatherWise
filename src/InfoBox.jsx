// 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import photo from './assets/photo.jpg';

export default function InfoBox({ info }) {
    const INIT_URL = photo;  // Correctly imported photo

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature= {info.temp}&deg;</p>
                            <p>Humidity= {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;</p>
                            <p>Max Temp = {info.tempMax}&deg;</p>
                            <p>
                                The weather can be described as <i>{info.weather} </i>and feels like
                                {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
