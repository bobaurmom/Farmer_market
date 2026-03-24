
import Button from '../component/button';
import '../style/home.css';

function Home() {
  return (
    <div className="home">
      <h1>កសិវិទ្យា</h1>
      <p>ទីផ្សារប្រមូលផ្តំុនិងតភ្ជាប់ប្រជាកសិករជាមួយអ្នកប្រើប្រាស់ដោយផ្ទាល់</p>
      <Button onClick={() => window.location.href = '/Sign_up'}>ចាប់ផ្តើម </Button>
    </div>
  );
}

export default Home;