import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'Samman'
    }
  },
  render() {
    return (
      <div id="footer">
        <h1>Written by {this.author}</h1>
      </div>
    )
  }
}