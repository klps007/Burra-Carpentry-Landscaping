import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import axios from "axios";

export default class AdminGalleryPage extends Component {
  state = {
    gallery: []
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:7070/admin/gallery");
    console.log(response.data);

    this.setState({
      gallery: response.data
    });
  }
  render() {
    if (this.state.gallery.length > 0) {
      return (
        <div>
          {this.state.gallery.map(image => {
            return <GalleryCard data={image} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

// export default AdminGalleryPage;
// const findProject = (props) => {
// 	return props.projects.find((project) => {
// 	  return props.match.params.id === project._id
// 	})
//   }
  
//   const Project = (props) => {
// 	const project = findProject(props)
// 	return <h1>{project.name}</h1>
//   }