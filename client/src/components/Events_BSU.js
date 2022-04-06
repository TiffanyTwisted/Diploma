import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import  Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

import styles from "../styles/Events_BSU.css";

export default function Events_BSU(props) {
    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h5" style={styles.title}>
                Мероприятия БГУ
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                   <Card title = 'Test' description='Test' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                   <Card title = 'Test' description='Test' />
                </Grid>
            </Grid>
        </Container>
    );
}