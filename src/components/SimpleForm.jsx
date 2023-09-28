export default function SimpleForm() {
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" /><br/>
        <input type="email" name="email" /><br/>
        <input type="number" name="number" /><br/>
        <input type="submit" value='Submit' /><br/>
      </form>
    </div>
  )
}
