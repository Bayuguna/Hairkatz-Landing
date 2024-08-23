import { Component, ReactNode } from "react";

interface MediaProps {
  title: string;
  src: string;
  alt?: string;
}

class Media extends Component<MediaProps> {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.renderMedia() || null}
      </div>
    );
  }

  renderMedia(): ReactNode {
    // Abstract method to be overriden in inherited classes
    return null;
  }
}

class Image extends Media {
  renderMedia() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

class Video extends Media {
  renderMedia() {
    return (
      <video controls>
        <source src={this.props.src} type="video/mp4" />
      </video>
    );
  }
}

class Audio extends Media {
  renderMedia() {
    return (
      <audio controls>
        <source src={this.props.src} type="audio/mp3" />
      </audio>
    );
  }
}

export function MediaApp() {
  return (
    <div>
      <Media title="Media" src="image.jpg" alt="Image" />
      <Image
        title="Image"
        src="https://via.placeholder.com/150"
        alt="Placeholder"
      />
      <Video title="Video" src="video.mp4" />
      <Audio title="Audio" src="audio.mp3" />
    </div>
  );
}
