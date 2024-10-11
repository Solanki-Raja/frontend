import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  // const [predict, setPredict]=useState(False);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setImage(file);

      // Create an image preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      // Handle image upload to the server or any further processing here
      console.log("Image ready to upload:", image);
    } else {
      alert("No image file selected.");
    }
  };

  return (
    <div style={styles.container}>
              {imagePreview && (
        <div style={styles.previewContainer}>
          <p>Image Preview:</p>
          <img src={imagePreview} alt="Preview" style={styles.preview} />
        </div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Upload Image</button>
      </form>


    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    // marginBottom: '20px',
    marginTop:'10px'
  },
//   input: {
//     marginBottom: '10px',
//   },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  previewContainer: {
    marginTop: '20px',
  },
  preview: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    border: '1px solid #ddd',
  },
};

export default ImageUpload;
