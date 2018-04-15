import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    const model = this.get('model.points');
    const topics = Object.entries(model).filter(([key, val]) => val && key !== 'total');

    const colours = topics.map(topic => {
      switch(topic[0]) {
        case "HTML":
          return '#39ADD1';
        case "CSS":
          return "#3079AB";
        case "Design":
          return "#e59a13";
        case "JavaScript":
          return "#c25975";
        case "PHP":
          return "#7D669E";
        case "Development Tools":
          return "#637a91";
        case "Digital Literacy":
          return "#c38cd4";
        case "C#":
          return "#9e4d83";
        case "Databases":
          return "#eb7728";
        default:
          return "#aaa";
      }
    });
    
    this.data = {
      datasets: [{
          data: topics.map(topic => topic[1]),
          backgroundColor: colours
      }],
      labels: topics.map(topic => topic[0])
    };

    this.options = {
      legend: {
        display: false
      },
      animation: {
        duration: 2000
      }
    }
  },
});
