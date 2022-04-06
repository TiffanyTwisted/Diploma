import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Events_BSU(props) {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.href}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description} 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}