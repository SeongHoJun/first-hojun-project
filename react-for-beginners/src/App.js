import {useState, useEffect} from "react" //useEffect 함수는 코드가 딱 한번만 실행될 수 있도록 보호함.

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(()=>{
      console.log("I run when 'keyword' changes.", keyword);
  }, [keyword]);
  useEffect(()=>{
    console.log("I run when 'keyword' changes.", counter);
}, [counter]);
  useEffect(()=>{
    console.log("I run when 'keyword'& 'counter' changes.", keyword, counter);
}, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here"  
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>

  );
}
export default App;
