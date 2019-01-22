import React from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import "./styles.css";
const imagesLoaded = require("imagesloaded");

class Content extends React.Component {
  handleClick = data => e => {
    this.props.toggleModal(data);
  };

  componentDidUpdate(preProps) {
    if (this.props.currPage !== preProps.currPage || this.props.dataNum !== 0) {
      const photos = document.getElementsByClassName("photo");
      imagesLoaded(photos, () => {
        this.grid.updateLayout();
      });
    }
  }

  render() {
    const { photos } = this.props;
    return (
      <StackGrid
        gridRef={grid => (this.grid = grid)}
        columnWidth={200}
        monitorImagesLoaded={true}
      >
        {photos.map(data => (
          <div
            className="photo pointer"
            key={data.largeImageURL || data.src.large}
            onClick={this.handleClick(data)}
          >
            <img
              className="img-fluid rounded img-thumbnail"
              src={data.largeImageURL || data.src.large}
              alt="img"
            />
          </div>
        ))}
      </StackGrid>
    );
  }
}

export default sizeMe()(Content);
