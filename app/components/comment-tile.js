import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
        updateCommentForm() {
          this.set('updateCommentForm', true);
        },
        updateComment(comment) {
          console.log(comment);
          var params = {
            author: this.get('author'),
            rating: this.get('rating'),
            content: this.get('content'),
          };
          this.set('updateCommentForm', false);
          this.sendAction('updateComment', comment, params);
        }
  }
});
