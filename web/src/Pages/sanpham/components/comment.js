import React, {useState} from 'react'
import './comment.css'
import './rating.css'
import { FaStar } from 'react-icons/fa'

const Rating = () =>{
  const [rating,setRating] = useState(null);
  const [hover,setHover] = useState(null);

  return(
    <div>
        {[...Array(5)].map((star,i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)} />

              <FaStar className="star" 
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                size={35} 
                onMouseEnter={() => setHover(ratingValue)} 
                onMouseLeave={() => setHover(null)} />
            </label>
          );
         })}
    </div>
  );
}

export default class CommentBox extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showComments: false,
        comments: [
          {id: 1, author: "Nguyễn Văn Bảo Ngọc", body: "Tôi đã mua 3 cái để xài thử và nó thật tuyệt!!", rating:5},
          {id: 2, author: "Đặng Quốc Thanh", body: "Mặt hàng này quá là oke",rating:5},
          {id: 3, author: "Nguyễn Thúc Quân", body: "Vote 5 sao!!",rating:5}
        ]
      };
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Hiện bình luận';
      
      if (this.state.showComments) {
        buttonText = 'Ẩn bình luận';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h2>Để lại nhận xét</h2>
          <CommentForm addComment={this._addComment.bind(this)}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Phần bình luận</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    _addComment(author, body, rating) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body,
        rating
      };
      this.setState({ comments: this.state.comments.concat([comment]) });
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            rating={comment.rating}
            key={comment.id} />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} Bình luận`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input placeholder="Nhập tên" required ref={(input) => this._author = input}></input><br />
            
            <Rating />
            <textarea placeholder="Nhập bình luận" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Đăng bình luận</button>
          </div>
        </form>
      );
    } // end render
    
    _handleSubmit(event) { 
      event.preventDefault(); 
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <p className="comment-body">Đã đánh giá {this.props.rating} <FaStar color={"#ffc107"} /></p>
          <div className="comment-footer">
            
          </div>
        </div>
      );
    }
  }
  