import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      profileImage: '',
      bio: ''
    };
  }
  onChange = e => {
    if (e.target.type === "file") {
      // Assuming only image
      let file = this.refs.profileImage.files[0];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);

      reader.onloadend = e => {
        this.setState({ imageUrl: [reader.result], profileImage: file });
      };
    }

    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  onSubmit = e => {

  }

  render() {
    const { bio, profileImage, imageUrl } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">

            <form onSubmit={this.handleSubmit}>

              <div className="profile-div">
                {
                  this.state.imageUrl ?
                  <img src={imageUrl} onClick={() => this.refs.profileImage.click() } className="img-placeholder" alt="" />
                  :
                  <div className="img-placeholder" onClick={() => this.refs.profileImage.click() }>
                    <span className="hidden">Profile Image</span>
                  </div>
                }
                <input type="file" ref="profileImage" onChange={this.onChange} className="hidden" />
              </div>

              <div className="form-group">
                <label className="label ">Bio</label>
                <textarea name="bio" value={bio} className="form-control"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Upload user</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}


export default App;
