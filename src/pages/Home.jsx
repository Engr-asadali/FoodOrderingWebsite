import '../styles/Home.css'

function Home() {
  return (
    <div id="home" className="home">
      <h1>Welcome to Zaika-e-Khaas</h1>
      
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" 
        rel="noopener noreferrer" className="social-icon">
          📱 Facebook
        </a>
        <a href="https://instagram.com" target="_blank" 
        rel="noopener noreferrer" className="social-icon">
          📸 Instagram
        </a>
        <a href="https://twitter.com" target="_blank" 
        rel="noopener noreferrer" className="social-icon">
          🐦 Twitter
        </a>
      </div>
    </div>
  )
}
export default Home