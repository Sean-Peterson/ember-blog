import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost1() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        date: 'May 1, 1979',
        image: this.get('image'),
        title: this.get('title'),
      };
      this.sendAction('savePost2', params);
    }
  }
});
