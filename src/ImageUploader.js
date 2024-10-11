import * as React from 'react';
import { useRef } from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageUpload from './Upload';

// export default function MediaCard() {
//   console.log("Buttonclick")
//   function handlePredict (){
//     const formdata = new FormData();
//     formdata.append("image", fileInput.files[0], "/D:/Machine Learning projects/Location_Finder/JWT-Auth/Authentication/dataset/val/eiffel_tower/eiffel_tower1.png");

// const requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow"
// };

// fetch("http://127.0.0.1:8000/predict/", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(response.text))
//   // .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//     }
//   return (
  
//     <Card sx={{ maxWidth: 600 }}>
//       <CardMedia
//         sx={{ height: 350 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         <ImageUpload/>
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Upload</Button>
//         <Button size="small" onClick={handlePredict}>Predict</Button>
//       </CardActions>
//     </Card>
//   );
// }


// import React, { useRef } from 'react';
// import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function MediaCard() {
  const fileInputRef = useRef(null);  // Ref to access file input element

  function handlePredict() {
    const file = fileInputRef.current.files[0];

    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);  // Append the selected file

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/predict/", requestOptions)
      // .then((response) => response.text())
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 350 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <input type="file" ref={fileInputRef} accept="image/*" /> {/* File input with ref */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Upload</Button>
        <Button size="small" onClick={handlePredict}>Predict</Button>
      </CardActions>
    </Card>
  );
}
