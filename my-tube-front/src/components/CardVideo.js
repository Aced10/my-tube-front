import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";

export default function CardVideo({ video }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={video?.snippet?.title}
        subheader={video?.snippet?.channelTitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={video?.snippet?.thumbnails?.medium?.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {video?.snippet?.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
