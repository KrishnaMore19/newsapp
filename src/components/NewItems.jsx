import image from '../assets/image/image.png';

const NewItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{ maxWidth: '345px' }}
    >
      <img
        src={src ? src : image}
        style={{ height: '200px', objectFit: 'cover' }} // Ensures image covers the area without stretching
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : 'Stay updated with the latest news! This article provides essential information and insights from around the world. Click to read more about the story and explore '}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewItems;
