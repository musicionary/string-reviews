import Ember from 'ember';

export function reviewStars(params) {
  var reviewRating = params[0];
  console.log(reviewRating);
  if (reviewRating == 5){
    return "\u266D\u266D\u266D\u266D\u266D";
  } else if (reviewRating == 4){
    return "\u266D\u266D\u266D\u266D";
  } else if (reviewRating == 3){
    return "\u266D\u266D\u266D";
  } else if (reviewRating == 2){
    return "\u266D\u266D";
  } else if (reviewRating == 1) {
    return "\u266D";
  }
}


export default Ember.Helper.helper(reviewStars);
